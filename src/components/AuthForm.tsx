"use client";

import { useState } from "react";
import { getDict, type Locale } from "@/lib/i18n";

type Gov = { id: number; nameAr: string; nameEn: string };
type Region = { id: number; governorateId: number; nameAr: string; nameEn: string };

export default function AuthForm({ locale, governorates, regions }: { locale: Locale; governorates: Gov[]; regions: Region[] }) {
  const t = getDict(locale);
  const ar = locale === "ar";
  const L = <T extends { nameAr: string; nameEn: string }>(o: T) => (ar ? o.nameAr : o.nameEn);

  const [mode, setMode] = useState<"login" | "register" | "forgot" | "reset">("login");
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [govId, setGovId] = useState<number | "">("");
  const [regionId, setRegionId] = useState<number | "">("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const post = async (action: string, body: Record<string, unknown>) => {
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/auth/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, locale }),
      });
      return { ok: res.ok, data: await res.json() };
    } finally {
      setLoading(false);
    }
  };

  const submit = async () => {
    if (mode === "login") {
      const r = await post("login", { email, password });
      if (r.ok) window.location.href = "/";
      else setMsg({ text: r.data.error === "banned" ? t.banned : t.loginFailed, ok: false });
    } else if (mode === "register") {
      if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
        setMsg({ text: t.emailsMismatch, ok: false });
        return;
      }
      const r = await post("register", {
        fullName, email, confirmEmail, password, phone,
        governorateId: govId || undefined, regionId: regionId || undefined, addressDetails: address,
      });
      if (r.ok) {
        setMsg({ text: t.registered, ok: true });
        setTimeout(() => (window.location.href = "/"), 900);
      } else {
        setMsg({
          text: r.data.error === "email_exists" ? (ar ? "البريد الإلكتروني مسجل مسبقاً" : "Email already registered") : t.requiredFields,
          ok: false,
        });
      }
    } else if (mode === "forgot") {
      const r = await post("forgot", { email });
      if (r.ok) {
        setMsg({ text: t.codeSent, ok: true });
        setMode("reset");
      }
    } else if (mode === "reset") {
      const r = await post("reset", { email, code, newPassword });
      if (r.ok) {
        setMsg({ text: ar ? "تم تغيير كلمة المرور بنجاح" : "Password changed successfully", ok: true });
        setTimeout(() => setMode("login"), 900);
      } else {
        setMsg({ text: ar ? "الرمز غير صحيح أو منتهي" : "Invalid or expired code", ok: false });
      }
    }
  };

  const input = "w-full border border-black/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 ring-accent-c";

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-6">
          <a href="/" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={t.brand} className="h-16 w-16 rounded-full object-cover mx-auto ring-2 ring-accent-c" />
          </a>
          <h1 className="text-2xl font-extrabold text-primary-c mt-3">{t.brand}</h1>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button onClick={() => { setMode("login"); setMsg(null); }} className={`py-2.5 rounded-xl font-bold text-sm ${mode === "login" || mode === "forgot" || mode === "reset" ? "btn-primary" : "bg-black/5"}`}>{t.login}</button>
          <button onClick={() => { setMode("register"); setMsg(null); }} className={`py-2.5 rounded-xl font-bold text-sm ${mode === "register" ? "btn-primary" : "bg-black/5"}`}>{t.register}</button>
        </div>

        <div className="space-y-3">
          {mode === "register" && <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={`${t.fullName} *`} className={input} />}

          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={`${t.email} *`} className={input} dir="ltr" type="email" />

          {mode === "register" && (
            <>
              <input value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder={`${t.confirmEmail} *`} className={input} dir="ltr" type="email" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={`${t.phone} *`} className={input} dir="ltr" />
            </>
          )}

          {(mode === "login" || mode === "register") && (
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={`${t.password} *`} className={input} dir="ltr" type="password" />
          )}

          {mode === "register" && (
            <>
              <select value={govId} onChange={(e) => { setGovId(e.target.value ? Number(e.target.value) : ""); setRegionId(""); }} className={input}>
                <option value="">{t.selectGovernorate}</option>
                {governorates.map((g) => <option key={g.id} value={g.id}>{L(g)}</option>)}
              </select>
              <select value={regionId} onChange={(e) => setRegionId(e.target.value ? Number(e.target.value) : "")} className={input} disabled={!govId}>
                <option value="">{t.selectRegion}</option>
                {regions.filter((r) => r.governorateId === govId).map((r) => <option key={r.id} value={r.id}>{L(r)}</option>)}
              </select>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder={t.addressDetails} className={input} rows={2} />
            </>
          )}

          {mode === "reset" && (
            <>
              <input value={code} onChange={(e) => setCode(e.target.value)} placeholder={t.resetCode} className={input} dir="ltr" />
              <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder={t.newPassword} className={input} dir="ltr" type="password" />
            </>
          )}
        </div>

        {msg && <div className={`mt-4 text-sm font-bold rounded-xl px-4 py-3 ${msg.ok ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>{msg.text}</div>}

        <button onClick={submit} disabled={loading} className="btn-accent w-full mt-5 py-3.5 rounded-xl font-extrabold disabled:opacity-50">
          {loading ? "..." : mode === "login" ? t.login : mode === "register" ? t.register : mode === "forgot" ? t.sendCode : t.resetPassword}
        </button>

        {mode === "login" && (
          <button onClick={() => { setMode("forgot"); setMsg(null); }} className="w-full mt-3 text-sm text-muted-c hover:text-accent-c font-semibold">
            {t.forgotPassword}
          </button>
        )}
        <a href="/" className="block text-center mt-4 text-sm text-muted-c hover:text-accent-c">← {t.home}</a>
      </div>
    </div>
  );
}
