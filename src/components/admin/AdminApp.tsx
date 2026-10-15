"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getDict, type Locale } from "@/lib/i18n";
import ResourceManager, { type Row } from "./ResourceManager";
import MenuManager from "./MenuManager";
import SettingsPanel from "./SettingsPanel";

/* eslint-disable @typescript-eslint/no-explicit-any */

type StaffInfo = { id: number; username: string; fullName: string; role: string } | null;

const ALL_TABS = [
  { id: "orders", ar: "الطلبات", en: "Orders", icon: "🧾", roles: ["superadmin", "manager", "staff"] },
  { id: "reports", ar: "التقارير المالية", en: "Financial Reports", icon: "📊", roles: ["superadmin", "manager"] },
  { id: "menu", ar: "القائمة والأطباق", en: "Menu & Dishes", icon: "🍽️", roles: ["superadmin", "manager", "staff"] },
  { id: "geo", ar: "المحافظات والمناطق", en: "Governorates & Regions", icon: "🗺️", roles: ["superadmin", "manager"] },
  { id: "promos", ar: "أكواد الخصم", en: "Promo Codes", icon: "🏷️", roles: ["superadmin", "manager"] },
  { id: "popups", ar: "النوافذ الإعلانية", en: "Popups", icon: "📢", roles: ["superadmin", "manager"] },
  { id: "aggregators", ar: "شركات التوصيل", en: "Delivery Apps", icon: "🛵", roles: ["superadmin", "manager"] },
  { id: "customers", ar: "العملاء والحظر", en: "Customers & Bans", icon: "👥", roles: ["superadmin", "manager"] },
  { id: "staff", ar: "الموظفون والصلاحيات", en: "Staff & Permissions", icon: "🔐", roles: ["superadmin", "manager"] },
  { id: "settings", ar: "الإعدادات والقوالب", en: "Settings & Themes", icon: "⚙️", roles: ["superadmin", "manager"] },
];

const STATUSES = ["pending", "confirmed", "preparing", "ready", "out_for_delivery", "completed", "cancelled"];

