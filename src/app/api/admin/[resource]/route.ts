import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import {
  categories,
  menuItems,
  itemSizes,
  governorates,
  regions,
  promoCodes,
  popups,
  staff,
  bans,
  deliveryAggregators,
  siteSettings,
  siteContent,
  orders,
  orderItems,
  users,
} from "@/db/schema";
import { eq, desc, asc, and, gte, lte, inArray, sql } from "drizzle-orm";
import { getSessionStaff, hashPassword } from "@/lib/auth";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ resource: string }> };

async function guard() {
  const member = await getSessionStaff();
  if (!member) return null;
  return member;
}

function bad(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status });
}

/* ------------------------------ GET ------------------------------ */
export async function GET(req: NextRequest, ctx: Ctx) {
  const member = await guard();
  if (!member) return bad("unauthorized", 401);
  const { resource } = await ctx.params;
  const sp = req.nextUrl.searchParams;

  try {
    switch (resource) {
      case "categories":
        return NextResponse.json({ data: await db.select().from(categories).orderBy(asc(categories.sortOrder), asc(categories.id)) });
      case "items":
        return NextResponse.json({ data: await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder), asc(menuItems.id)) });
      case "sizes":
        return NextResponse.json({ data: await db.select().from(itemSizes).orderBy(asc(itemSizes.sortOrder), asc(itemSizes.id)) });
      case "governorates":
        return NextResponse.json({ data: await db.select().from(governorates).orderBy(asc(governorates.id)) });
      case "regions":
        return NextResponse.json({ data: await db.select().from(regions).orderBy(asc(regions.id)) });
      case "promos":
        return NextResponse.json({ data: await db.select().from(promoCodes).orderBy(desc(promoCodes.id)) });
      case "popups":
        return NextResponse.json({ data: await db.select().from(popups).orderBy(desc(popups.id)) });
      case "bans":
        return NextResponse.json({ data: await db.select().from(bans).orderBy(desc(bans.id)) });
      case "aggregators":
        return NextResponse.json({ data: await db.select().from(deliveryAggregators).orderBy(asc(deliveryAggregators.id)) });
      case "customers": {
        const data = await db
          .select({
            id: users.id, fullName: users.fullName, email: users.email, phone: users.phone,
            isBanned: users.isBanned, createdAt: users.createdAt,
          })
          .from(users)
          .orderBy(desc(users.id))
          .limit(200);
        return NextResponse.json({ data });
      }
      case "staff": {
        const data = await db
          .select({
            id: staff.id, username: staff.username, fullName: staff.fullName, email: staff.email,
            role: staff.role, permissions: staff.permissions, isActive: staff.isActive, createdAt: staff.createdAt,
          })
          .from(staff)
          .orderBy(asc(staff.id));
        return NextResponse.json({ data });
      }
      case "settings":
        return NextResponse.json({ data: await db.select().from(siteSettings) });
      case "content":
        return NextResponse.json({ data: await db.select().from(siteContent).orderBy(asc(siteContent.key)) });
      case "orders": {
        const sinceId = Number(sp.get("sinceId") || 0);
        const where = sinceId > 0 ? sql`${orders.id} > ${sinceId}` : undefined;
        const rows = where
          ? await db.select().from(orders).where(where).orderBy(desc(orders.id)).limit(100)
          : await db.select().from(orders).orderBy(desc(orders.id)).limit(100);
        const ids = rows.map((r) => r.id);
        const lines = ids.length ? await db.select().from(orderItems).where(inArray(orderItems.orderId, ids)) : [];
        const unacknowledged = await db
          .select({ count: sql<number>`count(*)::int` })
          .from(orders)
          .where(eq(orders.acknowledged, false));
        return NextResponse.json({
          data: rows.map((o) => ({ ...o, items: lines.filter((l) => l.orderId === o.id) })),
          unacknowledged: unacknowledged[0]?.count ?? 0,
        });
      }
      case "reports": {
        const from = sp.get("from") ? new Date(sp.get("from") + "T00:00:00") : new Date(Date.now() - 30 * 86400000);
        const to = sp.get("to") ? new Date(sp.get("to") + "T23:59:59") : new Date();
        const rows = await db
          .select()
          .from(orders)
          .where(and(gte(orders.createdAt, from), lte(orders.createdAt, to), sql`${orders.status} <> 'cancelled'`));
        let revenue = 0, deliveryFees = 0, restaurantDeliveryCost = 0, discounts = 0;
        const byDay: Record<string, { revenue: number; count: number }> = {};
        const byType: Record<string, number> = { dine_in: 0, takeaway: 0, delivery: 0 };
        for (const o of rows) {
          revenue += Number(o.total);
          deliveryFees += Number(o.deliveryFeeCustomer);
          restaurantDeliveryCost += Number(o.deliveryFeeRestaurant);
          discounts += Number(o.discountAmount);
          byType[o.orderType] = (byType[o.orderType] ?? 0) + 1;
          const day = o.createdAt.toISOString().slice(0, 10);
          byDay[day] = byDay[day] || { revenue: 0, count: 0 };
          byDay[day].revenue += Number(o.total);
          byDay[day].count += 1;
        }
        return NextResponse.json({
          data: {
            orderCount: rows.length,
            revenue: revenue.toFixed(3),
            deliveryFeesCollected: deliveryFees.toFixed(3),
            restaurantDeliveryCost: restaurantDeliveryCost.toFixed(3),
            discounts: discounts.toFixed(3),
            netProfit: (revenue - restaurantDeliveryCost).toFixed(3),
            byType,
            byDay: Object.entries(byDay)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([day, v]) => ({ day, revenue: v.revenue.toFixed(3), count: v.count })),
          },
        });
      }
      default:
        return bad("unknown_resource", 404);
    }
  } catch (e) {
    console.error("[admin:get]", resource, e);
    return bad("server_error", 500);
  }
}

