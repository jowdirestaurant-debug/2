import { createHmac } from "crypto";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { users, staff } from "@/db/schema";
import { eq } from "drizzle-orm";

const SECRET = process.env.AUTH_SECRET || "jowdi-restaurant-secret-change-me";

export type SessionPayload = {
  kind: "user" | "staff";
  id: number;
  exp: number;
};

function sign(data: string) {
  return createHmac("sha256", SECRET).update(data).digest("base64url");
}

export function createToken(payload: Omit<SessionPayload, "exp">) {
  const full: SessionPayload = { ...payload, exp: Date.now() + 1000 * 60 * 60 * 24 * 30 };
  const body = Buffer.from(JSON.stringify(full)).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function verifyToken(token: string | undefined | null): SessionPayload | null {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  if (sign(body) !== sig) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString()) as SessionPayload;
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function hashPassword(pw: string) {
  return bcrypt.hash(pw, 10);
}

export async function comparePassword(pw: string, hash: string) {
  return bcrypt.compare(pw, hash);
}

export async function getSessionUser() {
  const store = await cookies();
  const payload = verifyToken(store.get("jowdi_session")?.value);
  if (!payload || payload.kind !== "user") return null;
  const rows = await db.select().from(users).where(eq(users.id, payload.id)).limit(1);
  return rows[0] ?? null;
}

export async function getSessionStaff() {
  const store = await cookies();
  const payload = verifyToken(store.get("jowdi_admin")?.value);
  if (!payload || payload.kind !== "staff") return null;
  const rows = await db.select().from(staff).where(eq(staff.id, payload.id)).limit(1);
  const member = rows[0];
  if (!member || !member.isActive) return null;
  return member;
}

export function generateCode(length = 6) {
  let code = "";
  for (let i = 0; i < length; i++) code += Math.floor(Math.random() * 10).toString();
  return code;
}
