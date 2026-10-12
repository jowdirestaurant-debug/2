"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Row = Record<string, any>;

export type FieldType = "text" | "number" | "checkbox" | "select" | "datetime" | "textarea" | "image" | "password";
export type Field = {
  key: string;
  ar: string;
  en: string;
  type: FieldType;
  options?: { value: string | number; label: string }[];
  required?: boolean;
  table?: boolean; // show column in table
};

export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > 2 * 1024 * 1024) {
      reject(new Error("too_large"));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function toLocalInput(value: string | null | undefined) {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function ResourceManager({
  resource,
  titleAr,
  titleEn,
  fields,
  locale,
  refreshSignal,
  onChanged,
}: {
  resource: string;
  titleAr: string;
  titleEn: string;
  fields: Field[];
  locale: Locale;
  refreshSignal?: number;
  onChanged?: () => void;
}) {
  const ar = locale === "ar";
  const lbl = (a: string, e: string) => (ar ? a : e);
  const [rows, setRows] = useState<Row[]>([]);
  const [editing, setEditing] = useState<Row | null>(null);
  const [form, setForm] = useState<Row>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const res = await fetch(`/api/admin/${resource}`);
    if (res.ok) {
      const d = await res.json();
      setRows(d.data ?? []);
    }
  }, [resource]);

  useEffect(() => {
    load();
  }, [load, refreshSignal]);

  const openNew = () => {
    const init: Row = {};
    for (const f of fields) {
      if (f.type === "checkbox") init[f.key] = true;
      else init[f.key] = "";
    }
    setForm(init);
    setEditing({ __new: true });
    setError("");
  };

  const openEdit = (row: Row) => {
    const init: Row = { id: row.id };
    for (const f of fields) {
      if (f.type === "datetime") init[f.key] = toLocalInput(row[f.key]);
      else if (f.type === "password") init[f.key] = "";
      else init[f.key] = row[f.key] ?? (f.type === "checkbox" ? false : "");
    }
    setForm(init);
    setEditing(row);
    setError("");
  };

  const save = async () => {
    setBusy(true);
    setError("");
    try {
      const payload: Row = { ...form };
      for (const f of fields) {
        if (f.type === "datetime" && payload[f.key]) payload[f.key] = new Date(payload[f.key]).toISOString();
        if (f.type === "number" && payload[f.key] !== "") payload[f.key] = Number(payload[f.key]);
      }
      const isNew = editing?.__new;
      const res = await fetch(`/api/admin/${resource}`, {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setError(lbl("فشل الحفظ — تحقق من الحقول", "Save failed — check the fields"));
        return;
      }
      setEditing(null);
      await load();
      onChanged?.();
    } finally {
      setBusy(false);
    }
  };

  const remove = async (row: Row) => {
    if (!confirm(lbl("هل أنت متأكد من الحذف؟", "Are you sure you want to delete?"))) return;
    await fetch(`/api/admin/${resource}?id=${row.id}`, { method: "DELETE" });
    await load();
    onChanged?.();
  };

  const tableFields = fields.filter((f) => f.table !== false && f.type !== "password" && f.type !== "textarea" && f.type !== "image");
  const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-lg text-primary-c">{lbl(titleAr, titleEn)}</h3>
        <button onClick={openNew} className="btn-accent px-4 py-2 rounded-lg text-sm font-bold">+ {lbl("إضافة", "Add")}</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/10 text-muted-c text-xs">
              <th className="py-2 text-start">#</th>
              {tableFields.map((f) => (
                <th key={f.key} className="py-2 text-start px-2">{lbl(f.ar, f.en)}</th>
              ))}
              <th className="py-2 text-end">{lbl("إجراءات", "Actions")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-black/5 hover:bg-black/[0.02]">
                <td className="py-2">{row.id}</td>
                {tableFields.map((f) => (
                  <td key={f.key} className="py-2 px-2">
                    {f.type === "checkbox" ? (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row[f.key] ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                        {row[f.key] ? lbl("نعم", "Yes") : lbl("لا", "No")}
                      </span>
                    ) : f.type === "select" ? (
                      <span>{f.options?.find((o) => String(o.value) === String(row[f.key]))?.label ?? row[f.key]}</span>
                    ) : f.type === "datetime" ? (
                      <span dir="ltr">{row[f.key] ? new Date(row[f.key]).toLocaleString("en-GB") : "—"}</span>
                    ) : (
                      <span className="line-clamp-1 max-w-[220px]">{String(row[f.key] ?? "—")}</span>
                    )}
                  </td>
                ))}
                <td className="py-2 text-end whitespace-nowrap">
                  <button onClick={() => openEdit(row)} className="text-blue-600 hover:underline text-xs font-bold px-2">{lbl("تعديل", "Edit")}</button>
                  <button onClick={() => remove(row)} className="text-red-500 hover:underline text-xs font-bold px-2">{lbl("حذف", "Delete")}</button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={tableFields.length + 2} className="py-8 text-center text-muted-c">{lbl("لا توجد بيانات", "No data")}</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <div className="card w-full max-w-lg max-h-[85vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-extrabold text-lg mb-4 text-primary-c">
              {editing.__new ? lbl("إضافة جديد", "Add new") : lbl("تعديل", "Edit")} — {lbl(titleAr, titleEn)}
            </h4>
            <div className="space-y-3">
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="text-xs font-bold text-muted-c block mb-1">
                    {lbl(f.ar, f.en)} {f.required && "*"}
                  </label>
                  {f.type === "checkbox" ? (
                    <button onClick={() => setForm((p) => ({ ...p, [f.key]: !p[f.key] }))} className={`px-4 py-1.5 rounded-full text-xs font-bold ${form[f.key] ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`}>
                      {form[f.key] ? lbl("مفعل", "Enabled") : lbl("معطل", "Disabled")}
                    </button>
                  ) : f.type === "select" ? (
                    <select value={form[f.key] ?? ""} onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))} className={input}>
                      <option value="">—</option>
                      {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea value={form[f.key] ?? ""} onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))} className={input} rows={3} />
                  ) : f.type === "image" ? (
                    <div className="flex items-center gap-3">
                      {form[f.key] && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={form[f.key]} alt="" className="h-14 w-14 rounded-lg object-cover border" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          try {
                            const url = await readFileAsDataUrl(file);
                            setForm((p) => ({ ...p, [f.key]: url }));
                          } catch {
                            setError(lbl("الصورة كبيرة جداً (الحد 2MB)", "Image too large (max 2MB)"));
                          }
                        }}
                        className="text-xs"
                      />
                      {form[f.key] && (
                        <button onClick={() => setForm((p) => ({ ...p, [f.key]: "" }))} className="text-red-500 text-xs font-bold">✕</button>
                      )}
                    </div>
                  ) : (
                    <input
                      type={f.type === "number" ? "number" : f.type === "datetime" ? "datetime-local" : f.type === "password" ? "password" : "text"}
                      step={f.type === "number" ? "any" : undefined}
                      value={form[f.key] ?? ""}
                      onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                      className={input}
                      dir={f.type === "number" || f.type === "datetime" || f.type === "password" ? "ltr" : undefined}
                    />
                  )}
                </div>
              ))}
            </div>
            {error && <div className="mt-3 text-sm font-bold text-red-500">{error}</div>}
            <div className="flex gap-2 mt-5">
              <button onClick={save} disabled={busy} className="btn-primary flex-1 py-2.5 rounded-lg font-bold disabled:opacity-50">{lbl("حفظ", "Save")}</button>
              <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-lg font-bold bg-black/5">{lbl("إلغاء", "Cancel")}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
