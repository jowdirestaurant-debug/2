import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { orders, orderDispatches, deliveryAggregators } from "@/db/schema";
import { and, eq, isNull, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

/**
 * Aggregator webhook: first delivery app to accept locks the order.
 * Body: { orderNumber: string, apiKey: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { orderNumber, apiKey } = await req.json();
    if (!orderNumber || !apiKey) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }
    const [agg] = await db
      .select()
      .from(deliveryAggregators)
      .where(and(eq(deliveryAggregators.apiKey, String(apiKey)), eq(deliveryAggregators.isActive, true)))
      .limit(1);
    if (!agg) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

    // Atomic first-accept: only succeeds if no aggregator has locked the order yet
    const updated = await db
      .update(orders)
      .set({ dispatchStatus: "locked", lockedAggregatorId: agg.id, status: "out_for_delivery" })
      .where(
        and(
          eq(orders.orderNumber, String(orderNumber)),
          eq(orders.dispatchStatus, "broadcasting"),
          isNull(orders.lockedAggregatorId)
        )
      )
      .returning({ id: orders.id });

    if (updated.length === 0) {
      return NextResponse.json({ accepted: false, reason: "already_locked_or_not_found" }, { status: 409 });
    }

    const orderId = updated[0].id;
    await db
      .update(orderDispatches)
      .set({ status: "accepted", updatedAt: new Date() })
      .where(and(eq(orderDispatches.orderId, orderId), eq(orderDispatches.aggregatorId, agg.id)));
    await db
      .update(orderDispatches)
      .set({ status: "closed", updatedAt: new Date() })
      .where(and(eq(orderDispatches.orderId, orderId), sql`${orderDispatches.aggregatorId} <> ${agg.id}`));

    return NextResponse.json({ accepted: true, orderId });
  } catch (e) {
    console.error("[delivery:accept]", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
