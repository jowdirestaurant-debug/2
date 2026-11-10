module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "comparePassword",
    ()=>comparePassword,
    "createToken",
    ()=>createToken,
    "generateCode",
    ()=>generateCode,
    "getSessionStaff",
    ()=>getSessionStaff,
    "getSessionUser",
    ()=>getSessionUser,
    "hashPassword",
    ()=>hashPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const SECRET = process.env.AUTH_SECRET || "jowdi-restaurant-secret-change-me";
function sign(data) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHmac"])("sha256", SECRET).update(data).digest("base64url");
}
function createToken(payload) {
    const full = {
        ...payload,
        exp: Date.now() + 1000 * 60 * 60 * 24 * 30
    };
    const body = Buffer.from(JSON.stringify(full)).toString("base64url");
    return `${body}.${sign(body)}`;
}
function verifyToken(token) {
    if (!token) return null;
    const [body, sig] = token.split(".");
    if (!body || !sig) return null;
    if (sign(body) !== sig) return null;
    try {
        const payload = JSON.parse(Buffer.from(body, "base64url").toString());
        if (payload.exp < Date.now()) return null;
        return payload;
    } catch  {
        return null;
    }
}
async function hashPassword(pw) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(pw, 10);
}
async function comparePassword(pw, hash) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(pw, hash);
}
async function getSessionUser() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const payload = verifyToken(store.get("jowdi_session")?.value);
    if (!payload || payload.kind !== "user") return null;
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].id, payload.id)).limit(1);
    return rows[0] ?? null;
}
async function getSessionStaff() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const payload = verifyToken(store.get("jowdi_admin")?.value);
    if (!payload || payload.kind !== "staff") return null;
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"].id, payload.id)).limit(1);
    const member = rows[0];
    if (!member || !member.isActive) return null;
    return member;
}
function generateCode(length = 6) {
    let code = "";
    for(let i = 0; i < length; i++)code += Math.floor(Math.random() * 10).toString();
    return code;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/seed.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ensureSeeded",
    ()=>ensureSeeded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
let seeded = false;
const DEFAULT_SETTINGS = {
    theme: "jowdi-classic",
    hero_image: "/hero.jpg",
    logo_url: "/logo.png",
    delivery_fee_base: "1.500",
    delivery_share_enabled: "1",
    delivery_customer_share_percent: "50",
    benefitpay_api_key: "",
    card_gateway_api_key: "",
    currency: "BHD"
};
const DEFAULT_CONTENT = [
    [
        "hero_title",
        "مطعم الجودي",
        "Jowdi Restaurant"
    ],
    [
        "hero_subtitle",
        "نكهات أصيلة تروي قصة الجودة — مشاوي، أطباق شرقية، وضيافة لا تُنسى",
        "Authentic flavors that tell a story of quality — grills, oriental dishes, and unforgettable hospitality"
    ],
    [
        "about_title",
        "من نحن",
        "About Us"
    ],
    [
        "about_body",
        "في مطعم الجودي نقدم أشهى الأطباق الشرقية والمشاوي المحضرة بأجود المكونات الطازجة يومياً، مع خدمة توصيل سريعة تغطي جميع المحافظات.",
        "At Jowdi Restaurant we serve the finest oriental dishes and grills prepared daily with the freshest ingredients, with fast delivery across all governorates."
    ],
    [
        "footer_text",
        "جميع الحقوق محفوظة © مطعم الجودي",
        "All rights reserved © Jowdi Restaurant"
    ],
    [
        "contact_phone",
        "+973 1700 0000",
        "+973 1700 0000"
    ],
    [
        "contact_address",
        "مملكة البحرين — المنامة",
        "Kingdom of Bahrain — Manama"
    ],
    [
        "opening_hours",
        "يومياً من 11 صباحاً حتى 12 منتصف الليل",
        "Daily from 11 AM to 12 Midnight"
    ],
    [
        "menu_title",
        "قائمة الطعام",
        "Our Menu"
    ],
    [
        "menu_subtitle",
        "اختر من تشكيلتنا الواسعة من الأطباق الشهية",
        "Choose from our wide selection of delicious dishes"
    ]
];
const GEO = [
    {
        ar: "محافظة العاصمة",
        en: "Capital Governorate",
        regions: [
            [
                "المنامة",
                "Manama"
            ],
            [
                "الجفير",
                "Juffair"
            ],
            [
                "العدلية",
                "Adliya"
            ],
            [
                "السيف",
                "Seef"
            ],
            [
                "السنابس",
                "Sanabis"
            ],
            [
                "الزنج",
                "Zinj"
            ]
        ]
    },
    {
        ar: "محافظة المحرق",
        en: "Muharraq Governorate",
        regions: [
            [
                "المحرق",
                "Muharraq"
            ],
            [
                "البسيتين",
                "Busaiteen"
            ],
            [
                "الحد",
                "Al Hidd"
            ],
            [
                "عراد",
                "Arad"
            ],
            [
                "قلالي",
                "Galali"
            ],
            [
                "أمواج",
                "Amwaj"
            ]
        ]
    },
    {
        ar: "المحافظة الشمالية",
        en: "Northern Governorate",
        regions: [
            [
                "مدينة حمد",
                "Hamad Town"
            ],
            [
                "سار",
                "Saar"
            ],
            [
                "البديع",
                "Budaiya"
            ],
            [
                "الجنبية",
                "Janabiya"
            ],
            [
                "باربار",
                "Barbar"
            ],
            [
                "بوري",
                "Buri"
            ]
        ]
    },
    {
        ar: "المحافظة الجنوبية",
        en: "Southern Governorate",
        regions: [
            [
                "مدينة عيسى",
                "Isa Town"
            ],
            [
                "الرفاع الشرقي",
                "East Riffa"
            ],
            [
                "الرفاع الغربي",
                "West Riffa"
            ],
            [
                "عوالي",
                "Awali"
            ],
            [
                "الزلاق",
                "Zallaq"
            ],
            [
                "درة البحرين",
                "Durrat Al Bahrain"
            ]
        ]
    }
];
const MENU = [
    {
        ar: "المشاوي",
        en: "Grills",
        items: [
            {
                ar: "مشاوي مشكلة",
                en: "Mixed Grill",
                dar: "تشكيلة من الكباب والتكة والشيش طاووق مع الخبز والصلصات",
                den: "A selection of kebab, tikka and shish tawook with bread and sauces",
                price: "6.500",
                sizes: [
                    [
                        "نصف",
                        "Half",
                        "6.500"
                    ],
                    [
                        "كامل",
                        "Full",
                        "11.000"
                    ],
                    [
                        "عائلي",
                        "Family",
                        "18.000"
                    ]
                ]
            },
            {
                ar: "كباب لحم",
                en: "Meat Kebab",
                dar: "كباب لحم طازج مشوي على الفحم",
                den: "Fresh charcoal-grilled meat kebab",
                price: "3.500",
                sizes: [
                    [
                        "صغير",
                        "Small",
                        "3.500"
                    ],
                    [
                        "وسط",
                        "Medium",
                        "4.800"
                    ],
                    [
                        "كبير",
                        "Large",
                        "6.200"
                    ]
                ]
            },
            {
                ar: "شيش طاووق",
                en: "Shish Tawook",
                dar: "قطع دجاج متبلة ومشوية مع الثوم",
                den: "Marinated grilled chicken cubes with garlic sauce",
                price: "3.200",
                sizes: [
                    [
                        "صغير",
                        "Small",
                        "3.200"
                    ],
                    [
                        "وسط",
                        "Medium",
                        "4.400"
                    ],
                    [
                        "كبير",
                        "Large",
                        "5.800"
                    ]
                ]
            },
            {
                ar: "ريش غنم",
                en: "Lamb Chops",
                dar: "ريش غنم طرية مشوية بالتتبيلة الخاصة",
                den: "Tender lamb chops grilled with our special marinade",
                price: "7.500"
            }
        ]
    },
    {
        ar: "الأطباق الرئيسية",
        en: "Main Dishes",
        items: [
            {
                ar: "مجبوس دجاج",
                en: "Chicken Machboos",
                dar: "أرز بهارات بحرينية مع دجاج محمر",
                den: "Bahraini spiced rice with roasted chicken",
                price: "2.800",
                sizes: [
                    [
                        "وسط",
                        "Medium",
                        "2.800"
                    ],
                    [
                        "كبير",
                        "Large",
                        "3.900"
                    ],
                    [
                        "عائلي",
                        "Family",
                        "9.500"
                    ]
                ]
            },
            {
                ar: "مجبوس لحم",
                en: "Meat Machboos",
                dar: "أرز بهارات بحرينية مع لحم غنم",
                den: "Bahraini spiced rice with lamb",
                price: "3.800",
                sizes: [
                    [
                        "وسط",
                        "Medium",
                        "3.800"
                    ],
                    [
                        "كبير",
                        "Large",
                        "5.200"
                    ],
                    [
                        "عائلي",
                        "Family",
                        "12.000"
                    ]
                ]
            },
            {
                ar: "برياني روبيان",
                en: "Shrimp Biryani",
                dar: "برياني بالروبيان الطازج والبهارات الهندية",
                den: "Biryani with fresh shrimp and Indian spices",
                price: "3.500"
            }
        ]
    },
    {
        ar: "المقبلات",
        en: "Appetizers",
        items: [
            {
                ar: "حمص",
                en: "Hummus",
                dar: "حمص بالطحينة وزيت الزيتون",
                den: "Hummus with tahini and olive oil",
                price: "1.200"
            },
            {
                ar: "متبل",
                en: "Mutabbal",
                dar: "متبل باذنجان مشوي بالطحينة",
                den: "Roasted eggplant dip with tahini",
                price: "1.200"
            },
            {
                ar: "سلطة فتوش",
                en: "Fattoush Salad",
                dar: "خضروات طازجة مع الخبز المحمص ودبس الرمان",
                den: "Fresh vegetables with toasted bread and pomegranate molasses",
                price: "1.500"
            },
            {
                ar: "كبة مقلية",
                en: "Fried Kibbeh",
                dar: "كبة لحم مقلية (4 قطع)",
                den: "Fried meat kibbeh (4 pieces)",
                price: "1.800"
            }
        ]
    },
    {
        ar: "المشروبات والحلويات",
        en: "Drinks & Desserts",
        items: [
            {
                ar: "عصير ليمون بالنعناع",
                en: "Lemon Mint Juice",
                dar: "عصير ليمون طازج مع النعناع",
                den: "Fresh lemon juice with mint",
                price: "0.900"
            },
            {
                ar: "كنافة",
                en: "Kunafa",
                dar: "كنافة بالجبن مع القطر",
                den: "Cheese kunafa with syrup",
                price: "1.600",
                sizes: [
                    [
                        "قطعة",
                        "Slice",
                        "1.600"
                    ],
                    [
                        "صينية",
                        "Tray",
                        "8.000"
                    ]
                ]
            },
            {
                ar: "أم علي",
                en: "Umm Ali",
                dar: "حلى أم علي الساخن بالمكسرات",
                den: "Hot Umm Ali dessert with nuts",
                price: "1.400"
            }
        ]
    }
];
async function ensureSeeded() {
    if (seeded) return;
    try {
        const admins = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"]).limit(1);
        if (admins.length === 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"]).values({
                username: "moosameftah",
                fullName: "Super Administrator",
                email: "moosameftah@jowdi.com",
                passwordHash: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])("Vsml3142@"),
                role: "superadmin",
                permissions: [
                    "*"
                ],
                isActive: true
            });
        }
        for (const [key, value] of Object.entries(DEFAULT_SETTINGS)){
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"]).values({
                key,
                value
            }).onConflictDoNothing();
        }
        for (const [key, valueAr, valueEn] of DEFAULT_CONTENT){
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContent"]).values({
                key,
                valueAr,
                valueEn
            }).onConflictDoNothing();
        }
        const govs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["governorates"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["governorates"]).limit(1);
        if (govs.length === 0) {
            for (const g of GEO){
                const [gov] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["governorates"]).values({
                    nameAr: g.ar,
                    nameEn: g.en
                }).returning();
                for (const [ar, en] of g.regions){
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regions"]).values({
                        governorateId: gov.id,
                        nameAr: ar,
                        nameEn: en
                    });
                }
            }
        }
        const cats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]).limit(1);
        if (cats.length === 0) {
            let catOrder = 0;
            for (const c of MENU){
                const [cat] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]).values({
                    nameAr: c.ar,
                    nameEn: c.en,
                    sortOrder: catOrder++
                }).returning();
                let itemOrder = 0;
                for (const it of c.items){
                    const [item] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menuItems"]).values({
                        categoryId: cat.id,
                        nameAr: it.ar,
                        nameEn: it.en,
                        descriptionAr: it.dar,
                        descriptionEn: it.den,
                        basePrice: it.price,
                        sortOrder: itemOrder++
                    }).returning();
                    if (it.sizes) {
                        let sOrder = 0;
                        for (const [sar, sen, sprice] of it.sizes){
                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["itemSizes"]).values({
                                itemId: item.id,
                                nameAr: sar,
                                nameEn: sen,
                                price: sprice,
                                sortOrder: sOrder++
                            });
                        }
                    }
                }
            }
        }
        // Ensure super admin password is correct even if row pre-exists
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"].username, "moosameftah")).limit(1);
        if (existing.length === 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staff"]).values({
                username: "moosameftah",
                fullName: "Super Administrator",
                passwordHash: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])("Vsml3142@"),
                role: "superadmin",
                permissions: [
                    "*"
                ]
            });
        }
        seeded = true;
    } catch (e) {
        console.error("[seed] failed", e);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/admin/AdminApp.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/admin/AdminApp.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/admin/AdminApp.tsx <module evaluation>", "default");
}),
"[project]/src/components/admin/AdminApp.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/admin/AdminApp.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/admin/AdminApp.tsx", "default");
}),
"[project]/src/components/admin/AdminApp.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/admin/AdminApp.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/admin/AdminApp.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/admin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>AdminPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seed.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/AdminApp.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const dynamic = "force-dynamic";
async function AdminPage() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSeeded"])();
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeLocale"])(store.get("locale")?.value);
    const member = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionStaff"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminApp$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        locale: locale,
        initialStaff: member ? {
            id: member.id,
            username: member.username,
            fullName: member.fullName,
            role: member.role
        } : null
    }, void 0, false, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0q1bx7b._.js.map