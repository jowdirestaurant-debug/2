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
  { id: "jowdi-classic", nameAr: "الجودي الكلاسيكي", nameEn: "Jowdi Classic", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#b87333", bg: "#ffffff", surface: "#faf7f5", text: "#2b1c16", muted: "#8a7a71", heroOverlay: "rgba(62,42,34,0.65)" } },
  { id: "royal-gold", nameAr: "الذهبي الملكي", nameEn: "Royal Gold", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#d4af37", bg: "#fffdf9", surface: "#ffffff", text: "#2b1c16", muted: "#9b8b7e", heroOverlay: "rgba(45,30,22,0.6)" } },
  { id: "desert-night", nameAr: "ليل الصحراء", nameEn: "Desert Night", vars: { primary: "#b87333", primaryDark: "#8c5626", accent: "#ffffff", bg: "#1a1614", surface: "#26211e", text: "#f5f1ec", muted: "#a39a90", heroOverlay: "rgba(0,0,0,0.75)" } },
  { id: "olive-garden", nameAr: "حديقة الزيتون", nameEn: "Olive Garden", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#607d8b", bg: "#f8f9f8", surface: "#ffffff", text: "#212b23", muted: "#788f7c", heroOverlay: "rgba(33,43,35,0.6)" } },
  { id: "crimson-feast", nameAr: "وليمة القرمزي", nameEn: "Crimson Feast", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#a52a2a", bg: "#fffcfc", surface: "#ffffff", text: "#2d1b15", muted: "#9c8c84", heroOverlay: "rgba(45,27,21,0.6)" } },
  { id: "ocean-breeze", nameAr: "نسيم المحيط", nameEn: "Ocean Breeze", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#0e7490", bg: "#f3f9fb", surface: "#ffffff", text: "#102a33", muted: "#6e8f9a", heroOverlay: "rgba(16,42,51,0.55)" } },
  { id: "saffron-spice", nameAr: "بهار الزعفران", nameEn: "Saffron Spice", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#d97706", bg: "#fffaf3", surface: "#ffffff", text: "#331d0c", muted: "#a98f74", heroOverlay: "rgba(51,29,12,0.55)" } },
  { id: "midnight-luxe", nameAr: "فخامة منتصف الليل", nameEn: "Midnight Luxe", vars: { primary: "#b87333", primaryDark: "#8c5626", accent: "#f0abfc", bg: "#0f0c1a", surface: "#1a1527", text: "#efe9ff", muted: "#9d93b8", heroOverlay: "rgba(5,3,12,0.65)" } },
  { id: "emerald-oasis", nameAr: "واحة الزمرد", nameEn: "Emerald Oasis", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#047857", bg: "#f2faf7", surface: "#ffffff", text: "#0d2a21", muted: "#6f968a", heroOverlay: "rgba(13,42,33,0.55)" } },
  { id: "terracotta", nameAr: "التراكوتا", nameEn: "Terracotta", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#b45309", bg: "#fdf8f3", surface: "#ffffff", text: "#3a2512", muted: "#a58a70", heroOverlay: "rgba(58,37,18,0.55)" } },
  { id: "rose-petal", nameAr: "بتلة الورد", nameEn: "Rose Petal", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#be185d", bg: "#fdf4f8", surface: "#ffffff", text: "#330f20", muted: "#a87b92", heroOverlay: "rgba(51,15,32,0.55)" } },
  { id: "arabian-nights", nameAr: "ليالي العرب", nameEn: "Arabian Nights", vars: { primary: "#b45309", primaryDark: "#92400e", accent: "#eab308", bg: "#1c1408", surface: "#2a1f10", text: "#fdf1d6", muted: "#b49d73", heroOverlay: "rgba(0,0,0,0.7)" } },
  { id: "mint-fresh", nameAr: "النعناع المنعش", nameEn: "Mint Fresh", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#0d9488", bg: "#f1fbf9", surface: "#ffffff", text: "#0f2d29", muted: "#6c9a93", heroOverlay: "rgba(15,45,41,0.55)" } },
  { id: "charcoal-grill", nameAr: "الفحم والشواء", nameEn: "Charcoal Grill", vars: { primary: "#ea580c", primaryDark: "#b84609", accent: "#5c4033", bg: "#191919", surface: "#242424", text: "#f5f1ec", muted: "#a39a90", heroOverlay: "rgba(0,0,0,0.65)" } },
  { id: "lavender-dream", nameAr: "حلم الخزامى", nameEn: "Lavender Dream", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#7c3aed", bg: "#f8f6fd", surface: "#ffffff", text: "#231542", muted: "#8f84ad", heroOverlay: "rgba(35,21,66,0.55)" } },
  { id: "honey-amber", nameAr: "العسل والكهرمان", nameEn: "Honey Amber", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#b8860b", bg: "#fffbf0", surface: "#ffffff", text: "#332508", muted: "#a8976e", heroOverlay: "rgba(51,37,8,0.55)" } },
  { id: "sapphire-elite", nameAr: "الياقوت النخبة", nameEn: "Sapphire Elite", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#1d4ed8", bg: "#f4f7fe", surface: "#ffffff", text: "#111d3d", muted: "#7284ad", heroOverlay: "rgba(17,29,61,0.55)" } },
  { id: "coral-sunset", nameAr: "غروب المرجان", nameEn: "Coral Sunset", vars: { primary: "#5c4033", primaryDark: "#3e2a22", accent: "#f43f5e", bg: "#fff6f5", surface: "#ffffff", text: "#3b0f17", muted: "#b1808a", heroOverlay: "rgba(59,15,23,0.5)" } },
  { id: "forest-smoke", nameAr: "دخان الغابة", nameEn: "Forest Smoke", vars: { primary: "#166534", primaryDark: "#0f4a26", accent: "#5c4033", bg: "#10180f", surface: "#1a2418", text: "#eaf3e6", muted: "#93a68d", heroOverlay: "rgba(0,0,0,0.65)" } },
  { id: "pearl-minimal", nameAr: "اللؤلؤ البسيط", nameEn: "Pearl Minimal", vars: { primary: "#111827", primaryDark: "#000000", accent: "#5c4033", bg: "#fafafa", surface: "#ffffff", text: "#111827", muted: "#6b7280", heroOverlay: "rgba(17,24,39,0.6)" } },
];

export function getTheme(id: string | null | undefined): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}