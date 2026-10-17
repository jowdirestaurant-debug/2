import { cookies } from "next/headers";
import { db } from "@/db";
import {
  categories,
  menuItems,
  itemSizes,
  governorates,
  regions,
  popups,
} from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { normalizeLocale } from "@/lib/i18n";
import { getSettings, getContent } from "@/lib/settings";
import { ensureSeeded } from "@/lib/seed";
import StoreFront from "@/components/StoreFront";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  try {
    await ensureSeeded();
  } catch (e) {
    console.error("Seed error:", e);
  }

  const store = await cookies();
  const locale = normalizeLocale(store.get("locale")?.value);

  // جلب البيانات مع حماية شاملة ضد أي خطأ في الجداول
  const settings = await getSettings().catch(() => ({}));
  const content = await getContent().catch(() => ({}));

  const cats = await db.select().from(categories).where(eq(categories.isActive, true)).orderBy(asc(categories.sortOrder), asc(categories.id)).catch(() => []);
  const items = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder), asc(menuItems.id)).catch(() => []);
  const sizes = await db.select().from(itemSizes).orderBy(asc(itemSizes.sortOrder), asc(itemSizes.id)).catch(() => []);
  const govs = await db.select().from(governorates).where(eq(governorates.isActive, true)).orderBy(asc(governorates.id)).catch(() => []);
  const regs = await db.select().from(regions).where(eq(regions.isActive, true)).orderBy(asc(regions.id)).catch(() => []);
  const activePopups = await db.select().from(popups).where(eq(popups.isActive, true)).catch(() => []);

  return (
    <StoreFront
      locale={locale}
      settings={settings}
      content={content}
      categories={cats}
      items={items.map((i: any) => ({
        ...i,
        createdAt: i.createdAt ? new Date(i.createdAt).toISOString() : new Date().toISOString(),
      }))}
      sizes={sizes}
      governorates={govs}
      regions={regs}
      popups={activePopups.map((p: any) => ({
        id: p.id,
        titleAr: p.titleAr,
        titleEn: p.titleEn,
        bodyAr: p.bodyAr,
        bodyEn: p.bodyEn,
        imageUrl: p.imageUrl,
      }))}
    />
  );
}