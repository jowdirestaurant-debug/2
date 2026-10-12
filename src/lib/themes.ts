export type Theme = {
  id: string;
  nameAr: string;
  nameEn: string;
  vars: {
    primary: string;
    primaryDark: string;
    accent: string;
    bg: string;
    surface: string;
    text: string;
    muted: string;
    heroOverlay: string;
  };
};

export const THEMES: Theme[] = [
  { id: "jowdi-classic", nameAr: "الجودي الكلاسيكي", nameEn: "Jowdi Classic", vars: { primary: "#5b4636", primaryDark: "#3e2f24", accent: "#c9a227", bg: "#faf7f2", surface: "#ffffff", text: "#2b2118", muted: "#8a7a6b", heroOverlay: "rgba(43,33,24,0.6)" } },
  { id: "royal-gold", nameAr: "الذهبي الملكي", nameEn: "Royal Gold", vars: { primary: "#9a7b1f", primaryDark: "#6e5713", accent: "#d4af37", bg: "#fffdf5", surface: "#ffffff", text: "#2d2a1f", muted: "#9b927a", heroOverlay: "rgba(45,42,31,0.55)" } },
  { id: "desert-night", nameAr: "ليل الصحراء", nameEn: "Desert Night", vars: { primary: "#c9a227", primaryDark: "#a4821a", accent: "#e3c766", bg: "#15120e", surface: "#211c15", text: "#f3ead9", muted: "#a79a84", heroOverlay: "rgba(0,0,0,0.65)" } },
  { id: "olive-garden", nameAr: "حديقة الزيتون", nameEn: "Olive Garden", vars: { primary: "#556b2f", primaryDark: "#3c4d20", accent: "#a3b86c", bg: "#f7f8f2", surface: "#ffffff", text: "#262b1c", muted: "#848b70", heroOverlay: "rgba(38,43,28,0.55)" } },
  { id: "crimson-feast", nameAr: "وليمة القرمزي", nameEn: "Crimson Feast", vars: { primary: "#9b1c31", primaryDark: "#6e1322", accent: "#e8b04b", bg: "#fdf6f5", surface: "#ffffff", text: "#2d1418", muted: "#a3777e", heroOverlay: "rgba(45,20,24,0.6)" } },
  { id: "ocean-breeze", nameAr: "نسيم المحيط", nameEn: "Ocean Breeze", vars: { primary: "#0e7490", primaryDark: "#0a5366", accent: "#f59e0b", bg: "#f3f9fb", surface: "#ffffff", text: "#102a33", muted: "#6e8f9a", heroOverlay: "rgba(16,42,51,0.55)" } },
  { id: "saffron-spice", nameAr: "بهار الزعفران", nameEn: "Saffron Spice", vars: { primary: "#d97706", primaryDark: "#9a5406", accent: "#7c2d12", bg: "#fffaf3", surface: "#ffffff", text: "#331d0c", muted: "#a98f74", heroOverlay: "rgba(51,29,12,0.55)" } },
  { id: "midnight-luxe", nameAr: "فخامة منتصف الليل", nameEn: "Midnight Luxe", vars: { primary: "#8b5cf6", primaryDark: "#6d41d8", accent: "#f0abfc", bg: "#0f0c1a", surface: "#1a1527", text: "#efe9ff", muted: "#9d93b8", heroOverlay: "rgba(5,3,12,0.65)" } },
  { id: "emerald-oasis", nameAr: "واحة الزمرد", nameEn: "Emerald Oasis", vars: { primary: "#047857", primaryDark: "#035c43", accent: "#fbbf24", bg: "#f2faf7", surface: "#ffffff", text: "#0d2a21", muted: "#6f968a", heroOverlay: "rgba(13,42,33,0.55)" } },
  { id: "terracotta", nameAr: "التراكوتا", nameEn: "Terracotta", vars: { primary: "#b45309", primaryDark: "#853d06", accent: "#78350f", bg: "#fdf8f3", surface: "#ffffff", text: "#3a2512", muted: "#a58a70", heroOverlay: "rgba(58,37,18,0.55)" } },
  { id: "rose-petal", nameAr: "بتلة الورد", nameEn: "Rose Petal", vars: { primary: "#be185d", primaryDark: "#8d1145", accent: "#f9a8d4", bg: "#fdf4f8", surface: "#ffffff", text: "#330f20", muted: "#a87b92", heroOverlay: "rgba(51,15,32,0.55)" } },
  { id: "arabian-nights", nameAr: "ليالي العرب", nameEn: "Arabian Nights", vars: { primary: "#b45309", primaryDark: "#92400e", accent: "#eab308", bg: "#1c1408", surface: "#2a1f10", text: "#fdf1d6", muted: "#b49d73", heroOverlay: "rgba(0,0,0,0.7)" } },
  { id: "mint-fresh", nameAr: "النعناع المنعش", nameEn: "Mint Fresh", vars: { primary: "#0d9488", primaryDark: "#0a6f66", accent: "#f97316", bg: "#f1fbf9", surface: "#ffffff", text: "#0f2d29", muted: "#6c9a93", heroOverlay: "rgba(15,45,41,0.55)" } },
  { id: "charcoal-grill", nameAr: "الفحم والشواء", nameEn: "Charcoal Grill", vars: { primary: "#ea580c", primaryDark: "#b84609", accent: "#fbbf24", bg: "#191919", surface: "#242424", text: "#f5f1ec", muted: "#a39a90", heroOverlay: "rgba(0,0,0,0.65)" } },
  { id: "lavender-dream", nameAr: "حلم الخزامى", nameEn: "Lavender Dream", vars: { primary: "#7c3aed", primaryDark: "#5d29b7", accent: "#fb7185", bg: "#f8f6fd", surface: "#ffffff", text: "#231542", muted: "#8f84ad", heroOverlay: "rgba(35,21,66,0.55)" } },
  { id: "honey-amber", nameAr: "العسل والكهرمان", nameEn: "Honey Amber", vars: { primary: "#b8860b", primaryDark: "#8c6508", accent: "#92400e", bg: "#fffbf0", surface: "#ffffff", text: "#332508", muted: "#a8976e", heroOverlay: "rgba(51,37,8,0.55)" } },
  { id: "sapphire-elite", nameAr: "الياقوت النخبة", nameEn: "Sapphire Elite", vars: { primary: "#1d4ed8", primaryDark: "#1539a3", accent: "#f59e0b", bg: "#f4f7fe", surface: "#ffffff", text: "#111d3d", muted: "#7284ad", heroOverlay: "rgba(17,29,61,0.55)" } },
  { id: "coral-sunset", nameAr: "غروب المرجان", nameEn: "Coral Sunset", vars: { primary: "#f43f5e", primaryDark: "#c22646", accent: "#fb923c", bg: "#fff6f5", surface: "#ffffff", text: "#3b0f17", muted: "#b1808a", heroOverlay: "rgba(59,15,23,0.5)" } },
  { id: "forest-smoke", nameAr: "دخان الغابة", nameEn: "Forest Smoke", vars: { primary: "#166534", primaryDark: "#0f4a26", accent: "#ca8a04", bg: "#10180f", surface: "#1a2418", text: "#eaf3e6", muted: "#93a68d", heroOverlay: "rgba(0,0,0,0.65)" } },
  { id: "pearl-minimal", nameAr: "اللؤلؤ البسيط", nameEn: "Pearl Minimal", vars: { primary: "#111827", primaryDark: "#000000", accent: "#b91c1c", bg: "#fafafa", surface: "#ffffff", text: "#111827", muted: "#6b7280", heroOverlay: "rgba(17,24,39,0.6)" } },
];

export function getTheme(id: string | null | undefined): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}