/* ------------------------------ POST (create) ------------------------------ */
export async function POST(req: NextRequest, ctx: Ctx) {
  const member = await guard();
  if (!member) return bad("unauthorized", 401);
  const { resource } = await ctx.params;
  const body = await req.json();

  try {
    switch (resource) {
      case "categories": {
        const [row] = await db.insert(categories).values({
          nameAr: body.nameAr, nameEn: body.nameEn,
          parentId: body.parentId ? Number(body.parentId) : null,
          sortOrder: Number(body.sortOrder) || 0,
          isActive: body.isActive !== false,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "items": {
        const [row] = await db.insert(menuItems).values({
          categoryId: Number(body.categoryId),
          nameAr: body.nameAr, nameEn: body.nameEn,
          descriptionAr: body.descriptionAr || null, descriptionEn: body.descriptionEn || null,
          basePrice: String(Number(body.basePrice) || 0),
          discountPercent: String(Number(body.discountPercent) || 0),
          imageUrl: body.imageUrl || null,
          isAvailable: body.isAvailable !== false,
          sortOrder: Number(body.sortOrder) || 0,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "sizes": {
        const [row] = await db.insert(itemSizes).values({
          itemId: Number(body.itemId),
          nameAr: body.nameAr, nameEn: body.nameEn,
          price: String(Number(body.price) || 0),
          discountPercent: String(Number(body.discountPercent) || 0),
          stock: body.stock === null || body.stock === "" || body.stock === undefined ? null : Number(body.stock),
          isAvailable: body.isAvailable !== false,
          sortOrder: Number(body.sortOrder) || 0,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "governorates": {
        const [row] = await db.insert(governorates).values({ nameAr: body.nameAr, nameEn: body.nameEn, isActive: body.isActive !== false }).returning();
        return NextResponse.json({ data: row });
      }
      case "regions": {
        const [row] = await db.insert(regions).values({
          governorateId: Number(body.governorateId), nameAr: body.nameAr, nameEn: body.nameEn, isActive: body.isActive !== false,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "promos": {
        const [row] = await db.insert(promoCodes).values({
          code: String(body.code).trim().toUpperCase(),
          discountType: body.discountType === "amount" ? "amount" : "percent",
          discountValue: String(Number(body.discountValue) || 0),
          validFrom: body.validFrom ? new Date(body.validFrom) : null,
          validUntil: body.validUntil ? new Date(body.validUntil) : null,
          maxUsageCount: body.maxUsageCount ? Number(body.maxUsageCount) : null,
          isActive: body.isActive !== false,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "popups": {
        const [row] = await db.insert(popups).values({
          titleAr: body.titleAr, titleEn: body.titleEn,
          bodyAr: body.bodyAr || null, bodyEn: body.bodyEn || null,
          imageUrl: body.imageUrl || null,
          startsAt: body.startsAt ? new Date(body.startsAt) : null,
          endsAt: body.endsAt ? new Date(body.endsAt) : null,
          isActive: body.isActive !== false,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "bans": {
        const [row] = await db.insert(bans).values({
          banType: body.banType, value: String(body.value).trim(), reason: body.reason || null,
        }).returning();
        if (body.banType === "email") {
          await db.update(users).set({ isBanned: true }).where(eq(users.email, String(body.value).trim().toLowerCase()));
        }
        return NextResponse.json({ data: row });
      }
      case "aggregators": {
        const [row] = await db.insert(deliveryAggregators).values({
          name: body.name, apiKey: body.apiKey || null, apiUrl: body.apiUrl || null, isActive: body.isActive !== false,
        }).returning();
        return NextResponse.json({ data: row });
      }
      case "staff": {
        if (member.role !== "superadmin") return bad("forbidden", 403);
        const [row] = await db.insert(staff).values({
          username: String(body.username).trim(),
          fullName: body.fullName,
          email: body.email || null,
          passwordHash: await hashPassword(String(body.password || "changeme123")),
          role: body.role || "staff",
          permissions: Array.isArray(body.permissions) ? body.permissions : [],
          isActive: body.isActive !== false,
        }).returning();
        return NextResponse.json({ data: { ...row, passwordHash: undefined } });
      }
      case "settings": {
        // bulk upsert: body = { settings: { key: value } }
        const entries = Object.entries(body.settings ?? {}) as [string, string][];
        for (const [key, value] of entries) {
          await db.insert(siteSettings).values({ key, value }).onConflictDoUpdate({ target: siteSettings.key, set: { value } });
        }
        return NextResponse.json({ ok: true });
      }
      case "content": {
        // bulk upsert: body = { content: [{key, valueAr, valueEn}] }
        for (const c of body.content ?? []) {
          await db.insert(siteContent).values({ key: c.key, valueAr: c.valueAr, valueEn: c.valueEn })
            .onConflictDoUpdate({ target: siteContent.key, set: { valueAr: c.valueAr, valueEn: c.valueEn } });
        }
        return NextResponse.json({ ok: true });
      }
      default:
        return bad("unknown_resource", 404);
    }
  } catch (e) {
    console.error("[admin:post]", resource, e);
    return bad("server_error", 500);
  }
}

/* ------------------------------ PATCH (update) ------------------------------ */
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const member = await guard();
  if (!member) return bad("unauthorized", 401);
  const { resource } = await ctx.params;
  const body = await req.json();
  const id = Number(body.id);
  if (!id && resource !== "orders-ack") return bad("missing_id");

  try {
    switch (resource) {
      case "categories": {
        const [row] = await db.update(categories).set({
          nameAr: body.nameAr, nameEn: body.nameEn,
          parentId: body.parentId ? Number(body.parentId) : null,
          sortOrder: Number(body.sortOrder) || 0, isActive: body.isActive !== false,
        }).where(eq(categories.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "items": {
        const set: Partial<typeof menuItems.$inferInsert> = {};
        if (body.nameAr !== undefined) set.nameAr = body.nameAr;
        if (body.nameEn !== undefined) set.nameEn = body.nameEn;
        if (body.descriptionAr !== undefined) set.descriptionAr = body.descriptionAr;
        if (body.descriptionEn !== undefined) set.descriptionEn = body.descriptionEn;
        if (body.categoryId !== undefined) set.categoryId = Number(body.categoryId);
        if (body.basePrice !== undefined) set.basePrice = String(Number(body.basePrice) || 0);
        if (body.discountPercent !== undefined) set.discountPercent = String(Number(body.discountPercent) || 0);
        if (body.imageUrl !== undefined) set.imageUrl = body.imageUrl || null;
        if (body.isAvailable !== undefined) set.isAvailable = !!body.isAvailable;
        if (body.sortOrder !== undefined) set.sortOrder = Number(body.sortOrder) || 0;
        const [row] = await db.update(menuItems).set(set).where(eq(menuItems.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "sizes": {
        const [row] = await db.update(itemSizes).set({
          nameAr: body.nameAr, nameEn: body.nameEn,
          price: String(Number(body.price) || 0),
          discountPercent: String(Number(body.discountPercent) || 0),
          stock: body.stock === null || body.stock === "" || body.stock === undefined ? null : Number(body.stock),
          isAvailable: body.isAvailable !== false,
          sortOrder: Number(body.sortOrder) || 0,
        }).where(eq(itemSizes.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "governorates": {
        const [row] = await db.update(governorates).set({
          nameAr: body.nameAr, nameEn: body.nameEn, isActive: body.isActive !== false,
        }).where(eq(governorates.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "regions": {
        const [row] = await db.update(regions).set({
          governorateId: Number(body.governorateId), nameAr: body.nameAr, nameEn: body.nameEn, isActive: body.isActive !== false,
        }).where(eq(regions.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "promos": {
        const [row] = await db.update(promoCodes).set({
          code: String(body.code).trim().toUpperCase(),
          discountType: body.discountType === "amount" ? "amount" : "percent",
          discountValue: String(Number(body.discountValue) || 0),
          validFrom: body.validFrom ? new Date(body.validFrom) : null,
          validUntil: body.validUntil ? new Date(body.validUntil) : null,
          maxUsageCount: body.maxUsageCount ? Number(body.maxUsageCount) : null,
          isActive: body.isActive !== false,
        }).where(eq(promoCodes.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "popups": {
        const [row] = await db.update(popups).set({
          titleAr: body.titleAr, titleEn: body.titleEn,
          bodyAr: body.bodyAr || null, bodyEn: body.bodyEn || null,
          imageUrl: body.imageUrl || null,
          startsAt: body.startsAt ? new Date(body.startsAt) : null,
          endsAt: body.endsAt ? new Date(body.endsAt) : null,
          isActive: body.isActive !== false,
        }).where(eq(popups.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "aggregators": {
        const [row] = await db.update(deliveryAggregators).set({
          name: body.name, apiKey: body.apiKey || null, apiUrl: body.apiUrl || null, isActive: body.isActive !== false,
        }).where(eq(deliveryAggregators.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "staff": {
        if (member.role !== "superadmin" && member.id !== id) return bad("forbidden", 403);
        const set: Partial<typeof staff.$inferInsert> = {};
        if (body.fullName !== undefined) set.fullName = body.fullName;
        if (body.email !== undefined) set.email = body.email || null;
        if (member.role === "superadmin") {
          if (body.role !== undefined) set.role = body.role;
          if (body.permissions !== undefined) set.permissions = body.permissions;
          if (body.isActive !== undefined) set.isActive = !!body.isActive;
        }
        if (body.password) set.passwordHash = await hashPassword(String(body.password));
        const [row] = await db.update(staff).set(set).where(eq(staff.id, id)).returning();
        return NextResponse.json({ data: { ...row, passwordHash: undefined } });
      }
      case "customers": {
        const [row] = await db.update(users).set({ isBanned: !!body.isBanned }).where(eq(users.id, id)).returning();
        return NextResponse.json({ data: { id: row.id, isBanned: row.isBanned } });
      }
      case "orders": {
        const set: Partial<typeof orders.$inferInsert> = {};
        if (body.status !== undefined) set.status = body.status;
        if (body.paymentStatus !== undefined) set.paymentStatus = body.paymentStatus;
        if (body.acknowledged !== undefined) set.acknowledged = !!body.acknowledged;
        const [row] = await db.update(orders).set(set).where(eq(orders.id, id)).returning();
        return NextResponse.json({ data: row });
      }
      case "orders-ack": {
        await db.update(orders).set({ acknowledged: true }).where(eq(orders.acknowledged, false));
        return NextResponse.json({ ok: true });
      }
      default:
        return bad("unknown_resource", 404);
    }
  } catch (e) {
    console.error("[admin:patch]", resource, e);
    return bad("server_error", 500);
  }
}

/* ------------------------------ DELETE ------------------------------ */
export async function DELETE(req: NextRequest, ctx: Ctx) {
  const member = await guard();
  if (!member) return bad("unauthorized", 401);
  const { resource } = await ctx.params;
  const id = Number(req.nextUrl.searchParams.get("id"));
  if (!id) return bad("missing_id");

  try {
    switch (resource) {
      case "categories":
        await db.delete(categories).where(eq(categories.id, id));
        break;
      case "items":
        await db.delete(menuItems).where(eq(menuItems.id, id));
        break;
      case "sizes":
        await db.delete(itemSizes).where(eq(itemSizes.id, id));
        break;
      case "governorates":
        await db.delete(governorates).where(eq(governorates.id, id));
        break;
      case "regions":
        await db.delete(regions).where(eq(regions.id, id));
        break;
      case "promos":
        await db.delete(promoCodes).where(eq(promoCodes.id, id));
        break;
      case "popups":
        await db.delete(popups).where(eq(popups.id, id));
        break;
      case "bans":
        await db.delete(bans).where(eq(bans.id, id));
        break;
      case "aggregators":
        await db.delete(deliveryAggregators).where(eq(deliveryAggregators.id, id));
        break;
      case "staff": {
        if (member.role !== "superadmin") return bad("forbidden", 403);
        const [target] = await db.select().from(staff).where(eq(staff.id, id)).limit(1);
        if (target?.username === "moosameftah") return bad("cannot_delete_superadmin", 403);
        await db.delete(staff).where(eq(staff.id, id));
        break;
      }
      default:
        return bad("unknown_resource", 404);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[admin:delete]", resource, e);
    return bad("server_error", 500);
  }
}