export default function AdminApp({ locale, initialStaff }: { locale: Locale; initialStaff: StaffInfo }) {
  const t = getDict(locale);
  const ar = locale === "ar";
  const lbl = (a: string, e: string) => (ar ? a : e);

  const [me, setMe] = useState<StaffInfo>(initialStaff);
  const [tab, setTab] = useState("orders");

  /* login form */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [busy, setBusy] = useState(false);

  /* orders */
  const [orders, setOrders] = useState<Row[]>([]);
  const [unack, setUnack] = useState(0);
  const [alarmOn, setAlarmOn] = useState(false);
  const [selectedAdminOrder, setSelectedAdminOrder] = useState<Row | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const alarmTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Ref لمتابعة حالة الطلبات بدون إعادة إنشاء المتايمر وتصفيره
  const ordersRef = useRef(orders);
  useEffect(() => {
    ordersRef.current = orders;
  }, [orders]);

  const [govs, setGovs] = useState<Row[]>([]);
  const [regs, setRegs] = useState<Row[]>([]);

  /* reports */
  const [repFrom, setRepFrom] = useState("");
  const [repTo, setRepTo] = useState("");
  const [report, setReport] = useState<any>(null);

  const switchLocale = async () => {
    await fetch("/api/auth/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: ar ? "en" : "ar" }),
    });
    window.location.reload();
  };

  const login = async () => {
    setBusy(true);
    setLoginErr("");
    try {
      const res = await fetch("/api/auth/staff-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const d = await res.json();
      if (res.ok) setMe(d.staff);
      else setLoginErr(t.loginFailed);
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    await fetch("/api/auth/staff-logout", { method: "POST" });
    setMe(null);
  };

  /* ---------- alarm sound ---------- */
  const beep = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const Ctx = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new Ctx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = 880 + i * 160;
        gain.gain.setValueAtTime(0.0001, now + i * 0.22);
        gain.gain.exponentialRampToValueAtTime(0.25, now + i * 0.22 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.22 + 0.2);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + i * 0.22);
        osc.stop(now + i * 0.22 + 0.21);
      }
    } catch {}
  }, []);

  // التنبيه المستمر للطلبات الجديدة بانتظار التأكيد
  useEffect(() => {
    if (alarmOn) {
      beep();
      alarmTimerRef.current = setInterval(beep, 1800);
    } else if (alarmTimerRef.current) {
      clearInterval(alarmTimerRef.current);
      alarmTimerRef.current = null;
    }
    return () => {
      if (alarmTimerRef.current) clearInterval(alarmTimerRef.current);
    };
  }, [alarmOn, beep]);

  // التنبيه الدوري كل 5 دقائق للطلبات النشطة (التي ليست "مكتمل" ولا "ملغي")
  useEffect(() => {
    if (!me) return;

    const periodicInterval = setInterval(() => {
      const hasPendingOrActive = ordersRef.current.some(
        (o) => o.status !== "completed" && o.status !== "cancelled"
      );
      if (hasPendingOrActive) {
        beep();
      }
    }, 5 * 60 * 1000); // 5 دقائق

    return () => clearInterval(periodicInterval);
  }, [me, beep]);

  const loadOrders = useCallback(async () => {
    const res = await fetch("/api/admin/orders");
    if (!res.ok) return;
    const d = await res.json();
    setOrders(d.data ?? []);
    setUnack(d.unacknowledged ?? 0);
    setAlarmOn((d.unacknowledged ?? 0) > 0);
  }, []);

  useEffect(() => {
    if (!me) return;
    loadOrders();
    fetch("/api/admin/governorates").then((r) => r.json()).then((d) => setGovs(d.data ?? []));
    fetch("/api/admin/regions").then((r) => r.json()).then((d) => setRegs(d.data ?? []));
    const iv = setInterval(loadOrders, 6000);
    return () => clearInterval(iv);
  }, [me, loadOrders]);

  const acknowledgeAll = async () => {
    await fetch("/api/admin/orders-ack", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    setAlarmOn(false);
    loadOrders();
  };

  const updateOrder = async (id: number, patch: Record<string, unknown>) => {
    await fetch("/api/admin/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...patch }),
    });
    loadOrders();
  };

  const loadReport = async (preset?: "daily" | "weekly" | "monthly") => {
    let from = repFrom;
    let to = repTo;
    const today = new Date();
    const fmt = (d: Date) => d.toISOString().slice(0, 10);
    if (preset === "daily") { from = fmt(today); to = fmt(today); }
    if (preset === "weekly") { const d = new Date(today); d.setDate(d.getDate() - 6); from = fmt(d); to = fmt(today); }
    if (preset === "monthly") { const d = new Date(today); d.setDate(d.getDate() - 29); from = fmt(d); to = fmt(today); }
    setRepFrom(from);
    setRepTo(to);
    const res = await fetch(`/api/admin/reports?from=${from}&to=${to}`);
    const d = await res.json();
    setReport(d.data);
  };

  useEffect(() => {
    if (me && tab === "reports" && !report) loadReport("monthly");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, me]);

  const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";

  /* ---------------- login screen ---------------- */
  if (!me) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--bg)" }}>
        <div className="card w-full max-w-sm p-8">
          <div className="text-center mb-6">
            <div className="text-5xl">🔐</div>
            <h1 className="text-xl font-extrabold text-primary-c mt-2">{lbl("لوحة إدارة مطعم الجودي", "Jowdi Restaurant Admin")}</h1>
          </div>
          <div className="space-y-3">
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={lbl("اسم المستخدم", "Username")} className={input} dir="ltr" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && login()} placeholder={lbl("كلمة المرور", "Password")} className={input} dir="ltr" type="password" />
          </div>
          {loginErr && <div className="mt-3 text-sm font-bold text-red-500">{loginErr}</div>}
          <button onClick={login} disabled={busy} className="btn-primary w-full mt-5 py-3 rounded-xl font-extrabold disabled:opacity-50">
            {lbl("دخول", "Sign in")}
          </button>
          <div className="flex justify-between mt-4">
            <a href="/" className="text-xs text-muted-c hover:text-accent-c">← {t.home}</a>
            <button onClick={switchLocale} className="text-xs font-bold text-muted-c hover:text-accent-c">{t.language}</button>
          </div>
        </div>
      </div>
    );
  }

  // تصفية التبويبات حسب دور المستخدم
  const availableTabs = ALL_TABS.filter((tb) => tb.roles.includes(me.role));

  /* ---------------- dashboard ---------------- */
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* New order alert banner */}
      {unack > 0 && (
        <div className="fixed inset-x-0 top-0 z-[70] bg-red-600 text-white px-4 py-3 flex items-center justify-center gap-4 alert-pulse">
          <span className="text-xl">🔔</span>
          <span className="font-extrabold">
            {ar ? `${unack} طلب جديد بانتظار التأكيد!` : `${unack} new order(s) awaiting acknowledgment!`}
          </span>
          <button onClick={acknowledgeAll} className="bg-white text-red-600 font-extrabold px-5 py-1.5 rounded-full text-sm">
            {lbl("تأكيد الاستلام وإيقاف التنبيه", "Acknowledge & stop alarm")}
          </button>
        </div>
      )}

      <header className="bg-primary-c text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-extrabold flex items-center gap-2">
            <span>👨‍🍳</span> {lbl("لوحة إدارة مطعم الجودي", "Jowdi Admin Dashboard")}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="opacity-80 hidden sm:inline">{me.fullName} ({me.role})</span>
            <button onClick={switchLocale} className="px-3 py-1 rounded-full border border-white/40 text-xs font-bold">{t.language}</button>
            <a href="/" className="px-3 py-1 rounded-full border border-white/40 text-xs font-bold">{lbl("الموقع", "Site")}</a>
            <button onClick={logout} className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-xs font-bold">{t.logout}</button>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto pb-2">
          {availableTabs.map((tb) => (
            <button key={tb.id} onClick={() => setTab(tb.id)} className={`whitespace-nowrap px-4 py-2 rounded-t-lg text-xs font-bold transition ${tab === tb.id ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"}`} style={tab === tb.id ? { color: "var(--text)", background: "var(--bg)" } : undefined}>
              {tb.icon} {lbl(tb.ar, tb.en)}
              {tb.id === "orders" && unack > 0 && <span className="ms-1 bg-red-500 text-white rounded-full px-1.5">{unack}</span>}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* ---------------- ORDERS ---------------- */}
        {tab === "orders" && (
          <div className="space-y-3">
            {orders.length === 0 && <div className="card p-10 text-center text-muted-c">{lbl("لا توجد طلبات بعد", "No orders yet")}</div>}
            
            {selectedAdminOrder ? (
              <div className="card p-6 space-y-4">
                <button 
                  onClick={() => setSelectedAdminOrder(null)} 
                  className="text-sm font-bold text-accent-c hover:underline flex items-center gap-1"
                >
                  {ar ? "← العودة إلى قائمة الطلبات" : "← Back to Orders"}
                </button>

                <div className="border-b border-black/10 pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-extrabold text-primary-c">
                      {ar ? `فاتورة رقم #${selectedAdminOrder.orderNumber}` : `Invoice #${selectedAdminOrder.orderNumber}`}
                    </h3>
                    <div className="text-xs text-muted-c mt-1" dir="ltr">{new Date(selectedAdminOrder.createdAt).toLocaleString("en-GB")}</div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-c text-white">
                    {t.orderStatus[selectedAdminOrder.status] ?? selectedAdminOrder.status}
                  </span>
                </div>

                <div className="text-sm space-y-1 bg-surface/50 p-4 rounded-xl border border-black/5">
                  <div className="font-bold text-base mb-2">{ar ? "معلومات العميل:" : "Customer Info:"}</div>
                  <div>{ar ? "الاسم:" : "Name:"} <span className="font-bold">{selectedAdminOrder.customerName}</span></div>
                  <div>{ar ? "الهاتف:" : "Phone:"} <span className="font-bold" dir="ltr">{selectedAdminOrder.customerPhone}</span></div>
                  {selectedAdminOrder.customerEmail && <div>{ar ? "البريد:" : "Email:"} <span className="font-bold" dir="ltr">{selectedAdminOrder.customerEmail}</span></div>}
                  {selectedAdminOrder.orderType === "delivery" && (
                    <div className="mt-2 pt-2 border-t border-black/5">
                      📍 {selectedAdminOrder.addressDetails}
                    </div>
                  )}
                  {selectedAdminOrder.notes && (
                    <div className="mt-3 pt-2 border-t border-black/5 bg-amber-50/50 p-2.5 rounded-lg text-amber-900">
                      <span className="font-bold">{ar ? "ملاحظات الزبون: " : "Customer Notes: "}</span>
                      <span>{selectedAdminOrder.notes}</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="font-bold text-sm mb-3">{ar ? "الأصناف المطلوبة:" : "Ordered Items:"}</div>
                  <div className="space-y-2">
                    {(selectedAdminOrder.items ?? []).map((it: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-sm border-b border-black/5 pb-2">
                        <div>
                          <div className="font-bold">
                            {ar ? it.nameAr : it.nameEn} 
                            {(ar ? it.sizeNameAr : it.sizeNameEn) && <span className="text-muted-c font-normal"> ({ar ? it.sizeNameAr : it.sizeNameEn})</span>}
                          </div>
                          <div className="text-xs text-muted-c">{ar ? "الكمية:" : "Qty:"} {it.quantity}</div>
                        </div>
                        <div className="font-bold">{it.lineTotal} {t.currency}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-black/15 pt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-c">{t.subtotal}</span><span className="font-bold">{selectedAdminOrder.subtotal} {t.currency}</span></div>
                  {Number(selectedAdminOrder.discountAmount) > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>{t.discount} {selectedAdminOrder.promoCode && `(${selectedAdminOrder.promoCode})`}</span>
                      <span className="font-bold">-{selectedAdminOrder.discountAmount} {t.currency}</span>
                    </div>
                  )}
                  {selectedAdminOrder.orderType === "delivery" && (
                    <div className="flex justify-between"><span className="text-muted-c">{t.deliveryFee}</span><span className="font-bold">{selectedAdminOrder.deliveryFeeCustomer} {t.currency}</span></div>
                  )}
                  <div className="flex justify-between text-lg font-extrabold pt-2 border-t border-black/10">
                    <span>{t.total}:</span>
                    <span className="text-accent-c">{selectedAdminOrder.total} {t.currency}</span>
                  </div>
                </div>
              </div>
            ) : (
              orders.map((o) => {
                const isLocked = (o.status === "completed" || o.status === "cancelled") && me.role !== "superadmin";
                return (
                  <div key={o.id} className={`card p-4 ${!o.acknowledged ? "ring-2 ring-red-400" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3 justify-between">
                      <div>
                        <span 
                          onClick={() => setSelectedAdminOrder(o)} 
                          className="font-extrabold text-primary-c cursor-pointer hover:text-accent-c underline"
                        >
                          {o.orderNumber} (🔍 {ar ? "عرض الفاتورة" : "View Invoice"})
                        </span>
                        <span className="text-xs text-muted-c ms-2" dir="ltr">{new Date(o.createdAt).toLocaleString("en-GB")}</span>
                        {!o.acknowledged && <span className="ms-2 text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{lbl("جديد", "NEW")}</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/5">
                          {o.orderType === "dine_in" ? t.dineIn : o.orderType === "takeaway" ? t.takeaway : t.delivery}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/5">
                          {o.paymentMethod === "cash" ? t.cash : o.paymentMethod === "benefitpay" ? t.benefitpay : t.card}
                        </span>
                        <select 
                          value={o.status} 
                          disabled={isLocked}
                          onChange={(e) => updateOrder(o.id, { status: e.target.value })} 
                          className="border border-black/15 rounded-lg px-2 py-1 text-xs font-bold bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          {STATUSES.map((s) => <option key={s} value={s}>{t.orderStatus[s] ?? s}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* ---------------- REPORTS ---------------- */}
        {tab === "reports" && me.role !== "staff" && (
          <div className="space-y-4">
            <div className="card p-5">
              <div className="flex flex-wrap gap-2 items-end">
                <button onClick={() => loadReport("daily")} className="btn-primary px-4 py-2 rounded-lg text-sm font-bold">{lbl("يومي", "Daily")}</button>
                <button onClick={() => loadReport("weekly")} className="btn-primary px-4 py-2 rounded-lg text-sm font-bold">{lbl("أسبوعي", "Weekly")}</button>
                <button onClick={() => loadReport("monthly")} className="btn-primary px-4 py-2 rounded-lg text-sm font-bold">{lbl("شهري", "Monthly")}</button>
                <div className="flex items-end gap-2 ms-4">
                  <div>
                    <label className="text-xs font-bold text-muted-c block">{lbl("من تاريخ", "From")}</label>
                    <input type="date" value={repFrom} onChange={(e) => setRepFrom(e.target.value)} className={input} dir="ltr" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-c block">{lbl("إلى تاريخ", "To")}</label>
                    <input type="date" value={repTo} onChange={(e) => setRepTo(e.target.value)} className={input} dir="ltr" />
                  </div>
                  <button onClick={() => loadReport()} className="btn-accent px-4 py-2 rounded-lg text-sm font-bold">{lbl("عرض", "Show")}</button>
                </div>
              </div>
            </div>

            {report && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    [lbl("عدد الطلبات", "Orders"), report.orderCount],
                    [lbl("الإيرادات", "Revenue"), `${report.revenue} ${t.currency}`],
                    [lbl("رسوم التوصيل المحصلة", "Delivery fees collected"), `${report.deliveryFeesCollected} ${t.currency}`],
                    [lbl("تكلفة التوصيل على المطعم", "Restaurant delivery cost"), `${report.restaurantDeliveryCost} ${t.currency}`],
                    [lbl("الخصومات", "Discounts"), `${report.discounts} ${t.currency}`],
                    [lbl("صافي الربح", "Net profit"), `${report.netProfit} ${t.currency}`],
                  ].map(([label, value], i) => (
                    <div key={i} className="card p-4 text-center">
                      <div className="text-xs text-muted-c font-bold">{label}</div>
                      <div className="text-lg font-extrabold text-primary-c mt-1">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card p-5">
                    <h4 className="font-extrabold mb-3">{lbl("حسب نوع الطلب", "By order type")}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>{t.dineIn}</span><b>{report.byType.dine_in ?? 0}</b></div>
                      <div className="flex justify-between"><span>{t.takeaway}</span><b>{report.byType.takeaway ?? 0}</b></div>
                      <div className="flex justify-between"><span>{t.delivery}</span><b>{report.byType.delivery ?? 0}</b></div>
                    </div>
                  </div>
                  <div className="card p-5">
                    <h4 className="font-extrabold mb-3">{lbl("التفصيل اليومي", "Daily breakdown")}</h4>
                    <div className="max-h-64 overflow-y-auto">
                      <table className="w-full text-sm">
                        <thead><tr className="text-xs text-muted-c border-b"><th className="text-start py-1">{lbl("اليوم", "Day")}</th><th className="text-start">{lbl("الطلبات", "Orders")}</th><th className="text-end">{lbl("الإيراد", "Revenue")}</th></tr></thead>
                        <tbody>
                          {report.byDay.map((d: any) => (
                            <tr key={d.day} className="border-b border-black/5"><td className="py-1" dir="ltr">{d.day}</td><td>{d.count}</td><td className="text-end font-bold">{d.revenue}</td></tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ---------------- MENU ---------------- */}
        {tab === "menu" && <MenuManager locale={locale} role={me.role} />}

        {/* ---------------- GEO ---------------- */}
        {tab === "geo" && me.role !== "staff" && (
          <div className="space-y-6">
            <ResourceManager
              resource="governorates"
              titleAr="المحافظات"
              titleEn="Governorates"
              locale={locale}
              onChanged={() => fetch("/api/admin/governorates").then((r) => r.json()).then((d) => setGovs(d.data ?? []))}
              fields={[
                { key: "nameAr", ar: "الاسم (عربي)", en: "Name (AR)", type: "text", required: true },
                { key: "nameEn", ar: "الاسم (إنجليزي)", en: "Name (EN)", type: "text", required: true },
                { key: "isActive", ar: "مفعلة", en: "Active", type: "checkbox" },
              ]}
            />
            <ResourceManager
              resource="regions"
              titleAr="المناطق ورسوم التوصيل"
              titleEn="Regions & Delivery Fees"
              locale={locale}
              fields={[
                { key: "governorateId", ar: "المحافظة", en: "Governorate", type: "select", options: govs.map((g) => ({ value: g.id, label: ar ? g.nameAr : g.nameEn })), required: true },
                { key: "nameAr", ar: "الاسم (عربي)", en: "Name (AR)", type: "text", required: true },
                { key: "nameEn", ar: "الاسم (إنجليزي)", en: "Name (EN)", type: "text", required: true },
                { key: "deliveryFee", ar: "رسوم التوصيل للمنطقة (د.ب) - اختياري", en: "Delivery Fee (BHD) - Optional", type: "number" },
                { key: "isActive", ar: "مفعلة", en: "Active", type: "checkbox" },
              ]}
            />
          </div>
        )}

        {/* ---------------- PROMOS ---------------- */}
        {tab === "promos" && me.role !== "staff" && (
          <ResourceManager
            resource="promos"
            titleAr="أكواد الخصم والعروض"
            titleEn="Promo & Discount Codes"
            locale={locale}
            fields={[
              { key: "code", ar: "الكود", en: "Code", type: "text", required: true },
              { key: "discountType", ar: "نوع الخصم", en: "Discount type", type: "select", options: [{ value: "percent", label: lbl("نسبة %", "Percent %") }, { value: "amount", label: lbl("مبلغ ثابت", "Fixed amount") }] },
              { key: "discountValue", ar: "قيمة الخصم", en: "Discount value", type: "number", required: true },
              { key: "validFrom", ar: "صالح من", en: "Valid from", type: "datetime" },
              { key: "validUntil", ar: "تاريخ الانتهاء", en: "Expires at", type: "datetime" },
              { key: "maxUsageCount", ar: "سقف عدد الطلبات (فارغ = بلا حد)", en: "Max usage count (empty = unlimited)", type: "number" },
              { key: "currentUsageCount", ar: "الاستخدام الحالي", en: "Used", type: "number", table: true },
              { key: "isActive", ar: "مفعل", en: "Active", type: "checkbox" },
            ]}
          />
        )}

        {/* ---------------- POPUPS ---------------- */}
        {tab === "popups" && me.role !== "staff" && (
          <ResourceManager
            resource="popups"
            titleAr="النوافذ الإعلانية المنبثقة"
            titleEn="Popup Announcements"
            locale={locale}
            fields={[
              { key: "titleAr", ar: "العنوان (عربي)", en: "Title (AR)", type: "text", required: true },
              { key: "titleEn", ar: "العنوان (إنجليزي)", en: "Title (EN)", type: "text", required: true },
              { key: "bodyAr", ar: "النص (عربي)", en: "Body (AR)", type: "textarea" },
              { key: "bodyEn", ar: "النص (إنجليزي)", en: "Body (EN)", type: "textarea" },
              { key: "imageUrl", ar: "صورة", en: "Image", type: "image" },
              { key: "startsAt", ar: "يبدأ في", en: "Starts at", type: "datetime" },
              { key: "endsAt", ar: "ينتهي في", en: "Ends at", type: "datetime" },
              { key: "isActive", ar: "مفعل", en: "Active", type: "checkbox" },
            ]}
          />
        )}

        {/* ---------------- AGGREGATORS ---------------- */}
        {tab === "aggregators" && me.role !== "staff" && (
          <div className="space-y-4">
            <div className="card p-4 text-sm text-muted-c">
              {lbl(
                "أضف شركات التوصيل (مثل Parcel و Webey) مع مفاتيح API الخاصة بها. عند وصول طلب توصيل يتم بثه تلقائياً لجميع الشركات المفعلة، وأول شركة تقبل الطلب تقفله عن البقية عبر نقطة النهاية /api/delivery/accept.",
                "Add delivery companies (e.g. Parcel, Webey) with their API keys. Delivery orders are automatically broadcasted to all active apps; the first app to accept locks the order for the rest via the /api/delivery/accept endpoint."
              )}
            </div>
            <ResourceManager
              resource="aggregators"
              titleAr="شركات وتطبيقات التوصيل"
              titleEn="Delivery Aggregators"
              locale={locale}
              fields={[
                { key: "name", ar: "اسم الشركة", en: "Company name", type: "text", required: true },
                { key: "apiUrl", ar: "رابط API", en: "API URL", type: "text" },
                { key: "apiKey", ar: "مفتاح API", en: "API key", type: "text" },
                { key: "isActive", ar: "مفعلة", en: "Active", type: "checkbox" },
              ]}
            />
          </div>
        )}

        {/* ---------------- CUSTOMERS & BANS ---------------- */}
        {tab === "customers" && me.role !== "staff" && (
          <div className="space-y-6">
            <CustomersList locale={locale} />
            <ResourceManager
              resource="bans"
              titleAr="قائمة الحظر (بريد / هاتف / عنوان)"
              titleEn="Ban List (email / phone / address)"
              locale={locale}
              fields={[
                { key: "banType", ar: "نوع الحظر", en: "Ban type", type: "select", options: [{ value: "email", label: lbl("بريد إلكتروني", "Email") }, { value: "phone", label: lbl("رقم هاتف", "Phone") }, { value: "address", label: lbl("عنوان", "Address") }], required: true },
                { key: "value", ar: "القيمة", en: "Value", type: "text", required: true },
                { key: "reason", ar: "السبب", en: "Reason", type: "textarea" },
              ]}
            />
          </div>
        )}

        {/* ---------------- STAFF ---------------- */}
        {tab === "staff" && me.role !== "staff" && (
          <ResourceManager
            resource="staff"
            titleAr="الموظفون والصلاحيات"
            titleEn="Staff & Permissions"
            locale={locale}
            fields={[
              { key: "username", ar: "اسم المستخدم", en: "Username", type: "text", required: true },
              { key: "fullName", ar: "الاسم الكامل", en: "Full name", type: "text", required: true },
              { key: "email", ar: "البريد الإلكتروني", en: "Email", type: "text" },
              { key: "password", ar: "كلمة المرور (اتركها فارغة للإبقاء)", en: "Password (leave empty to keep)", type: "password" },
              { key: "role", ar: "الدور", en: "Role", type: "select", options: [{ value: "superadmin", label: lbl("مدير عام", "Super admin") }, { value: "manager", label: lbl("مدير", "Manager") }, { value: "staff", label: lbl("موظف", "Staff") }] },
              { key: "isActive", ar: "مفعل", en: "Active", type: "checkbox" },
            ]}
          />
        )}

        {/* ---------------- SETTINGS ---------------- */}
        {tab === "settings" && me.role !== "staff" && <SettingsPanel locale={locale} />}
      </main>
    </div>
  );
}

function CustomersList({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const lbl = (a: string, e: string) => (ar ? a : e);
  const [rows, setRows] = useState<Row[]>([]);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/customers");
    if (res.ok) setRows((await res.json()).data ?? []);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const toggleBan = async (row: Row) => {
    await fetch("/api/admin/customers", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: row.id, isBanned: !row.isBanned }),
    });
    load();
  };

  return (
    <div className="card p-5">
      <h3 className="font-extrabold text-lg text-primary-c mb-4">{lbl("العملاء المسجلون", "Registered Customers")}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/10 text-muted-c text-xs">
              <th className="py-2 text-start">#</th>
              <th className="py-2 text-start px-2">{lbl("الاسم", "Name")}</th>
              <th className="py-2 text-start px-2">{lbl("البريد", "Email")}</th>
              <th className="py-2 text-start px-2">{lbl("الهاتف", "Phone")}</th>
              <th className="py-2 text-end">{lbl("الحالة", "Status")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-black/5">
                <td className="py-2">{r.id}</td>
                <td className="py-2 px-2 font-bold">{r.fullName}</td>
                <td className="py-2 px-2" dir="ltr">{r.email}</td>
                <td className="py-2 px-2" dir="ltr">{r.phone}</td>
                <td className="py-2 text-end">
                  <button onClick={() => toggleBan(r)} className={`text-xs font-bold px-3 py-1 rounded-full ${r.isBanned ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>
                    {r.isBanned ? lbl("محظور — إلغاء الحظر", "Banned — Unban") : lbl("نشط — حظر", "Active — Ban")}
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={5} className="py-8 text-center text-muted-c">{lbl("لا يوجد عملاء بعد", "No customers yet")}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}