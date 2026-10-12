import { db } from "@/db";
import {
  staff,
  siteSettings,
  siteContent,
  governorates,
  regions,
  categories,
  menuItems,
  itemSizes,
} from "@/db/schema";
import { hashPassword } from "./auth";
import { eq } from "drizzle-orm";

let seeded = false;

const DEFAULT_SETTINGS: Record<string, string> = {
  theme: "jowdi-classic",
  hero_image: "/hero.jpg",
  logo_url: "/logo.png",
  delivery_fee_base: "1.500",
  delivery_share_enabled: "1",
  delivery_customer_share_percent: "50",
  benefitpay_api_key: "",
  card_gateway_api_key: "",
  currency: "BHD",
};

const DEFAULT_CONTENT: [string, string, string][] = [
  ["hero_title", "مطعم الجودي", "Jowdi Restaurant"],
  ["hero_subtitle", "نكهات أصيلة تروي قصة الجودة — مشاوي، أطباق شرقية، وضيافة لا تُنسى", "Authentic flavors that tell a story of quality — grills, oriental dishes, and unforgettable hospitality"],
  ["about_title", "من نحن", "About Us"],
  ["about_body", "في مطعم الجودي نقدم أشهى الأطباق الشرقية والمشاوي المحضرة بأجود المكونات الطازجة يومياً، مع خدمة توصيل سريعة تغطي جميع المحافظات.", "At Jowdi Restaurant we serve the finest oriental dishes and grills prepared daily with the freshest ingredients, with fast delivery across all governorates."],
  ["footer_text", "جميع الحقوق محفوظة © مطعم الجودي", "All rights reserved © Jowdi Restaurant"],
  ["contact_phone", "+973 1700 0000", "+973 1700 0000"],
  ["contact_address", "مملكة البحرين — المنامة", "Kingdom of Bahrain — Manama"],
  ["opening_hours", "يومياً من 11 صباحاً حتى 12 منتصف الليل", "Daily from 11 AM to 12 Midnight"],
  ["menu_title", "قائمة الطعام", "Our Menu"],
  ["menu_subtitle", "اختر من تشكيلتنا الواسعة من الأطباق الشهية", "Choose from our wide selection of delicious dishes"],
];

const GEO: { ar: string; en: string; regions: [string, string][] }[] = [
  {
    ar: "محافظة العاصمة", en: "Capital Governorate",
    regions: [["المنامة", "Manama"], ["الجفير", "Juffair"], ["العدلية", "Adliya"], ["السيف", "Seef"], ["السنابس", "Sanabis"], ["الزنج", "Zinj"]],
  },
  {
    ar: "محافظة المحرق", en: "Muharraq Governorate",
    regions: [["المحرق", "Muharraq"], ["البسيتين", "Busaiteen"], ["الحد", "Al Hidd"], ["عراد", "Arad"], ["قلالي", "Galali"], ["أمواج", "Amwaj"]],
  },
  {
    ar: "المحافظة الشمالية", en: "Northern Governorate",
    regions: [["مدينة حمد", "Hamad Town"], ["سار", "Saar"], ["البديع", "Budaiya"], ["الجنبية", "Janabiya"], ["باربار", "Barbar"], ["بوري", "Buri"]],
  },
  {
    ar: "المحافظة الجنوبية", en: "Southern Governorate",
    regions: [["مدينة عيسى", "Isa Town"], ["الرفاع الشرقي", "East Riffa"], ["الرفاع الغربي", "West Riffa"], ["عوالي", "Awali"], ["الزلاق", "Zallaq"], ["درة البحرين", "Durrat Al Bahrain"]],
  },
];

