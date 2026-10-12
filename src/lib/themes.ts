export type Theme = {
  id: string;
  nameAr: string;
  nameEn: string;
  vars: {
    primary: string; // اللون الأساسي (مشتق من الشعار)
    primaryDark: string; // لون أساسي داكن للتباين
    accent: string; // لون اللكنة/التمييز العصري
    bg: string; // لون الخلفية الرئيسية
    surface: string; // لون الأسطح والبطاقات
    text: string; // لون النص الأساسي
    muted: string; // لون النص الباهت/الثانوي
    heroOverlay: string; // تراكب الصور الرئيسية
  };
};

export const THEMES: Theme[] = [
  // 1. الجودي الكلاسيكي: الالتزام التام بألوان الشعار (بني وأبيض)
  {
    id: "jowdi-signature",
    nameAr: "توقيع الجودي",
    nameEn: "Jowdi Signature",
    vars: {
      primary: "#5c4033", // بني شوكولاتة دافئ (من الشعار)
      primaryDark: "#3e2a22", // بني أدكن
      accent: "#ffffff", // الأبيض النقي كلون لكنة كلاسيكي
      bg: "#ffffff", // خلفية بيضاء نقية
      surface: "#fafafa", // أسطح مائلة للبياض
      text: "#2b1c16", // نص بني داكن جداً
      muted: "#8a7a71", // نص باهت بني فاتح
      heroOverlay: "rgba(62,42,34,0.65)", // تراكب بني داكن
    },
  },

  // 2. فخامة النحاس: مزج البني الشوكولاتة مع النحاس العصري
  {
    id: "jowdi-copper",
    nameAr: "الجودي النحاسي",
    nameEn: "Jowdi Copper Luxe",
    vars: {
      primary: "#5c4033", // بني الشعار
      primaryDark: "#3e2a22",
      accent: "#b87333", // نحاسي عصري ودافئ
      bg: "#fcfaf8", // خلفية كريمية فاتحة جداً
      surface: "#ffffff",
      text: "#332119",
      muted: "#a38f85",
      heroOverlay: "rgba(51,33,25,0.6)",
    },
  },

  // 3. التوت الدافئ: إضافة حيوية عصرية (لون التوت) مع البني
  {
    id: "jowdi-berry",
    nameAr: "الجودي التوتي",
    nameEn: "Jowdi Berry Warmth",
    vars: {
      primary: "#5c4033", // بني الشعار
      primaryDark: "#3e2a22",
      accent: "#a52a2a", // أحمر توتي دافئ وعصري (Crimson/Berry)
      bg: "#fffdfc", // خلفية دافئة جداً
      surface: "#ffffff",
      text: "#2d1b15",
      muted: "#9c8c84",
      heroOverlay: "rgba(45,27,21,0.6)",
    },
  },

  // 4. الواحة العصرية: مزج البني مع الأزرق/الأخضر المائل للرمادي لعصرية تامة
  {
    id: "jowdi-oasis",
    nameAr: "واحة الجودي",
    nameEn: "Jowdi Oasis",
    vars: {
      primary: "#5c4033", // بني الشعار
      primaryDark: "#3e2a22",
      accent: "#607d8b", // أزرق رمادي (Slate) عصري وراقي
      bg: "#f4f7f8", // خلفية باردة قليلاً
      surface: "#ffffff",
      text: "#1e2a31", // نص داكن مائل للأزرق
      muted: "#78909c",
      heroOverlay: "rgba(30,42,49,0.6)",
    },
  },

  // 5. الأرض الداكنة (Dark Mode): نسخة عصرية داكنة لعشاق الفخامة
  {
    id: "jowdi-dark-luxe",
    nameAr: "الجودي الفخم الداكن",
    nameEn: "Jowdi Dark Luxe",
    vars: {
      primary: "#b87333", // النحاسي كلون أساسي هنا
      primaryDark: "#8c5626",
      accent: "#ffffff", // الأبيض كلونة
      bg: "#1a1614", // خلفية بنية داكنة جداً (قريبة من الأسود)
      surface: "#26211e", // أسطح داكنة
      text: "#f5f1ec", // نص فاتح كريمي
      muted: "#a39a90",
      heroOverlay: "rgba(0,0,0,0.7)",
    },
  },
];

export function getTheme(id: string | null | undefined): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}