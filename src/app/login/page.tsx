import { cookies } from "next/headers";
import { db } from "@/db";
import { governorates, regions } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { normalizeLocale } from "@/lib/i18n";
import AuthForm from "@/components/AuthForm";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const store = await cookies();
  const locale = normalizeLocale(store.get("locale")?.value);
  const [govs, regs] = await Promise.all([
    db.select().from(governorates).where(eq(governorates.isActive, true)).orderBy(asc(governorates.id)),
    db.select().from(regions).where(eq(regions.isActive, true)).orderBy(asc(regions.id)),
  ]);
  return <AuthForm locale={locale} governorates={govs} regions={regs} />;
}
