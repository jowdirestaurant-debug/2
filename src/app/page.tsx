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
  await ensureSeeded();
  const store = await cookies();
  const locale = normalizeLocale(store.get("locale")?.value);

  const [settings, content, cats, items, sizes, govs, regs, allPopups] = await Promise.all([
    getSettings(),
    getContent(),
    db.select().from(categories).where(eq(categories.isActive, true)).orderBy(asc(categories.sortOrder), asc(categories.id)),
    db.select().from(menuItems).orderBy(asc(menuItems.sortOrder), asc(menuItems.id)),
    db.select().from(itemSizes).orderBy(asc(itemSizes.sortOrder), asc(itemSizes.id)),
    db.select().from(governorates).where(eq(governorates.isActive, true)).orderBy(asc(governorates.id)),
    db.select().from(regions).where(eq(regions.isActive, true)).orderBy(asc(regions.id)),
    db.select().from(popups).where(eq(popups.isActive, true)),
  ]);

  const now = new Date();
  const activePopups = allPopups.filter(
    (p) => (!p.startsAt || p.startsAt <= now) && (!p.endsAt || p.endsAt >= now)
  );

  return (
    <StoreFront
      locale={locale}
      settings={settings}
      content={content}
      categories={cats}
      items={items.map((i) => ({
        ...i,
        createdAt: i.createdAt.toISOString(),
      }))}
      sizes={sizes}
      governorates={govs}
      regions={regs}
      popups={activePopups.map((p) => ({
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
