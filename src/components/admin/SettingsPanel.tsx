"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { THEMES } from "@/lib/themes";
import { readFileAsDataUrl } from "./ResourceManager";

type ContentRow = { key: string; valueAr: string | null; valueEn: string | null };

const CONTENT_LABELS: Record<string, { ar: string; en: string }> = {
  hero_title: { ar: "عنوان الواجهة الرئيسية", en: "Hero title" },
  hero_subtitle: { ar: "النص الفرعي للواجهة", en: "Hero subtitle" },
  about_title: { ar: "عنوان من نحن", en: "About title" },
  about_body: { ar: "نص من نحن", en: "About body" },
  footer_text: { ar: "نص التذييل", en: "Footer text" },
  contact_phone: { ar: "رقم التواصل", en: "Contact phone" },
  contact_address: { ar: "العنوان", en: "Address" },
  opening_hours: { ar: "ساعات العمل", en: "Opening hours" },
  menu_title: { ar: "عنوان القائمة", en: "Menu title" },
  menu_subtitle: { ar: "وصف القائمة", en: "Menu subtitle" },
};

export default function SettingsPanel({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const lbl = (a: string, e: string) => (ar ? a : e);

  const [settings, setSettings] = useState<Record<string, string>>({});
  const [content, setContent] = useState<ContentRow[]>([]);
  const [saved, setSaved] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    const [s, c] = await Promise.all([
      fetch("/api/admin/settings").then((r) => r.json()),
      fetch("/api/admin/content").then((r) => r.json()),
    ]);
    const map: Record<string, string> = {};
    for (const row of s.data ?? []) map[row.key] = row.value ?? "";
    setSettings(map);
    setContent(c.data ?? []);
  };

  useEffect(() => {
    load();
  }, []);

  const saveSettings = async (extra?: Record<string, string>) => {
    setBusy(true);
    try {
      await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: { ...settings, ...extra } }),
      });
      setSaved(lbl("تم الحفظ بنجاح ✓", "Saved successfully ✓"));
      setTimeout(() => setSaved(""), 2500);
    } finally {
      setBusy(false);
    }
  };

  const saveContent = async () => {
    setBusy(true);
    try {
      await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      setSaved(lbl("تم حفظ النصوص ✓", "Content saved ✓"));
      setTimeout(() => setSaved(""), 2500);
    } finally {
      setBusy(false);
    }
  };

  const set = (key: string, value: string) => setSettings((p) => ({ ...p, [key]: value }));
  const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";

  return (
    <div className="space-y-6">
      {saved && <div className="fixed top-4 start-1/2 -translate-x-1/2 z-50 bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-xl">{saved}</div>}

      {/* Themes */}
      <div className="card p-5">
        <h3 className="font-extrabold text-lg text-primary-c mb-1">{lbl("قوالب الموقع (20 قالب احترافي)", "Website Themes (20 professional templates)")}</h3>
        <p className="text-xs text-muted-c mb-4">{lbl("اختر القالب وسيتم تطبيقه فوراً على الموقع بالكامل", "Pick a template and it is applied instantly site-wide")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {THEMES.map((th) => (
            <button
              key={th.id}
              onClick={async () => {
                set("theme", th.id);
                await fetch("/api/admin/settings", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ settings: { theme: th.id } }),
                });
                setSaved(lbl("تم تطبيق القالب ✓", "Theme applied ✓"));
                setTimeout(() => setSaved(""), 2000);
              }}
              className={`rounded-xl border-2 p-3 text-start transition ${settings.theme === th.id ? "border-green-500 ring-2 ring-green-200" : "border-black/10 hover:border-black/30"}`}
              style={{ background: th.vars.bg }}
            >
              <div className="flex gap-1 mb-2">
                <span className="h-5 w-5 rounded-full" style={{ background: th.vars.primary }} />
                <span className="h-5 w-5 rounded-full" style={{ background: th.vars.accent }} />
                <span className="h-5 w-5 rounded-full border" style={{ background: th.vars.surface }} />
              </div>
              <div className="text-xs font-bold" style={{ color: th.vars.text }}>{ar ? th.nameAr : th.nameEn}</div>
              {settings.theme === th.id && <div className="text-[10px] font-bold text-green-600 mt-1">✓ {lbl("مفعل", "Active")}</div>}
            </button>
          ))}
        </div>
      </div>

      {/* Hero & logo */}
      <div className="card p-5">
        <h3 className="font-extrabold text-lg text-primary-c mb-4">{lbl("صورة الواجهة والشعار", "Hero Image & Logo")}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {([["hero_image", lbl("صورة الواجهة الرئيسية", "Hero background image")], ["logo_url", lbl("شعار المطعم", "Restaurant logo")]] as const).map(([key, label]) => (
            <div key={key}>
              <label className="text-sm font-bold block mb-2">{label}</label>
              {settings[key] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={settings[key]} alt="" className="h-32 w-full object-cover rounded-xl border mb-2" />
              )}
              <input
                type="file"
                accept="image/*"
                className="text-xs"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  try {
                    const url = await readFileAsDataUrl(file);
                    set(key, url);
                    await fetch("/api/admin/settings", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ settings: { [key]: url } }),
                    });
                    setSaved(lbl("تم تحديث الصورة ✓", "Image updated ✓"));
                    setTimeout(() => setSaved(""), 2000);
                  } catch {
                    alert(lbl("الصورة كبيرة جداً (الحد 2MB)", "Image too large (max 2MB)"));
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Delivery & payment */}
      <div className="card p-5">
        <h3 className="font-extrabold text-lg text-primary-c mb-4">{lbl("التوصيل والدفع", "Delivery & Payment")}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-muted-c block mb-1">{lbl("رسوم التوصيل الأساسية (د.ب)", "Base delivery fee (BHD)")}</label>
            <input type="number" step="any" value={settings.delivery_fee_base ?? ""} onChange={(e) => set("delivery_fee_base", e.target.value)} className={input} dir="ltr" />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-c block mb-1">{lbl("نسبة تحمل العميل من رسوم التوصيل %", "Customer share of delivery fee %")}</label>
            <input type="number" value={settings.delivery_customer_share_percent ?? ""} onChange={(e) => set("delivery_customer_share_percent", e.target.value)} className={input} dir="ltr" />
          </div>
          <div className="md:col-span-2">
            <button onClick={() => set("delivery_share_enabled", settings.delivery_share_enabled === "1" ? "0" : "1")} className={`px-4 py-2 rounded-full text-sm font-bold ${settings.delivery_share_enabled === "1" ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`}>
              {settings.delivery_share_enabled === "1"
                ? lbl("خاصية مشاركة رسوم التوصيل: مفعلة (50/50 افتراضياً)", "Shared delivery fee: Enabled (50/50 default)")
                : lbl("خاصية مشاركة رسوم التوصيل: معطلة (العميل يدفع كامل الرسوم)", "Shared delivery fee: Disabled (customer pays full fee)")}
            </button>
          </div>
          <div>
            <label className="text-xs font-bold text-muted-c block mb-1">{lbl("مفتاح BenefitPay API", "BenefitPay API key")}</label>
            <input value={settings.benefitpay_api_key ?? ""} onChange={(e) => set("benefitpay_api_key", e.target.value)} className={input} dir="ltr" placeholder={lbl("أدخل المفتاح عند التفعيل", "Enter key when activating")} />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-c block mb-1">{lbl("مفتاح بوابة البطاقات الائتمانية", "Credit card gateway API key")}</label>
            <input value={settings.card_gateway_api_key ?? ""} onChange={(e) => set("card_gateway_api_key", e.target.value)} className={input} dir="ltr" placeholder={lbl("أدخل المفتاح عند التفعيل", "Enter key when activating")} />
          </div>
        </div>
        <button onClick={() => saveSettings()} disabled={busy} className="btn-primary mt-4 px-8 py-2.5 rounded-lg font-bold disabled:opacity-50">{lbl("حفظ الإعدادات", "Save settings")}</button>
      </div>

      {/* Content CMS */}
      <div className="card p-5">
        <h3 className="font-extrabold text-lg text-primary-c mb-1">{lbl("إدارة نصوص الموقع (عربي / إنجليزي)", "Site Content CMS (Arabic / English)")}</h3>
        <p className="text-xs text-muted-c mb-4">{lbl("عدل كل نص في الموقع بشكل مستقل باللغتين", "Edit every site text independently in both languages")}</p>
        <div className="space-y-4">
          {content.map((row, idx) => (
            <div key={row.key} className="border border-black/10 rounded-xl p-4">
              <div className="text-xs font-extrabold text-accent-c mb-2">
                {CONTENT_LABELS[row.key] ? (ar ? CONTENT_LABELS[row.key].ar : CONTENT_LABELS[row.key].en) : row.key}
                <span className="text-muted-c font-normal ms-2" dir="ltr">({row.key})</span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-muted-c">العربية</label>
                  <textarea dir="rtl" value={row.valueAr ?? ""} onChange={(e) => setContent((p) => p.map((r, i) => (i === idx ? { ...r, valueAr: e.target.value } : r)))} className={input} rows={2} />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-c">English</label>
                  <textarea dir="ltr" value={row.valueEn ?? ""} onChange={(e) => setContent((p) => p.map((r, i) => (i === idx ? { ...r, valueEn: e.target.value } : r)))} className={input} rows={2} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={saveContent} disabled={busy} className="btn-primary mt-4 px-8 py-2.5 rounded-lg font-bold disabled:opacity-50">{lbl("حفظ جميع النصوص", "Save all content")}</button>
      </div>
    </div>
  );
}
