"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import ResourceManager, { readFileAsDataUrl, type Row } from "./ResourceManager";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function MenuManager({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const lbl = (a: string, e: string) => (ar ? a : e);

  const [cats, setCats] = useState<Row[]>([]);
  const [items, setItems] = useState<Row[]>([]);
  const [sizes, setSizes] = useState<Row[]>([]);
  const [catFilter, setCatFilter] = useState<number | 0>(0);
  const [editItem, setEditItem] = useState<Row | null>(null);
  const [form, setForm] = useState<Row>({});
  const [sizeItem, setSizeItem] = useState<Row | null>(null);
  const [sizeForm, setSizeForm] = useState<Row | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [catSignal, setCatSignal] = useState(0);

  const load = useCallback(async () => {
    const [c, i, s] = await Promise.all([
      fetch("/api/admin/categories").then((r) => r.json()),
      fetch("/api/admin/items").then((r) => r.json()),
      fetch("/api/admin/sizes").then((r) => r.json()),
    ]);
    setCats(c.data ?? []);
    setItems(i.data ?? []);
    setSizes(s.data ?? []);
  }, []);

  useEffect(() => {
    load();
  }, [load, catSignal]);

  const toggleAvailability = async (item: Row) => {
    await fetch("/api/admin/items", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, isAvailable: !item.isAvailable }),
    });
    load();
  };

  const openItem = (item: Row | null) => {
    setError("");
    if (item) {
      setForm({ ...item });
      setEditItem(item);
    } else {
      setForm({ categoryId: cats[0]?.id ?? "", nameAr: "", nameEn: "", descriptionAr: "", descriptionEn: "", basePrice: "", discountPercent: "0", imageUrl: "", isAvailable: true, sortOrder: 0 });
      setEditItem({ __new: true });
    }
  };

  const saveItem = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/admin/items", {
        method: editItem?.__new ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        setError(lbl("فشل الحفظ", "Save failed"));
        return;
      }
      setEditItem(null);
      load();
    } finally {
      setBusy(false);
    }
  };

  const deleteItem = async (item: Row) => {
    if (!confirm(lbl("حذف هذا الطبق نهائياً؟", "Delete this dish permanently?"))) return;
    await fetch(`/api/admin/items?id=${item.id}`, { method: "DELETE" });
    load();
  };

  const saveSize = async () => {
    if (!sizeForm) return;
    const res = await fetch("/api/admin/sizes", {
      method: sizeForm.__new ? "POST" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...sizeForm, itemId: sizeItem?.id }),
    });
    if (res.ok) {
      setSizeForm(null);
      load();
    }
  };

  const deleteSize = async (s: Row) => {
    if (!confirm(lbl("حذف هذا الحجم؟", "Delete this size?"))) return;
    await fetch(`/api/admin/sizes?id=${s.id}`, { method: "DELETE" });
    load();
  };

  const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";
  const filtered = catFilter === 0 ? items : items.filter((i) => i.categoryId === catFilter);

  return (
    <div className="space-y-6">
      {/* Categories CRUD */}
      <ResourceManager
        resource="categories"
        titleAr="أقسام القائمة"
        titleEn="Menu Categories"
        locale={locale}
        onChanged={() => setCatSignal((s) => s + 1)}
        fields={[
          { key: "nameAr", ar: "الاسم (عربي)", en: "Name (AR)", type: "text", required: true },
          { key: "nameEn", ar: "الاسم (إنجليزي)", en: "Name (EN)", type: "text", required: true },
          { key: "parentId", ar: "القسم الرئيسي", en: "Parent category", type: "select", options: cats.map((c) => ({ value: c.id, label: ar ? c.nameAr : c.nameEn })), table: false },
          { key: "sortOrder", ar: "الترتيب", en: "Sort order", type: "number" },
          { key: "isActive", ar: "مفعل", en: "Active", type: "checkbox" },
        ]}
      />

      {/* Items */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h3 className="font-extrabold text-lg text-primary-c">{lbl("الأطباق والأصناف", "Dishes & Items")}</h3>
          <div className="flex gap-2 items-center">
            <select value={catFilter} onChange={(e) => setCatFilter(Number(e.target.value))} className="border border-black/15 rounded-lg px-3 py-2 text-sm bg-white">
              <option value={0}>{lbl("كل الأقسام", "All categories")}</option>
              {cats.map((c) => <option key={c.id} value={c.id}>{ar ? c.nameAr : c.nameEn}</option>)}
            </select>
            <button onClick={() => openItem(null)} className="btn-accent px-4 py-2 rounded-lg text-sm font-bold">+ {lbl("إضافة طبق", "Add dish")}</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {filtered.map((item) => {
            const itemSizes = sizes.filter((s) => s.itemId === item.id);
            return (
              <div key={item.id} className={`border rounded-xl p-3 flex gap-3 ${item.isAvailable ? "border-black/10" : "border-red-200 bg-red-50/40"}`}>
                <div className="h-16 w-16 rounded-lg bg-black/5 overflow-hidden flex items-center justify-center text-2xl shrink-0">
                  {item.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.imageUrl} alt="" className="h-full w-full object-cover" />
                  ) : "🍽️"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm">{ar ? item.nameAr : item.nameEn}</div>
                  <div className="text-xs text-muted-c">
                    {cats.find((c) => c.id === item.categoryId) ? (ar ? cats.find((c) => c.id === item.categoryId)!.nameAr : cats.find((c) => c.id === item.categoryId)!.nameEn) : "—"}
                    {" · "}{Number(item.basePrice).toFixed(3)}
                    {Number(item.discountPercent) > 0 && <span className="text-green-600"> · -{Number(item.discountPercent)}%</span>}
                    {" · "}{itemSizes.length} {lbl("أحجام", "sizes")}
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <button onClick={() => toggleAvailability(item)} className={`text-xs font-bold px-3 py-1 rounded-full ${item.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                      {item.isAvailable ? lbl("متاح", "Available") : lbl("غير متاح", "Unavailable")}
                    </button>
                    <button onClick={() => setSizeItem(item)} className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600">{lbl("الأحجام", "Sizes")}</button>
                    <button onClick={() => openItem(item)} className="text-xs font-bold px-3 py-1 rounded-full bg-black/5">{lbl("تعديل", "Edit")}</button>
                    <button onClick={() => deleteItem(item)} className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-red-500">{lbl("حذف", "Delete")}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Item editor modal */}
      {editItem && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setEditItem(null)}>
          <div className="card w-full max-w-lg max-h-[85vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-extrabold text-lg mb-4 text-primary-c">{editItem.__new ? lbl("إضافة طبق", "Add dish") : lbl("تعديل طبق", "Edit dish")}</h4>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-muted-c block mb-1">{lbl("القسم", "Category")} *</label>
                <select value={form.categoryId ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, categoryId: Number(e.target.value) }))} className={input}>
                  {cats.map((c) => <option key={c.id} value={c.id}>{ar ? c.nameAr : c.nameEn}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("الاسم (عربي)", "Name (AR)")} *</label><input value={form.nameAr ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, nameAr: e.target.value }))} className={input} /></div>
                <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("الاسم (إنجليزي)", "Name (EN)")} *</label><input value={form.nameEn ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, nameEn: e.target.value }))} className={input} /></div>
              </div>
              <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("الوصف (عربي)", "Description (AR)")}</label><textarea value={form.descriptionAr ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, descriptionAr: e.target.value }))} className={input} rows={2} /></div>
              <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("الوصف (إنجليزي)", "Description (EN)")}</label><textarea value={form.descriptionEn ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, descriptionEn: e.target.value }))} className={input} rows={2} /></div>
              <div className="grid grid-cols-3 gap-3">
                <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("السعر الأساسي", "Base price")} *</label><input type="number" step="any" value={form.basePrice ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, basePrice: e.target.value }))} className={input} dir="ltr" /></div>
                <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("خصم %", "Discount %")}</label><input type="number" step="any" value={form.discountPercent ?? ""} onChange={(e) => setForm((p: Row) => ({ ...p, discountPercent: e.target.value }))} className={input} dir="ltr" /></div>
                <div><label className="text-xs font-bold text-muted-c block mb-1">{lbl("الترتيب", "Sort")}</label><input type="number" value={form.sortOrder ?? 0} onChange={(e) => setForm((p: Row) => ({ ...p, sortOrder: e.target.value }))} className={input} dir="ltr" /></div>
              </div>
              <div>
                <label className="text-xs font-bold text-muted-c block mb-1">{lbl("صورة الطبق", "Dish image")}</label>
                <div className="flex items-center gap-3">
                  {form.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.imageUrl} alt="" className="h-14 w-14 rounded-lg object-cover border" />
                  )}
                  <input type="file" accept="image/*" className="text-xs" onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      setForm((p: Row) => ({ ...p, imageUrl: "" }));
                      const url = await readFileAsDataUrl(file);
                      setForm((p: Row) => ({ ...p, imageUrl: url }));
                    } catch {
                      setError(lbl("الصورة كبيرة جداً (الحد 2MB)", "Image too large (max 2MB)"));
                    }
                  }} />
                  {form.imageUrl && <button onClick={() => setForm((p: Row) => ({ ...p, imageUrl: "" }))} className="text-red-500 text-xs font-bold">✕</button>}
                </div>
              </div>
              <button onClick={() => setForm((p: Row) => ({ ...p, isAvailable: !p.isAvailable }))} className={`px-4 py-1.5 rounded-full text-xs font-bold ${form.isAvailable ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`}>
                {form.isAvailable ? lbl("متاح", "Available") : lbl("غير متاح", "Unavailable")}
              </button>
            </div>
            {error && <div className="mt-3 text-sm font-bold text-red-500">{error}</div>}
            <div className="flex gap-2 mt-5">
              <button onClick={saveItem} disabled={busy} className="btn-primary flex-1 py-2.5 rounded-lg font-bold disabled:opacity-50">{lbl("حفظ", "Save")}</button>
              <button onClick={() => setEditItem(null)} className="flex-1 py-2.5 rounded-lg font-bold bg-black/5">{lbl("إلغاء", "Cancel")}</button>
            </div>
          </div>
        </div>
      )}

      {/* Sizes modal */}
      {sizeItem && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => { setSizeItem(null); setSizeForm(null); }}>
          <div className="card w-full max-w-lg max-h-[85vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-extrabold text-lg mb-1 text-primary-c">{lbl("أحجام وأسعار", "Sizes & prices")} — {ar ? sizeItem.nameAr : sizeItem.nameEn}</h4>
            <p className="text-xs text-muted-c mb-4">{lbl("أضف أكثر من حجم مع سعر خاص لكل حجم", "Add multiple sizes, each with its own price")}</p>

            <div className="space-y-2">
              {sizes.filter((s) => s.itemId === sizeItem.id).map((s) => (
                <div key={s.id} className="flex items-center justify-between border border-black/10 rounded-lg px-3 py-2 text-sm">
                  <div>
                    <span className="font-bold">{ar ? s.nameAr : s.nameEn}</span>
                    <span className="text-muted-c"> — {Number(s.price).toFixed(3)}</span>
                    {Number(s.discountPercent) > 0 && <span className="text-green-600 text-xs"> -{Number(s.discountPercent)}%</span>}
                    {s.stock !== null && <span className="text-xs text-muted-c"> · {lbl("مخزون", "stock")}: {s.stock}</span>}
                    {!s.isAvailable && <span className="text-xs text-red-500 font-bold"> · {lbl("غير متاح", "Unavailable")}</span>}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setSizeForm({ ...s })} className="text-blue-600 text-xs font-bold">{lbl("تعديل", "Edit")}</button>
                    <button onClick={() => deleteSize(s)} className="text-red-500 text-xs font-bold">{lbl("حذف", "Delete")}</button>
                  </div>
                </div>
              ))}
            </div>

            {sizeForm ? (
              <div className="mt-4 border-t border-black/10 pt-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input value={sizeForm.nameAr ?? ""} onChange={(e) => setSizeForm((p: Row | null) => ({ ...p!, nameAr: e.target.value }))} placeholder={lbl("الاسم (عربي) مثال: وسط", "Name (AR)")} className={input} />
                  <input value={sizeForm.nameEn ?? ""} onChange={(e) => setSizeForm((p: Row | null) => ({ ...p!, nameEn: e.target.value }))} placeholder={lbl("الاسم (إنجليزي) مثال: Medium", "Name (EN) e.g. Medium")} className={input} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <input type="number" step="any" value={sizeForm.price ?? ""} onChange={(e) => setSizeForm((p: Row | null) => ({ ...p!, price: e.target.value }))} placeholder={lbl("السعر", "Price")} className={input} dir="ltr" />
                  <input type="number" step="any" value={sizeForm.discountPercent ?? ""} onChange={(e) => setSizeForm((p: Row | null) => ({ ...p!, discountPercent: e.target.value }))} placeholder={lbl("خصم %", "Disc %")} className={input} dir="ltr" />
                  <input type="number" value={sizeForm.stock ?? ""} onChange={(e) => setSizeForm((p: Row | null) => ({ ...p!, stock: e.target.value }))} placeholder={lbl("المخزون (اختياري)", "Stock (opt)")} className={input} dir="ltr" />
                </div>
                <button onClick={() => setSizeForm((p: Row | null) => ({ ...p!, isAvailable: !(p!.isAvailable !== false) }))} className={`px-4 py-1.5 rounded-full text-xs font-bold ${sizeForm.isAvailable !== false ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`}>
                  {sizeForm.isAvailable !== false ? lbl("متاح", "Available") : lbl("غير متاح", "Unavailable")}
                </button>
                <div className="flex gap-2">
                  <button onClick={saveSize} className="btn-primary flex-1 py-2 rounded-lg font-bold text-sm">{lbl("حفظ الحجم", "Save size")}</button>
                  <button onClick={() => setSizeForm(null)} className="flex-1 py-2 rounded-lg font-bold bg-black/5 text-sm">{lbl("إلغاء", "Cancel")}</button>
                </div>
              </div>
            ) : (
              <button onClick={() => setSizeForm({ __new: true, nameAr: "", nameEn: "", price: "", discountPercent: "0", stock: "", isAvailable: true })} className="btn-accent w-full mt-4 py-2.5 rounded-lg font-bold text-sm">
                + {lbl("إضافة حجم جديد", "Add new size")}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
