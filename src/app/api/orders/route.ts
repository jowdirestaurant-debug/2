import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import {
  orders,
  orderItems,
  menuItems,
  itemSizes,
  bans,
  promoCodes,
  deliveryAggregators,
  orderDispatches,
} from "@/db/schema";
import { eq, desc, inArray, sql } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth";
import { getSettings } from "@/lib/settings";
import { sendOrderConfirmationEmail } from "@/lib/email";
import { normalizeLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type CartLine = { itemId: number; sizeId?: number | null; quantity: number };

function round3(n: number) {
  return Math.round(n * 1000) / 1000;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const locale = normalizeLocale(body.locale);
    const user = await getSessionUser();

    const {
      customerName,
      customerPhone,
      customerEmail,
      orderType,
      governorateId,
      regionId,
      addressDetails,
      paymentMethod,
      promoCode,
      notes,
      lines,
    } = body as {
      customerName: string;
      customerPhone: string;
      customerEmail?: string;
      orderType: "dine_in" | "takeaway" | "delivery";
      governorateId?: number;
      regionId?: number;
      addressDetails?: string;
      paymentMethod: string;
      promoCode?: string;
      notes?: string;
      lines: CartLine[];
    };

    if (!customerName || !customerPhone || !orderType || !Array.isArray(lines) || lines.length === 0) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }
    if (orderType === "delivery" && (!governorateId || !regionId || !addressDetails)) {
      return NextResponse.json({ error: "missing_address" }, { status: 400 });
    }
    if (user?.isBanned) {
      return NextResponse.json({ error: "banned" }, { status: 403 });
    }

    // Ban checks: email / phone / address
    const banRows = await db.select().from(bans);
    const emailLc = (customerEmail ?? user?.email ?? "").toLowerCase();
    const phoneNorm = customerPhone.replace(/\s+/g, "");
    const addrLc = (addressDetails ?? "").toLowerCase();
    for (const b of banRows) {
      const v = b.value.toLowerCase().trim();
      if (!v) continue;
      if (b.banType === "email" && emailLc && emailLc === v) {
        return NextResponse.json({ error: "banned" }, { status: 403 });
      }
      if (b.banType === "phone" && phoneNorm === v.replace(/\s+/g, "")) {
        return NextResponse.json({ error: "banned" }, { status: 403 });
      }
      if (b.banType === "address" && addrLc && addrLc.includes(v)) {
        return NextResponse.json({ error: "banned" }, { status: 403 });
      }
    }

    // Load items/sizes and validate availability + compute subtotal server-side
    const itemIds = [...new Set(lines.map((l) => l.itemId))];
    const dbItems = await db.select().from(menuItems).where(inArray(menuItems.id, itemIds));
    const sizeIds = lines.map((l) => l.sizeId).filter((s): s is number => !!s);
    const dbSizes = sizeIds.length ? await db.select().from(itemSizes).where(inArray(itemSizes.id, sizeIds)) : [];

    let subtotal = 0;
    const lineRecords: (typeof orderItems.$inferInsert)[] = [];
    for (const line of lines) {
      const item = dbItems.find((i) => i.id === line.itemId);
      if (!item || !item.isAvailable) {
        return NextResponse.json({ error: "item_unavailable" }, { status: 409 });
      }
      const qty = Math.max(1, Math.min(50, Number(line.quantity) || 1));
      let unit = Number(item.basePrice);
      let discount = Number(item.discountPercent) || 0;
      let sizeNameAr: string | null = null;
      let sizeNameEn: string | null = null;
      if (line.sizeId) {
        const size = dbSizes.find((s) => s.id === line.sizeId && s.itemId === item.id);
        if (!size || !size.isAvailable) {
          return NextResponse.json({ error: "item_unavailable" }, { status: 409 });
        }
        if (size.stock !== null && size.stock < qty) {
          return NextResponse.json({ error: "out_of_stock" }, { status: 409 });
        }
        unit = Number(size.price);
        if (Number(size.discountPercent) > 0) discount = Number(size.discountPercent);
        sizeNameAr = size.nameAr;
        sizeNameEn = size.nameEn;
      }
      const effUnit = round3(unit * (1 - discount / 100));
      const lineTotal = round3(effUnit * qty);
      subtotal += lineTotal;
      lineRecords.push({
        orderId: 0,
        itemId: item.id,
        sizeId: line.sizeId ?? null,
        nameAr: item.nameAr,
        nameEn: item.nameEn,
        sizeNameAr,
        sizeNameEn,
        unitPrice: effUnit.toFixed(3),
        quantity: qty,
        lineTotal: lineTotal.toFixed(3),
      });
    }
    subtotal = round3(subtotal);

    // Promo code
    let discountAmount = 0;
    let appliedPromo: string | null = null;
    if (promoCode) {
      const [promo] = await db
        .select()
        .from(promoCodes)
        .where(eq(promoCodes.code, String(promoCode).trim().toUpperCase()))
        .limit(1);
      const now = new Date();
      const valid =
        promo &&
        promo.isActive &&
        (!promo.validFrom || promo.validFrom <= now) &&
        (!promo.validUntil || promo.validUntil >= now) &&
        (promo.maxUsageCount === null || promo.currentUsageCount < promo.maxUsageCount);
      if (!valid) {
        return NextResponse.json({ error: "promo_invalid" }, { status: 400 });
      }
      discountAmount =
        promo.discountType === "percent"
          ? round3((subtotal * Number(promo.discountValue)) / 100)
          : Math.min(subtotal, Number(promo.discountValue));
      appliedPromo = promo.code;
      await db
        .update(promoCodes)
        .set({ currentUsageCount: sql`${promoCodes.currentUsageCount} + 1` })
        .where(eq(promoCodes.id, promo.id));
    }

    // Delivery fee + 50/50 share
    const settings = await getSettings();
    let feeTotal = 0;
    let feeCustomer = 0;
    let feeRestaurant = 0;
    if (orderType === "delivery") {
      feeTotal = Number(settings.delivery_fee_base || "1.5");
      const shareEnabled = settings.delivery_share_enabled === "1";
      const customerPercent = shareEnabled ? Number(settings.delivery_customer_share_percent || "50") : 100;
      feeCustomer = round3((feeTotal * customerPercent) / 100);
      feeRestaurant = round3(feeTotal - feeCustomer);
    }

    const total = round3(Math.max(0, subtotal - discountAmount) + feeCustomer);
    const orderNumber = `JW-${Date.now().toString(36).toUpperCase()}${Math.floor(Math.random() * 90 + 10)}`;

    const [order] = await db
      .insert(orders)
      .values({
        orderNumber,
        userId: user?.id ?? null,
        customerName: String(customerName).trim(),
        customerPhone: String(customerPhone).trim(),
        customerEmail: emailLc || null,
        orderType,
        governorateId: governorateId ?? null,
        regionId: regionId ?? null,
        addressDetails: addressDetails ?? null,
        paymentMethod: paymentMethod || "cash",
        paymentStatus: paymentMethod === "cash" ? "unpaid" : "pending",
        status: "pending",
        subtotal: subtotal.toFixed(3),
        discountAmount: discountAmount.toFixed(3),
        deliveryFeeTotal: feeTotal.toFixed(3),
        deliveryFeeCustomer: feeCustomer.toFixed(3),
        deliveryFeeRestaurant: feeRestaurant.toFixed(3),
        total: total.toFixed(3),
        promoCode: appliedPromo,
        notes: notes || null,
        language: locale,
        dispatchStatus: orderType === "delivery" ? "broadcasting" : null,
      })
      .returning();

    await db.insert(orderItems).values(lineRecords.map((r) => ({ ...r, orderId: order.id })));

    // Decrement stock
    for (const line of lines) {
      if (line.sizeId) {
        await db
          .update(itemSizes)
          .set({ stock: sql`CASE WHEN ${itemSizes.stock} IS NULL THEN NULL ELSE ${itemSizes.stock} - ${Math.max(1, Number(line.quantity) || 1)} END` })
          .where(eq(itemSizes.id, line.sizeId));
      }
    }

    // Broadcast delivery order synchronously to ensure execution and logging
    if (orderType === "delivery") {
      const aggregators = await db
        .select()
        .from(deliveryAggregators)
        .where(eq(deliveryAggregators.isActive, true));
      
      for (const agg of aggregators) {
        await db.insert(orderDispatches).values({ orderId: order.id, aggregatorId: agg.id });
        if (agg.apiUrl && agg.apiKey) {
          const apiUrl = agg.apiUrl; 
          const apiKey = agg.apiKey.trim();
          
          try {
            console.log("[Parcel Dispatch] Attempting to send order:", order.orderNumber, "to URL:", apiUrl);
            const dispatchRes = await fetch(`${apiUrl.replace(/\/+$/, "")}/api/v4/orders`, {
              method: "POST",
              headers: { 
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${apiKey}` 
              },
              body: JSON.stringify({
                externalOrderId: order.orderNumber,
                customer: { name: order.customerName, phone: order.customerPhone },
                address: { formattedAddress: order.addressDetails },
                payment: { total: order.total },
                items: lineRecords.map(item => ({
                  name: item.nameAr,
                  quantity: item.quantity,
                  price: Number(item.unitPrice)
                })),
              }),
            });

            const responseText = await dispatchRes.text();
            if (!dispatchRes.ok) {
              console.error("[Parcel Order Dispatch Failed]:", dispatchRes.status, responseText);
            } else {
              console.log("[Parcel Order Dispatched Successfully]:", order.orderNumber, responseText);
            }
          } catch (e: any) {
            console.error("[dispatch exception]:", e?.message || e);
          }
        }
      }
    }

    if (emailLc) {
      sendOrderConfirmationEmail(emailLc, order.customerName, order.orderNumber, order.total, locale).catch(() => {});
    }

    return NextResponse.json({ ok: true, orderNumber: order.orderNumber, total: order.total, id: order.id });
  } catch (e) {
    console.error("[orders:create]", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const orderNumber = searchParams.get("orderNumber");

  if (orderNumber) {
    const [order] = await db
      .select()
      .from(orders)
      .where(eq(orders.orderNumber, orderNumber))
      .limit(1);

    if (!order) {
      return NextResponse.json({ error: "order_not_found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, status: order.status, orderNumber: order.orderNumber });
  }

  const user = await getSessionUser();
  if (!user) return NextResponse.json({ orders: [] });
  const rows = await db
    .select()
    .from(orders)
    .where(eq(orders.userId, user.id))
    .orderBy(desc(orders.createdAt))
    .limit(50);
  const ids = rows.map((r) => r.id);
  const items = ids.length ? await db.select().from(orderItems).where(inArray(orderItems.orderId, ids)) : [];
  return NextResponse.json({
    orders: rows.map((o) => ({ ...o, items: items.filter((i) => i.orderId === o.id) })),
  });
}

export async function PATCH(req: NextRequest) {
  try {
    const { code, subtotal } = await req.json();
    const [promo] = await db
      .select()
      .from(promoCodes)
      .where(eq(promoCodes.code, String(code ?? "").trim().toUpperCase()))
      .limit(1);
    const now = new Date();
    const valid =
      promo &&
      promo.isActive &&
      (!promo.validFrom || promo.validFrom <= now) &&
      (!promo.validUntil || promo.validUntil >= now) &&
      (promo.maxUsageCount === null || promo.currentUsageCount < promo.maxUsageCount);
    if (!valid) return NextResponse.json({ valid: false });
    const sub = Number(subtotal) || 0;
    const amount =
      promo.discountType === "percent"
        ? Math.round(((sub * Number(promo.discountValue)) / 100) * 1000) / 1000
        : Math.min(sub, Number(promo.discountValue));
    return NextResponse.json({ valid: true, code: promo.code, amount });
  } catch {
    return NextResponse.json({ valid: false });
  }
}