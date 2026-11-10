import { cookies } from "next/headers";
import { normalizeLocale } from "@/lib/i18n";
import { getSessionStaff } from "@/lib/auth";
import { ensureSeeded } from "@/lib/seed";
import AdminApp from "@/components/admin/AdminApp";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await ensureSeeded();
  const store = await cookies();
  const locale = normalizeLocale(store.get("locale")?.value);
  const member = await getSessionStaff();
  return (
    <AdminApp
      locale={locale}
      initialStaff={member ? { id: member.id, username: member.username, fullName: member.fullName, role: member.role } : null}
    />
  );
}
