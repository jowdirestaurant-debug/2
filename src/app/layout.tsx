import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Cairo } from "next/font/google";
import { normalizeLocale } from "@/lib/i18n";
import { getTheme } from "@/lib/themes";
import { getSettings } from "@/lib/settings";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "مطعم الجودي | Jowdi Restaurant",
  description:
    "مطعم الجودي — مشاوي وأطباق شرقية أصيلة | Jowdi Restaurant — Authentic grills and oriental dishes",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const store = await cookies();
  const locale = normalizeLocale(store.get("locale")?.value);
  let themeId = "jowdi-classic";
  try {
    const settings = await getSettings();
    themeId = settings.theme || "jowdi-classic";
  } catch {
    /* DB not ready yet */
  }
  const theme = getTheme(themeId);

  const style = {
    "--primary": theme.vars.primary,
    "--primary-dark": theme.vars.primaryDark,
    "--accent": theme.vars.accent,
    "--bg": theme.vars.bg,
    "--surface": theme.vars.surface,
    "--text": theme.vars.text,
    "--muted": theme.vars.muted,
    "--hero-overlay": theme.vars.heroOverlay,
  } as React.CSSProperties;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} style={style}>
      <body className={`${cairo.variable} antialiased min-h-screen`}>{children}</body>
    </html>
  );
}
