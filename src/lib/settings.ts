import { db } from "@/db";
import { siteSettings, siteContent } from "@/db/schema";

export async function getSettings(): Promise<Record<string, string>> {
  const rows = await db.select().from(siteSettings);
  const map: Record<string, string> = {};
  for (const r of rows) map[r.key] = r.value ?? "";
  return map;
}

export async function getContent(): Promise<Record<string, { ar: string; en: string }>> {
  const rows = await db.select().from(siteContent);
  const map: Record<string, { ar: string; en: string }> = {};
  for (const r of rows) map[r.key] = { ar: r.valueAr ?? "", en: r.valueEn ?? "" };
  return map;
}

export async function setSetting(key: string, value: string) {
  await db
    .insert(siteSettings)
    .values({ key, value })
    .onConflictDoUpdate({ target: siteSettings.key, set: { value } });
}
