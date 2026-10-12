import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/db";
import { users, staff } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import {
  hashPassword,
  comparePassword,
  createToken,
  getSessionUser,
  getSessionStaff,
  generateCode,
} from "@/lib/auth";
import { sendVerificationEmail, sendResetEmail } from "@/lib/email";
import { normalizeLocale } from "@/lib/i18n";
import { ensureSeeded } from "@/lib/seed";

export const dynamic = "force-dynamic";

const COOKIE_OPTS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 30,
};

export async function POST(req: NextRequest, ctx: { params: Promise<{ action: string }> }) {
  const { action } = await ctx.params;
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    /* empty body ok for logout */
  }
  const store = await cookies();
  const locale = normalizeLocale(String(body.locale ?? "ar"));

  try {
    switch (action) {
      case "register": {
        const { fullName, email, confirmEmail, password, phone, governorateId, regionId, addressDetails } =
          body as Record<string, string>;
        if (!fullName || !email || !password || !phone) {
          return NextResponse.json({ error: "missing_fields" }, { status: 400 });
        }
        if (confirmEmail !== undefined && String(email).trim().toLowerCase() !== String(confirmEmail).trim().toLowerCase()) {
          return NextResponse.json({ error: "emails_mismatch" }, { status: 400 });
        }
        const normEmail = String(email).trim().toLowerCase();
        const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, normEmail)).limit(1);
        if (existing.length > 0) {
          return NextResponse.json({ error: "email_exists" }, { status: 409 });
        }
        const code = generateCode();
        const [user] = await db
          .insert(users)
          .values({
            fullName: String(fullName).trim(),
            email: normEmail,
            passwordHash: await hashPassword(String(password)),
            phone: String(phone).trim(),
            governorateId: governorateId ? Number(governorateId) : null,
            regionId: regionId ? Number(regionId) : null,
            addressDetails: addressDetails ? String(addressDetails) : null,
            language: locale,
            verifyCode: code,
          })
          .returning();
        await sendVerificationEmail(normEmail, user.fullName, code, locale);
        store.set("jowdi_session", createToken({ kind: "user", id: user.id }), COOKIE_OPTS);
        return NextResponse.json({ ok: true, user: { id: user.id, fullName: user.fullName, email: user.email } });
      }

      case "login": {
        const email = String(body.email ?? "").trim().toLowerCase();
        const password = String(body.password ?? "");
        const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
        const user = rows[0];
        if (!user || !(await comparePassword(password, user.passwordHash))) {
          return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
        }
        if (user.isBanned) {
          return NextResponse.json({ error: "banned" }, { status: 403 });
        }
        store.set("jowdi_session", createToken({ kind: "user", id: user.id }), COOKIE_OPTS);
        return NextResponse.json({ ok: true, user: { id: user.id, fullName: user.fullName, email: user.email } });
      }

      case "logout": {
        store.delete("jowdi_session");
        return NextResponse.json({ ok: true });
      }

      case "forgot": {
        const email = String(body.email ?? "").trim().toLowerCase();
        const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
        const user = rows[0];
        if (user) {
          const code = generateCode();
          await db
            .update(users)
            .set({ resetCode: code, resetCodeExpiresAt: new Date(Date.now() + 15 * 60 * 1000) })
            .where(eq(users.id, user.id));
          await sendResetEmail(email, user.fullName, code, locale);
        }
        // Always respond ok to avoid email enumeration
        return NextResponse.json({ ok: true });
      }

      case "reset": {
        const email = String(body.email ?? "").trim().toLowerCase();
        const code = String(body.code ?? "").trim();
        const newPassword = String(body.newPassword ?? "");
        const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
        const user = rows[0];
        if (
          !user ||
          !user.resetCode ||
          user.resetCode !== code ||
          !user.resetCodeExpiresAt ||
          user.resetCodeExpiresAt < new Date() ||
          newPassword.length < 6
        ) {
          return NextResponse.json({ error: "invalid_code" }, { status: 400 });
        }
        await db
          .update(users)
          .set({ passwordHash: await hashPassword(newPassword), resetCode: null, resetCodeExpiresAt: null })
          .where(eq(users.id, user.id));
        return NextResponse.json({ ok: true });
      }

      case "staff-login": {
        await ensureSeeded();
        const username = String(body.username ?? "").trim();
        const password = String(body.password ?? "");
        const rows = await db
          .select()
          .from(staff)
          .where(sql`lower(${staff.username}) = ${username.toLowerCase()} OR lower(coalesce(${staff.email}, '')) = ${username.toLowerCase()}`)
          .limit(1);
        const member = rows[0];
        if (!member || !member.isActive || !(await comparePassword(password, member.passwordHash))) {
          return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
        }
        store.set("jowdi_admin", createToken({ kind: "staff", id: member.id }), COOKIE_OPTS);
        return NextResponse.json({
          ok: true,
          staff: { id: member.id, username: member.username, role: member.role, fullName: member.fullName },
        });
      }

      case "staff-logout": {
        store.delete("jowdi_admin");
        return NextResponse.json({ ok: true });
      }

      case "locale": {
        const loc = normalizeLocale(String(body.locale ?? "ar"));
        store.set("locale", loc, { path: "/", maxAge: 60 * 60 * 24 * 365 });
        return NextResponse.json({ ok: true });
      }

      default:
        return NextResponse.json({ error: "unknown_action" }, { status: 404 });
    }
  } catch (e) {
    console.error("[auth]", action, e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

export async function GET(_req: NextRequest, ctx: { params: Promise<{ action: string }> }) {
  const { action } = await ctx.params;
  if (action === "me") {
    const user = await getSessionUser();
    const admin = await getSessionStaff();
    return NextResponse.json({
      user: user
        ? {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            governorateId: user.governorateId,
            regionId: user.regionId,
            addressDetails: user.addressDetails,
          }
        : null,
      staff: admin ? { id: admin.id, username: admin.username, role: admin.role, fullName: admin.fullName } : null,
    });
  }
  return NextResponse.json({ error: "unknown_action" }, { status: 404 });
}