const MENU: {
  ar: string; en: string;
  items: { ar: string; en: string; dar: string; den: string; price: string; sizes?: [string, string, string][] }[];
}[] = [
  {
    ar: "المشاوي", en: "Grills",
    items: [
      { ar: "مشاوي مشكلة", en: "Mixed Grill", dar: "تشكيلة من الكباب والتكة والشيش طاووق مع الخبز والصلصات", den: "A selection of kebab, tikka and shish tawook with bread and sauces", price: "6.500", sizes: [["نصف", "Half", "6.500"], ["كامل", "Full", "11.000"], ["عائلي", "Family", "18.000"]] },
      { ar: "كباب لحم", en: "Meat Kebab", dar: "كباب لحم طازج مشوي على الفحم", den: "Fresh charcoal-grilled meat kebab", price: "3.500", sizes: [["صغير", "Small", "3.500"], ["وسط", "Medium", "4.800"], ["كبير", "Large", "6.200"]] },
      { ar: "شيش طاووق", en: "Shish Tawook", dar: "قطع دجاج متبلة ومشوية مع الثوم", den: "Marinated grilled chicken cubes with garlic sauce", price: "3.200", sizes: [["صغير", "Small", "3.200"], ["وسط", "Medium", "4.400"], ["كبير", "Large", "5.800"]] },
      { ar: "ريش غنم", en: "Lamb Chops", dar: "ريش غنم طرية مشوية بالتتبيلة الخاصة", den: "Tender lamb chops grilled with our special marinade", price: "7.500" },
    ],
  },
  {
    ar: "الأطباق الرئيسية", en: "Main Dishes",
    items: [
      { ar: "مجبوس دجاج", en: "Chicken Machboos", dar: "أرز بهارات بحرينية مع دجاج محمر", den: "Bahraini spiced rice with roasted chicken", price: "2.800", sizes: [["وسط", "Medium", "2.800"], ["كبير", "Large", "3.900"], ["عائلي", "Family", "9.500"]] },
      { ar: "مجبوس لحم", en: "Meat Machboos", dar: "أرز بهارات بحرينية مع لحم غنم", den: "Bahraini spiced rice with lamb", price: "3.800", sizes: [["وسط", "Medium", "3.800"], ["كبير", "Large", "5.200"], ["عائلي", "Family", "12.000"]] },
      { ar: "برياني روبيان", en: "Shrimp Biryani", dar: "برياني بالروبيان الطازج والبهارات الهندية", den: "Biryani with fresh shrimp and Indian spices", price: "3.500" },
    ],
  },
  {
    ar: "المقبلات", en: "Appetizers",
    items: [
      { ar: "حمص", en: "Hummus", dar: "حمص بالطحينة وزيت الزيتون", den: "Hummus with tahini and olive oil", price: "1.200" },
      { ar: "متبل", en: "Mutabbal", dar: "متبل باذنجان مشوي بالطحينة", den: "Roasted eggplant dip with tahini", price: "1.200" },
      { ar: "سلطة فتوش", en: "Fattoush Salad", dar: "خضروات طازجة مع الخبز المحمص ودبس الرمان", den: "Fresh vegetables with toasted bread and pomegranate molasses", price: "1.500" },
      { ar: "كبة مقلية", en: "Fried Kibbeh", dar: "كبة لحم مقلية (4 قطع)", den: "Fried meat kibbeh (4 pieces)", price: "1.800" },
    ],
  },
  {
    ar: "المشروبات والحلويات", en: "Drinks & Desserts",
    items: [
      { ar: "عصير ليمون بالنعناع", en: "Lemon Mint Juice", dar: "عصير ليمون طازج مع النعناع", den: "Fresh lemon juice with mint", price: "0.900" },
      { ar: "كنافة", en: "Kunafa", dar: "كنافة بالجبن مع القطر", den: "Cheese kunafa with syrup", price: "1.600", sizes: [["قطعة", "Slice", "1.600"], ["صينية", "Tray", "8.000"]] },
      { ar: "أم علي", en: "Umm Ali", dar: "حلى أم علي الساخن بالمكسرات", den: "Hot Umm Ali dessert with nuts", price: "1.400" },
    ],
  },
];

export async function ensureSeeded() {
  if (seeded) return;
  try {
    const admins = await db.select({ id: staff.id }).from(staff).limit(1);
    if (admins.length === 0) {
      await db.insert(staff).values({
        username: "moosameftah",
        fullName: "Super Administrator",
        email: "moosameftah@jowdi.com",
        passwordHash: await hashPassword("Vsml3142@"),
        role: "superadmin",
        permissions: ["*"],
        isActive: true,
      });
    }

    for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
      await db.insert(siteSettings).values({ key, value }).onConflictDoNothing();
    }
    for (const [key, valueAr, valueEn] of DEFAULT_CONTENT) {
      await db.insert(siteContent).values({ key, valueAr, valueEn }).onConflictDoNothing();
    }

    const govs = await db.select({ id: governorates.id }).from(governorates).limit(1);
    if (govs.length === 0) {
      for (const g of GEO) {
        const [gov] = await db
          .insert(governorates)
          .values({ nameAr: g.ar, nameEn: g.en })
          .returning();
        for (const [ar, en] of g.regions) {
          await db.insert(regions).values({ governorateId: gov.id, nameAr: ar, nameEn: en });
        }
      }
    }

    const cats = await db.select({ id: categories.id }).from(categories).limit(1);
    if (cats.length === 0) {
      let catOrder = 0;
      for (const c of MENU) {
        const [cat] = await db
          .insert(categories)
          .values({ nameAr: c.ar, nameEn: c.en, sortOrder: catOrder++ })
          .returning();
        let itemOrder = 0;
        for (const it of c.items) {
          const [item] = await db
            .insert(menuItems)
            .values({
              categoryId: cat.id,
              nameAr: it.ar,
              nameEn: it.en,
              descriptionAr: it.dar,
              descriptionEn: it.den,
              basePrice: it.price,
              sortOrder: itemOrder++,
            })
            .returning();
          if (it.sizes) {
            let sOrder = 0;
            for (const [sar, sen, sprice] of it.sizes) {
              await db.insert(itemSizes).values({
                itemId: item.id,
                nameAr: sar,
                nameEn: sen,
                price: sprice,
                sortOrder: sOrder++,
              });
            }
          }
        }
      }
    }

    // Ensure super admin password is correct even if row pre-exists
    const existing = await db.select().from(staff).where(eq(staff.username, "moosameftah")).limit(1);
    if (existing.length === 0) {
      await db.insert(staff).values({
        username: "moosameftah",
        fullName: "Super Administrator",
        passwordHash: await hashPassword("Vsml3142@"),
        role: "superadmin",
        permissions: ["*"],
      });
    }

    seeded = true;
  } catch (e) {
    console.error("[seed] failed", e);
  }
}
