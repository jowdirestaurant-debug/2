(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dictionaries",
    ()=>dictionaries,
    "getDict",
    ()=>getDict,
    "normalizeLocale",
    ()=>normalizeLocale
]);
const dictionaries = {
    ar: {
        brand: "مطعم الجودي",
        tagline: "نكهات أصيلة تروي قصة الجودة",
        heroCta: "اطلب الآن",
        menu: "قائمة الطعام",
        home: "الرئيسية",
        about: "من نحن",
        contact: "تواصل معنا",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        logout: "تسجيل الخروج",
        myOrders: "طلباتي",
        cart: "سلة الطلبات",
        emptyCart: "سلتك فارغة",
        addToCart: "أضف إلى السلة",
        unavailable: "غير متاح",
        available: "متاح",
        checkout: "إتمام الطلب",
        subtotal: "المجموع الفرعي",
        discount: "الخصم",
        deliveryFee: "رسوم التوصيل",
        restaurantClosed: "عذراً، المطعم مغلق حالياً. أوقات استقبال الطلبات: من 11:00 صباحاً إلى 3:00 عصراً ومن 6:00 مساءً حتى 11:00 مساءً",
        total: "الإجمالي",
        orderType: "نوع الطلب",
        dineIn: "محلي",
        takeaway: "استلام",
        delivery: "توصيل",
        paymentMethod: "طريقة الدفع",
        cash: "نقدي / كاش",
        benefitpay: "بنفت بي",
        card: "بطاقة ائتمان",
        onlineNotConfigured: "الدفع الإلكتروني سيتم تفعيله قريباً",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        confirmEmail: "تأكيد البريد الإلكتروني",
        password: "كلمة المرور",
        phone: "رقم الهاتف",
        governorate: "المحافظة",
        region: "المنطقة",
        addressDetails: "تفاصيل العنوان (المنزل، الشارع، المجمع)",
        selectGovernorate: "اختر المحافظة",
        selectRegion: "اختر المنطقة",
        notes: "ملاحظات إضافية",
        promoCode: "كود الخصم",
        apply: "تطبيق",
        promoApplied: "تم تطبيق كود الخصم",
        promoInvalid: "كود الخصم غير صالح أو منتهي",
        placeOrder: "تأكيد الطلب",
        guestCheckout: "الطلب كزائر",
        orderSuccess: "تم استلام طلبك بنجاح!",
        orderNumber: "رقم الطلب",
        forgotPassword: "نسيت كلمة المرور؟",
        resetPassword: "إعادة تعيين كلمة المرور",
        sendCode: "إرسال رمز التحقق",
        resetCode: "رمز الاستعادة",
        newPassword: "كلمة المرور الجديدة",
        codeSent: "تم إرسال الرمز إلى بريدك الإلكتروني",
        emailsMismatch: "البريد الإلكتروني غير متطابق",
        loginFailed: "بيانات الدخول غير صحيحة",
        registered: "تم إنشاء الحساب بنجاح",
        banned: "عذراً، لا يمكنك إتمام الطلب. يرجى التواصل مع المطعم",
        requiredFields: "يرجى تعبئة جميع الحقول المطلوبة",
        quantity: "الكمية",
        size: "الحجم",
        close: "إغلاق",
        save: "حفظ",
        cancel: "إلغاء",
        edit: "تعديل",
        delete: "حذف",
        add: "إضافة",
        search: "بحث",
        all: "الكل",
        currency: "د.ب",
        language: "English",
        welcome: "مرحباً",
        continueShopping: "متابعة التسوق",
        orderStatus: {
            pending: "قيد الانتظار",
            confirmed: "مؤكد",
            preparing: "قيد التحضير",
            ready: "جاهز",
            out_for_delivery: "في الطريق",
            completed: "مكتمل",
            cancelled: "ملغي"
        }
    },
    en: {
        brand: "Jowdi Restaurant",
        tagline: "Authentic flavors that tell a story of quality",
        heroCta: "Order Now",
        menu: "Menu",
        home: "Home",
        about: "About Us",
        contact: "Contact Us",
        login: "Login",
        register: "Create Account",
        logout: "Logout",
        myOrders: "My Orders",
        cart: "Cart",
        emptyCart: "Your cart is empty",
        addToCart: "Add to Cart",
        unavailable: "Unavailable",
        available: "Available",
        checkout: "Checkout",
        subtotal: "Subtotal",
        discount: "Discount",
        deliveryFee: "Delivery Fee",
        restaurantClosed: "Sorry, the restaurant is currently closed. Ordering hours: 11:00 AM – 3:00 PM & 6:00 PM – 11:00 PM",
        total: "Total",
        orderType: "Order Type",
        dineIn: "Dine-in",
        takeaway: "Takeaway",
        delivery: "Delivery",
        paymentMethod: "Payment Method",
        cash: "Cash",
        benefitpay: "BenefitPay",
        card: "Credit Card",
        onlineNotConfigured: "Online payment will be activated soon",
        fullName: "Full Name",
        email: "Email",
        confirmEmail: "Confirm Email",
        password: "Password",
        phone: "Phone Number",
        governorate: "Governorate",
        region: "Region / Area",
        addressDetails: "Address details (house, road, block)",
        selectGovernorate: "Select governorate",
        selectRegion: "Select region",
        notes: "Additional notes",
        promoCode: "Promo Code",
        apply: "Apply",
        promoApplied: "Promo code applied",
        promoInvalid: "Promo code is invalid or expired",
        placeOrder: "Place Order",
        guestCheckout: "Guest Checkout",
        orderSuccess: "Your order has been received!",
        orderNumber: "Order Number",
        forgotPassword: "Forgot password?",
        resetPassword: "Reset Password",
        sendCode: "Send verification code",
        resetCode: "Recovery code",
        newPassword: "New password",
        codeSent: "A code was sent to your email",
        emailsMismatch: "Emails do not match",
        loginFailed: "Invalid credentials",
        registered: "Account created successfully",
        banned: "Sorry, you cannot place an order. Please contact the restaurant",
        requiredFields: "Please fill in all required fields",
        quantity: "Quantity",
        size: "Size",
        close: "Close",
        save: "Save",
        cancel: "Cancel",
        edit: "Edit",
        delete: "Delete",
        add: "Add",
        search: "Search",
        all: "All",
        currency: "BHD",
        language: "العربية",
        welcome: "Welcome",
        continueShopping: "Continue Shopping",
        orderStatus: {
            pending: "Pending",
            confirmed: "Confirmed",
            preparing: "Preparing",
            ready: "Ready",
            out_for_delivery: "Out for delivery",
            completed: "Completed",
            cancelled: "Cancelled"
        }
    }
};
function getDict(locale) {
    return dictionaries[locale] ?? dictionaries.ar;
}
function normalizeLocale(value) {
    return value === "en" ? "en" : "ar";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/ResourceManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourceManager,
    "readFileAsDataUrl",
    ()=>readFileAsDataUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function readFileAsDataUrl(file) {
    return new Promise((resolve, reject)=>{
        if (file.size > 2 * 1024 * 1024) {
            reject(new Error("too_large"));
            return;
        }
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
function toLocalInput(value) {
    if (!value) return "";
    const d = new Date(value);
    if (isNaN(d.getTime())) return "";
    const pad = (n)=>String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function ResourceManager({ resource, titleAr, titleEn, fields, locale, refreshSignal, onChanged }) {
    _s();
    const ar = locale === "ar";
    const lbl = (a, e)=>ar ? a : e;
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResourceManager.useCallback[load]": async ()=>{
            const res = await fetch(`/api/admin/${resource}`);
            if (res.ok) {
                const d = await res.json();
                setRows(d.data ?? []);
            }
        }
    }["ResourceManager.useCallback[load]"], [
        resource
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourceManager.useEffect": ()=>{
            load();
        }
    }["ResourceManager.useEffect"], [
        load,
        refreshSignal
    ]);
    const openNew = ()=>{
        const init = {};
        for (const f of fields){
            if (f.type === "checkbox") init[f.key] = true;
            else init[f.key] = "";
        }
        setForm(init);
        setEditing({
            __new: true
        });
        setError("");
    };
    const openEdit = (row)=>{
        const init = {
            id: row.id
        };
        for (const f of fields){
            if (f.type === "datetime") init[f.key] = toLocalInput(row[f.key]);
            else if (f.type === "password") init[f.key] = "";
            else init[f.key] = row[f.key] ?? (f.type === "checkbox" ? false : "");
        }
        setForm(init);
        setEditing(row);
        setError("");
    };
    const save = async ()=>{
        setBusy(true);
        setError("");
        try {
            const payload = {
                ...form
            };
            for (const f of fields){
                if (f.type === "datetime" && payload[f.key]) payload[f.key] = new Date(payload[f.key]).toISOString();
                if (f.type === "number" && payload[f.key] !== "") payload[f.key] = Number(payload[f.key]);
            }
            const isNew = editing?.__new;
            const res = await fetch(`/api/admin/${resource}`, {
                method: isNew ? "POST" : "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                setError(lbl("فشل الحفظ — تحقق من الحقول", "Save failed — check the fields"));
                return;
            }
            setEditing(null);
            await load();
            onChanged?.();
        } finally{
            setBusy(false);
        }
    };
    const remove = async (row)=>{
        if (!confirm(lbl("هل أنت متأكد من الحذف؟", "Are you sure you want to delete?"))) return;
        await fetch(`/api/admin/${resource}?id=${row.id}`, {
            method: "DELETE"
        });
        await load();
        onChanged?.();
    };
    const tableFields = fields.filter((f)=>f.table !== false && f.type !== "password" && f.type !== "textarea" && f.type !== "image");
    const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-extrabold text-lg text-primary-c",
                        children: lbl(titleAr, titleEn)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openNew,
                        className: "btn-accent px-4 py-2 rounded-lg text-sm font-bold",
                        children: [
                            "+ ",
                            lbl("إضافة", "Add")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ResourceManager.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-black/10 text-muted-c text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-start",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    tableFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-start px-2",
                                            children: lbl(f.ar, f.en)
                                        }, f.key, false, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-end",
                                        children: lbl("إجراءات", "Actions")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-black/5 hover:bg-black/[0.02]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2",
                                                children: row.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            tableFields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2 px-2",
                                                    children: f.type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold px-2 py-0.5 rounded-full ${row[f.key] ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`,
                                                        children: row[f.key] ? lbl("نعم", "Yes") : lbl("لا", "No")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this) : f.type === "select" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: f.options?.find((o)=>String(o.value) === String(row[f.key]))?.label ?? row[f.key]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 23
                                                    }, this) : f.type === "datetime" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        dir: "ltr",
                                                        children: row[f.key] ? new Date(row[f.key]).toLocaleString("en-GB") : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "line-clamp-1 max-w-[220px]",
                                                        children: String(row[f.key] ?? "—")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, this)
                                                }, f.key, false, {
                                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 text-end whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openEdit(row),
                                                        className: "text-blue-600 hover:underline text-xs font-bold px-2",
                                                        children: lbl("تعديل", "Edit")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>remove(row),
                                                        className: "text-red-500 hover:underline text-xs font-bold px-2",
                                                        children: lbl("حذف", "Delete")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)),
                                rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: tableFields.length + 2,
                                        className: "py-8 text-center text-muted-c",
                                        children: lbl("لا توجد بيانات", "No data")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ResourceManager.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
                onClick: ()=>setEditing(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card w-full max-w-lg max-h-[85vh] overflow-y-auto p-6",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-extrabold text-lg mb-4 text-primary-c",
                            children: [
                                editing.__new ? lbl("إضافة جديد", "Add new") : lbl("تعديل", "Edit"),
                                " — ",
                                lbl(titleAr, titleEn)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-c block mb-1",
                                            children: [
                                                lbl(f.ar, f.en),
                                                " ",
                                                f.required && "*"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this),
                                        f.type === "checkbox" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setForm((p)=>({
                                                        ...p,
                                                        [f.key]: !p[f.key]
                                                    })),
                                            className: `px-4 py-1.5 rounded-full text-xs font-bold ${form[f.key] ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`,
                                            children: form[f.key] ? lbl("مفعل", "Enabled") : lbl("معطل", "Disabled")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this) : f.type === "select" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form[f.key] ?? "",
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        [f.key]: e.target.value
                                                    })),
                                            className: input,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 23
                                                }, this),
                                                f.options?.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: o.value,
                                                        children: o.label
                                                    }, o.value, false, {
                                                        fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 205,
                                            columnNumber: 21
                                        }, this) : f.type === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: form[f.key] ?? "",
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        [f.key]: e.target.value
                                                    })),
                                            className: input,
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 210,
                                            columnNumber: 21
                                        }, this) : f.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                form[f.key] && // eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: form[f.key],
                                                    alt: "",
                                                    className: "h-14 w-14 rounded-lg object-cover border"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: async (e)=>{
                                                        const file = e.target.files?.[0];
                                                        if (!file) return;
                                                        try {
                                                            const url = await readFileAsDataUrl(file);
                                                            setForm((p)=>({
                                                                    ...p,
                                                                    [f.key]: url
                                                                }));
                                                        } catch  {
                                                            setError(lbl("الصورة كبيرة جداً (الحد 2MB)", "Image too large (max 2MB)"));
                                                        }
                                                    },
                                                    className: "text-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this),
                                                form[f.key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setForm((p)=>({
                                                                ...p,
                                                                [f.key]: ""
                                                            })),
                                                    className: "text-red-500 text-xs font-bold",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 212,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: f.type === "number" ? "number" : f.type === "datetime" ? "datetime-local" : f.type === "password" ? "password" : "text",
                                            step: f.type === "number" ? "any" : undefined,
                                            value: form[f.key] ?? "",
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        [f.key]: e.target.value
                                                    })),
                                            className: input,
                                            dir: f.type === "number" || f.type === "datetime" || f.type === "password" ? "ltr" : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                            lineNumber: 237,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, f.key, true, {
                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-sm font-bold text-red-500",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                            lineNumber: 249,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: save,
                                    disabled: busy,
                                    className: "btn-primary flex-1 py-2.5 rounded-lg font-bold disabled:opacity-50",
                                    children: lbl("حفظ", "Save")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditing(null),
                                    className: "flex-1 py-2.5 rounded-lg font-bold bg-black/5",
                                    children: lbl("إلغاء", "Cancel")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ResourceManager.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ResourceManager.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ResourceManager.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ResourceManager.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s(ResourceManager, "EFTywPz6+1wMd1WjCAPc6ptuYfo=");
_c = ResourceManager;
var _c;
__turbopack_context__.k.register(_c, "ResourceManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/MenuManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/ResourceManager.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MenuManager({ locale, role = "superadmin" }) {
    _s();
    const ar = locale === "ar";
    const lbl = (a, e)=>ar ? a : e;
    const isStaff = role === "staff";
    const [cats, setCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sizes, setSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [catFilter, setCatFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [editItem, setEditItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sizeItem, setSizeItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sizeForm, setSizeForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [catSignal, setCatSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MenuManager.useCallback[load]": async ()=>{
            const [c, i, s] = await Promise.all([
                fetch("/api/admin/categories").then({
                    "MenuManager.useCallback[load]": (r)=>r.json()
                }["MenuManager.useCallback[load]"]),
                fetch("/api/admin/items").then({
                    "MenuManager.useCallback[load]": (r)=>r.json()
                }["MenuManager.useCallback[load]"]),
                fetch("/api/admin/sizes").then({
                    "MenuManager.useCallback[load]": (r)=>r.json()
                }["MenuManager.useCallback[load]"])
            ]);
            setCats(c.data ?? []);
            setItems(i.data ?? []);
            setSizes(s.data ?? []);
        }
    }["MenuManager.useCallback[load]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuManager.useEffect": ()=>{
            load();
        }
    }["MenuManager.useEffect"], [
        load,
        catSignal
    ]);
    const toggleAvailability = async (item)=>{
        await fetch("/api/admin/items", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: item.id,
                isAvailable: !item.isAvailable
            })
        });
        load();
    };
    const openItem = (item)=>{
        if (isStaff) return; // منع الموظف من التعديل الكامل
        setError("");
        if (item) {
            setForm({
                ...item
            });
            setEditItem(item);
        } else {
            setForm({
                categoryId: cats[0]?.id ?? "",
                nameAr: "",
                nameEn: "",
                descriptionAr: "",
                descriptionEn: "",
                basePrice: "",
                discountPercent: "0",
                imageUrl: "",
                isAvailable: true,
                sortOrder: 0
            });
            setEditItem({
                __new: true
            });
        }
    };
    const saveItem = async ()=>{
        if (isStaff) return;
        setBusy(true);
        try {
            const res = await fetch("/api/admin/items", {
                method: editItem?.__new ? "POST" : "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            if (!res.ok) {
                setError(lbl("فشل الحفظ", "Save failed"));
                return;
            }
            setEditItem(null);
            load();
        } finally{
            setBusy(false);
        }
    };
    const deleteItem = async (item)=>{
        if (isStaff) return;
        if (!confirm(lbl("حذف هذا الطبق نهائياً؟", "Delete this dish permanently?"))) return;
        await fetch(`/api/admin/items?id=${item.id}`, {
            method: "DELETE"
        });
        load();
    };
    const saveSize = async ()=>{
        if (!sizeForm || isStaff) return;
        const res = await fetch("/api/admin/sizes", {
            method: sizeForm.__new ? "POST" : "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...sizeForm,
                itemId: sizeItem?.id
            })
        });
        if (res.ok) {
            setSizeForm(null);
            load();
        }
    };
    const deleteSize = async (s)=>{
        if (isStaff) return;
        if (!confirm(lbl("حذف هذا الحجم؟", "Delete this size?"))) return;
        await fetch(`/api/admin/sizes?id=${s.id}`, {
            method: "DELETE"
        });
        load();
    };
    const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";
    const filtered = catFilter === 0 ? items : items.filter((i)=>i.categoryId === catFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            !isStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                resource: "categories",
                titleAr: "أقسام القائمة",
                titleEn: "Menu Categories",
                locale: locale,
                onChanged: ()=>setCatSignal((s)=>s + 1),
                fields: [
                    {
                        key: "nameAr",
                        ar: "الاسم (عربي)",
                        en: "Name (AR)",
                        type: "text",
                        required: true
                    },
                    {
                        key: "nameEn",
                        ar: "الاسم (إنجليزي)",
                        en: "Name (EN)",
                        type: "text",
                        required: true
                    },
                    {
                        key: "parentId",
                        ar: "القسم الرئيسي",
                        en: "Parent category",
                        type: "select",
                        options: cats.map((c)=>({
                                value: c.id,
                                label: ar ? c.nameAr : c.nameEn
                            })),
                        table: false
                    },
                    {
                        key: "sortOrder",
                        ar: "الترتيب",
                        en: "Sort order",
                        type: "number"
                    },
                    {
                        key: "isActive",
                        ar: "مفعل",
                        en: "Active",
                        type: "checkbox"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MenuManager.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4 flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-extrabold text-lg text-primary-c",
                                children: isStaff ? lbl("توفر الأطباق والأصناف", "Dishes Availability") : lbl("الأطباق والأصناف", "Dishes & Items")
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: catFilter,
                                        onChange: (e)=>setCatFilter(Number(e.target.value)),
                                        className: "border border-black/15 rounded-lg px-3 py-2 text-sm bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 0,
                                                children: lbl("كل الأقسام", "All categories")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            cats.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.id,
                                                    children: ar ? c.nameAr : c.nameEn
                                                }, c.id, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 32
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    !isStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openItem(null),
                                        className: "btn-accent px-4 py-2 rounded-lg text-sm font-bold",
                                        children: [
                                            "+ ",
                                            lbl("إضافة طبق", "Add dish")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-3",
                        children: filtered.map((item)=>{
                            const itemSizes = sizes.filter((s)=>s.itemId === item.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-xl p-3 flex gap-3 ${item.isAvailable ? "border-black/10" : "border-red-200 bg-red-50/40"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 w-16 rounded-lg bg-black/5 overflow-hidden flex items-center justify-center text-2xl shrink-0",
                                        children: item.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.imageUrl,
                                            alt: "",
                                            className: "h-full w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this) : "🍽️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-sm",
                                                children: ar ? item.nameAr : item.nameEn
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-muted-c",
                                                children: [
                                                    cats.find((c)=>c.id === item.categoryId) ? ar ? cats.find((c)=>c.id === item.categoryId).nameAr : cats.find((c)=>c.id === item.categoryId).nameEn : "—",
                                                    " · ",
                                                    Number(item.basePrice).toFixed(3),
                                                    Number(item.discountPercent) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-600",
                                                        children: [
                                                            " · -",
                                                            Number(item.discountPercent),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 58
                                                    }, this),
                                                    " · ",
                                                    itemSizes.length,
                                                    " ",
                                                    lbl("أحجام", "sizes")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 mt-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleAvailability(item),
                                                        className: `text-xs font-bold px-3 py-1 rounded-full ${item.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`,
                                                        children: item.isAvailable ? lbl("متاح", "Available") : lbl("غير متاح", "Unavailable")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSizeItem(item),
                                                        className: "text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600",
                                                        children: lbl("الأحجام", "Sizes")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    !isStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openItem(item),
                                                                className: "text-xs font-bold px-3 py-1 rounded-full bg-black/5",
                                                                children: lbl("تعديل", "Edit")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>deleteItem(item),
                                                                className: "text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-red-500",
                                                                children: lbl("حذف", "Delete")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/admin/MenuManager.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MenuManager.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/MenuManager.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            !isStaff && editItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
                onClick: ()=>setEditItem(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card w-full max-w-lg max-h-[85vh] overflow-y-auto p-6",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-extrabold text-lg mb-4 text-primary-c",
                            children: editItem.__new ? lbl("إضافة طبق", "Add dish") : lbl("تعديل طبق", "Edit dish")
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-c block mb-1",
                                            children: [
                                                lbl("القسم", "Category"),
                                                " *"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.categoryId ?? "",
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        categoryId: Number(e.target.value)
                                                    })),
                                            className: input,
                                            children: cats.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.id,
                                                    children: ar ? c.nameAr : c.nameEn
                                                }, c.id, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 36
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-muted-c block mb-1",
                                                    children: [
                                                        lbl("الاسم (عربي)", "Name (AR)"),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.nameAr ?? "",
                                                    onChange: (e)=>setForm((p)=>({
                                                                ...p,
                                                                nameAr: e.target.value
                                                            })),
                                                    className: input
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 127
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-muted-c block mb-1",
                                                    children: [
                                                        lbl("الاسم (إنجليزي)", "Name (EN)"),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.nameEn ?? "",
                                                    onChange: (e)=>setForm((p)=>({
                                                                ...p,
                                                                nameEn: e.target.value
                                                            })),
                                                    className: input
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 130
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-c block mb-1",
                                            children: lbl("الوصف (عربي)", "Description (AR)")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 203,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: form.descriptionAr ?? "",
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        descriptionAr: e.target.value
                                                    })),
                                            className: input,
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 203,
                                            columnNumber: 130
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-c block mb-1",
                                            children: lbl("الوصف (إنجليزي)", "Description (EN)")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 204,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: form.descriptionEn ?? "",
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        descriptionEn: e.target.value
                                                    })),
                                            className: input,
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 204,
                                            columnNumber: 133
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-muted-c block mb-1",
                                                    children: [
                                                        lbl("السعر الأساسي", "Base price"),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "any",
                                                    value: form.basePrice ?? "",
                                                    onChange: (e)=>setForm((p)=>({
                                                                ...p,
                                                                basePrice: e.target.value
                                                            })),
                                                    className: input,
                                                    dir: "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 129
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-muted-c block mb-1",
                                                    children: lbl("خصم %", "Discount %")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "any",
                                                    value: form.discountPercent ?? "",
                                                    onChange: (e)=>setForm((p)=>({
                                                                ...p,
                                                                discountPercent: e.target.value
                                                            })),
                                                    className: input,
                                                    dir: "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 119
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-muted-c block mb-1",
                                                    children: lbl("الترتيب", "Sort")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: form.sortOrder ?? 0,
                                                    onChange: (e)=>setForm((p)=>({
                                                                ...p,
                                                                sortOrder: e.target.value
                                                            })),
                                                    className: input,
                                                    dir: "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 115
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-muted-c block mb-1",
                                            children: lbl("صورة الطبق", "Dish image")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                form.imageUrl && // eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: form.imageUrl,
                                                    alt: "",
                                                    className: "h-14 w-14 rounded-lg object-cover border"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "text-xs",
                                                    onChange: async (e)=>{
                                                        const file = e.target.files?.[0];
                                                        if (!file) return;
                                                        try {
                                                            setForm((p)=>({
                                                                    ...p,
                                                                    imageUrl: ""
                                                                }));
                                                            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFileAsDataUrl"])(file);
                                                            setForm((p)=>({
                                                                    ...p,
                                                                    imageUrl: url
                                                                }));
                                                        } catch  {
                                                            setError(lbl("الصورة كبيرة جداً (الحد 2MB)", "Image too large (max 2MB)"));
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                form.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setForm((p)=>({
                                                                ...p,
                                                                imageUrl: ""
                                                            })),
                                                    className: "text-red-500 text-xs font-bold",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setForm((p)=>({
                                                ...p,
                                                isAvailable: !p.isAvailable
                                            })),
                                    className: `px-4 py-1.5 rounded-full text-xs font-bold ${form.isAvailable ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`,
                                    children: form.isAvailable ? lbl("متاح", "Available") : lbl("غير متاح", "Unavailable")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-sm font-bold text-red-500",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 235,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: saveItem,
                                    disabled: busy,
                                    className: "btn-primary flex-1 py-2.5 rounded-lg font-bold disabled:opacity-50",
                                    children: lbl("حفظ", "Save")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditItem(null),
                                    className: "flex-1 py-2.5 rounded-lg font-bold bg-black/5",
                                    children: lbl("إلغاء", "Cancel")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MenuManager.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this),
            sizeItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
                onClick: ()=>{
                    setSizeItem(null);
                    setSizeForm(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card w-full max-w-lg max-h-[85vh] overflow-y-auto p-6",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-extrabold text-lg mb-1 text-primary-c",
                            children: [
                                lbl("أحجام وأسعار", "Sizes & prices"),
                                " — ",
                                ar ? sizeItem.nameAr : sizeItem.nameEn
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-c mb-4",
                            children: lbl("أضف أكثر من حجم مع سعر خاص لكل حجم", "Add multiple sizes, each with its own price")
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: sizes.filter((s)=>s.itemId === sizeItem.id).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border border-black/10 rounded-lg px-3 py-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: ar ? s.nameAr : s.nameEn
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-c",
                                                    children: [
                                                        " — ",
                                                        Number(s.price).toFixed(3)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this),
                                                Number(s.discountPercent) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-600 text-xs",
                                                    children: [
                                                        " -",
                                                        Number(s.discountPercent),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 55
                                                }, this),
                                                s.stock !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-c",
                                                    children: [
                                                        " · ",
                                                        lbl("مخزون", "stock"),
                                                        ": ",
                                                        s.stock
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 42
                                                }, this),
                                                !s.isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-red-500 font-bold",
                                                    children: [
                                                        " · ",
                                                        lbl("غير متاح", "Unavailable")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: async ()=>{
                                                        // للموظف: السماح بتغيير التوفر فقط للحجم بسرعة دون تعديل الاسم أو السعر
                                                        if (isStaff) {
                                                            await fetch("/api/admin/sizes", {
                                                                method: "PATCH",
                                                                headers: {
                                                                    "Content-Type": "application/json"
                                                                },
                                                                body: JSON.stringify({
                                                                    id: s.id,
                                                                    isAvailable: !s.isAvailable,
                                                                    nameAr: s.nameAr,
                                                                    nameEn: s.nameEn,
                                                                    price: s.price
                                                                })
                                                            });
                                                            load();
                                                        } else {
                                                            setSizeForm({
                                                                ...s
                                                            });
                                                        }
                                                    },
                                                    className: "text-blue-600 text-xs font-bold",
                                                    children: isStaff ? s.isAvailable ? lbl("إيقاف (تغيير التوفر)", "Disable") : lbl("تفعيل (تغيير التوفر)", "Enable") : lbl("تعديل", "Edit")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, this),
                                                !isStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteSize(s),
                                                    className: "text-red-500 text-xs font-bold",
                                                    children: lbl("حذف", "Delete")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this),
                        !isStaff && sizeForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 border-t border-black/10 pt-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: sizeForm.nameAr ?? "",
                                            onChange: (e)=>setSizeForm((p)=>({
                                                        ...p,
                                                        nameAr: e.target.value
                                                    })),
                                            placeholder: lbl("الاسم (عربي) مثال: وسط", "Name (AR)"),
                                            className: input
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: sizeForm.nameEn ?? "",
                                            onChange: (e)=>setSizeForm((p)=>({
                                                        ...p,
                                                        nameEn: e.target.value
                                                    })),
                                            placeholder: lbl("الاسم (إنجليزي) مثال: Medium", "Name (EN) e.g. Medium"),
                                            className: input
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 290,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            step: "any",
                                            value: sizeForm.price ?? "",
                                            onChange: (e)=>setSizeForm((p)=>({
                                                        ...p,
                                                        price: e.target.value
                                                    })),
                                            placeholder: lbl("السعر", "Price"),
                                            className: input,
                                            dir: "ltr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            step: "any",
                                            value: sizeForm.discountPercent ?? "",
                                            onChange: (e)=>setSizeForm((p)=>({
                                                        ...p,
                                                        discountPercent: e.target.value
                                                    })),
                                            placeholder: lbl("خصم %", "Disc %"),
                                            className: input,
                                            dir: "ltr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 294,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: sizeForm.stock ?? "",
                                            onChange: (e)=>setSizeForm((p)=>({
                                                        ...p,
                                                        stock: e.target.value
                                                    })),
                                            placeholder: lbl("المخزون (اختياري)", "Stock (opt)"),
                                            className: input,
                                            dir: "ltr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSizeForm((p)=>({
                                                ...p,
                                                isAvailable: !(p.isAvailable !== false)
                                            })),
                                    className: `px-4 py-1.5 rounded-full text-xs font-bold ${sizeForm.isAvailable !== false ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`,
                                    children: sizeForm.isAvailable !== false ? lbl("متاح", "Available") : lbl("غير متاح", "Unavailable")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 297,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: saveSize,
                                            className: "btn-primary flex-1 py-2 rounded-lg font-bold text-sm",
                                            children: lbl("حفظ الحجم", "Save size")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSizeForm(null),
                                            className: "flex-1 py-2 rounded-lg font-bold bg-black/5 text-sm",
                                            children: lbl("إلغاء", "Cancel")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                                    lineNumber: 300,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 287,
                            columnNumber: 15
                        }, this) : !isStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSizeForm({
                                    __new: true,
                                    nameAr: "",
                                    nameEn: "",
                                    price: "",
                                    discountPercent: "0",
                                    stock: "",
                                    isAvailable: true
                                }),
                            className: "btn-accent w-full mt-4 py-2.5 rounded-lg font-bold text-sm",
                            children: [
                                "+ ",
                                lbl("إضافة حجم جديد", "Add new size")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MenuManager.tsx",
                            lineNumber: 306,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/MenuManager.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MenuManager.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/MenuManager.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(MenuManager, "v/CYirZDVKbbkac+97TXhLtLCSI=");
_c = MenuManager;
var _c;
__turbopack_context__.k.register(_c, "MenuManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/themes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "THEMES",
    ()=>THEMES,
    "getTheme",
    ()=>getTheme
]);
const THEMES = [
    {
        id: "jowdi-classic",
        nameAr: "الجودي الكلاسيكي",
        nameEn: "Jowdi Classic",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#b87333",
            bg: "#ffffff",
            surface: "#faf7f5",
            text: "#2b1c16",
            muted: "#8a7a71",
            heroOverlay: "rgba(62,42,34,0.65)"
        }
    },
    {
        id: "royal-gold",
        nameAr: "الذهبي الملكي",
        nameEn: "Royal Gold",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#d4af37",
            bg: "#fffdf9",
            surface: "#ffffff",
            text: "#2b1c16",
            muted: "#9b8b7e",
            heroOverlay: "rgba(45,30,22,0.6)"
        }
    },
    {
        id: "desert-night",
        nameAr: "ليل الصحراء",
        nameEn: "Desert Night",
        vars: {
            primary: "#b87333",
            primaryDark: "#8c5626",
            accent: "#ffffff",
            bg: "#1a1614",
            surface: "#26211e",
            text: "#f5f1ec",
            muted: "#a39a90",
            heroOverlay: "rgba(0,0,0,0.75)"
        }
    },
    {
        id: "olive-garden",
        nameAr: "حديقة الزيتون",
        nameEn: "Olive Garden",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#607d8b",
            bg: "#f8f9f8",
            surface: "#ffffff",
            text: "#212b23",
            muted: "#788f7c",
            heroOverlay: "rgba(33,43,35,0.6)"
        }
    },
    {
        id: "crimson-feast",
        nameAr: "وليمة القرمزي",
        nameEn: "Crimson Feast",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#a52a2a",
            bg: "#fffcfc",
            surface: "#ffffff",
            text: "#2d1b15",
            muted: "#9c8c84",
            heroOverlay: "rgba(45,27,21,0.6)"
        }
    },
    {
        id: "ocean-breeze",
        nameAr: "نسيم المحيط",
        nameEn: "Ocean Breeze",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#0e7490",
            bg: "#f3f9fb",
            surface: "#ffffff",
            text: "#102a33",
            muted: "#6e8f9a",
            heroOverlay: "rgba(16,42,51,0.55)"
        }
    },
    {
        id: "saffron-spice",
        nameAr: "بهار الزعفران",
        nameEn: "Saffron Spice",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#d97706",
            bg: "#fffaf3",
            surface: "#ffffff",
            text: "#331d0c",
            muted: "#a98f74",
            heroOverlay: "rgba(51,29,12,0.55)"
        }
    },
    {
        id: "midnight-luxe",
        nameAr: "فخامة منتصف الليل",
        nameEn: "Midnight Luxe",
        vars: {
            primary: "#b87333",
            primaryDark: "#8c5626",
            accent: "#f0abfc",
            bg: "#0f0c1a",
            surface: "#1a1527",
            text: "#efe9ff",
            muted: "#9d93b8",
            heroOverlay: "rgba(5,3,12,0.65)"
        }
    },
    {
        id: "emerald-oasis",
        nameAr: "واحة الزمرد",
        nameEn: "Emerald Oasis",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#047857",
            bg: "#f2faf7",
            surface: "#ffffff",
            text: "#0d2a21",
            muted: "#6f968a",
            heroOverlay: "rgba(13,42,33,0.55)"
        }
    },
    {
        id: "terracotta",
        nameAr: "التراكوتا",
        nameEn: "Terracotta",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#b45309",
            bg: "#fdf8f3",
            surface: "#ffffff",
            text: "#3a2512",
            muted: "#a58a70",
            heroOverlay: "rgba(58,37,18,0.55)"
        }
    },
    {
        id: "rose-petal",
        nameAr: "بتلة الورد",
        nameEn: "Rose Petal",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#be185d",
            bg: "#fdf4f8",
            surface: "#ffffff",
            text: "#330f20",
            muted: "#a87b92",
            heroOverlay: "rgba(51,15,32,0.55)"
        }
    },
    {
        id: "arabian-nights",
        nameAr: "ليالي العرب",
        nameEn: "Arabian Nights",
        vars: {
            primary: "#b45309",
            primaryDark: "#92400e",
            accent: "#eab308",
            bg: "#1c1408",
            surface: "#2a1f10",
            text: "#fdf1d6",
            muted: "#b49d73",
            heroOverlay: "rgba(0,0,0,0.7)"
        }
    },
    {
        id: "mint-fresh",
        nameAr: "النعناع المنعش",
        nameEn: "Mint Fresh",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#0d9488",
            bg: "#f1fbf9",
            surface: "#ffffff",
            text: "#0f2d29",
            muted: "#6c9a93",
            heroOverlay: "rgba(15,45,41,0.55)"
        }
    },
    {
        id: "charcoal-grill",
        nameAr: "الفحم والشواء",
        nameEn: "Charcoal Grill",
        vars: {
            primary: "#ea580c",
            primaryDark: "#b84609",
            accent: "#5c4033",
            bg: "#191919",
            surface: "#242424",
            text: "#f5f1ec",
            muted: "#a39a90",
            heroOverlay: "rgba(0,0,0,0.65)"
        }
    },
    {
        id: "lavender-dream",
        nameAr: "حلم الخزامى",
        nameEn: "Lavender Dream",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#7c3aed",
            bg: "#f8f6fd",
            surface: "#ffffff",
            text: "#231542",
            muted: "#8f84ad",
            heroOverlay: "rgba(35,21,66,0.55)"
        }
    },
    {
        id: "honey-amber",
        nameAr: "العسل والكهرمان",
        nameEn: "Honey Amber",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#b8860b",
            bg: "#fffbf0",
            surface: "#ffffff",
            text: "#332508",
            muted: "#a8976e",
            heroOverlay: "rgba(51,37,8,0.55)"
        }
    },
    {
        id: "sapphire-elite",
        nameAr: "الياقوت النخبة",
        nameEn: "Sapphire Elite",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#1d4ed8",
            bg: "#f4f7fe",
            surface: "#ffffff",
            text: "#111d3d",
            muted: "#7284ad",
            heroOverlay: "rgba(17,29,61,0.55)"
        }
    },
    {
        id: "coral-sunset",
        nameAr: "غروب المرجان",
        nameEn: "Coral Sunset",
        vars: {
            primary: "#5c4033",
            primaryDark: "#3e2a22",
            accent: "#f43f5e",
            bg: "#fff6f5",
            surface: "#ffffff",
            text: "#3b0f17",
            muted: "#b1808a",
            heroOverlay: "rgba(59,15,23,0.5)"
        }
    },
    {
        id: "forest-smoke",
        nameAr: "دخان الغابة",
        nameEn: "Forest Smoke",
        vars: {
            primary: "#166534",
            primaryDark: "#0f4a26",
            accent: "#5c4033",
            bg: "#10180f",
            surface: "#1a2418",
            text: "#eaf3e6",
            muted: "#93a68d",
            heroOverlay: "rgba(0,0,0,0.65)"
        }
    },
    {
        id: "pearl-minimal",
        nameAr: "اللؤلؤ البسيط",
        nameEn: "Pearl Minimal",
        vars: {
            primary: "#111827",
            primaryDark: "#000000",
            accent: "#5c4033",
            bg: "#fafafa",
            surface: "#ffffff",
            text: "#111827",
            muted: "#6b7280",
            heroOverlay: "rgba(17,24,39,0.6)"
        }
    }
];
function getTheme(id) {
    return THEMES.find((t)=>t.id === id) ?? THEMES[0];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/SettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/themes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/ResourceManager.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CONTENT_LABELS = {
    hero_title: {
        ar: "عنوان الواجهة الرئيسية",
        en: "Hero title"
    },
    hero_subtitle: {
        ar: "النص الفرعي للواجهة",
        en: "Hero subtitle"
    },
    about_title: {
        ar: "عنوان من نحن",
        en: "About title"
    },
    about_body: {
        ar: "نص من نحن",
        en: "About body"
    },
    footer_text: {
        ar: "نص التذييل",
        en: "Footer text"
    },
    contact_phone: {
        ar: "رقم التواصل",
        en: "Contact phone"
    },
    contact_address: {
        ar: "العنوان",
        en: "Address"
    },
    opening_hours: {
        ar: "ساعات العمل",
        en: "Opening hours"
    },
    menu_title: {
        ar: "عنوان القائمة",
        en: "Menu title"
    },
    menu_subtitle: {
        ar: "وصف القائمة",
        en: "Menu subtitle"
    }
};
function SettingsPanel({ locale }) {
    _s();
    const ar = locale === "ar";
    const lbl = (a, e)=>ar ? a : e;
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = async ()=>{
        const [s, c] = await Promise.all([
            fetch("/api/admin/settings").then((r)=>r.json()),
            fetch("/api/admin/content").then((r)=>r.json())
        ]);
        const map = {};
        for (const row of s.data ?? [])map[row.key] = row.value ?? "";
        setSettings(map);
        setContent(c.data ?? []);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPanel.useEffect": ()=>{
            load();
        }
    }["SettingsPanel.useEffect"], []);
    const saveSettings = async (extra)=>{
        setBusy(true);
        try {
            await fetch("/api/admin/settings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    settings: {
                        ...settings,
                        ...extra
                    }
                })
            });
            setSaved(lbl("تم الحفظ بنجاح ✓", "Saved successfully ✓"));
            setTimeout(()=>setSaved(""), 2500);
        } finally{
            setBusy(false);
        }
    };
    const saveContent = async ()=>{
        setBusy(true);
        try {
            await fetch("/api/admin/content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content
                })
            });
            setSaved(lbl("تم حفظ النصوص ✓", "Content saved ✓"));
            setTimeout(()=>setSaved(""), 2500);
        } finally{
            setBusy(false);
        }
    };
    const set = (key, value)=>setSettings((p)=>({
                ...p,
                [key]: value
            }));
    const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            saved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 start-1/2 -translate-x-1/2 z-50 bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-xl",
                children: saved
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-extrabold text-lg text-primary-c mb-1",
                        children: lbl("قوالب الموقع (20 قالب احترافي)", "Website Themes (20 professional templates)")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-c mb-4",
                        children: lbl("اختر القالب وسيتم تطبيقه فوراً على الموقع بالكامل", "Pick a template and it is applied instantly site-wide")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEMES"].map((th)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: async ()=>{
                                    set("theme", th.id);
                                    await fetch("/api/admin/settings", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            settings: {
                                                theme: th.id
                                            }
                                        })
                                    });
                                    setSaved(lbl("تم تطبيق القالب ✓", "Theme applied ✓"));
                                    setTimeout(()=>setSaved(""), 2000);
                                },
                                className: `rounded-xl border-2 p-3 text-start transition ${settings.theme === th.id ? "border-green-500 ring-2 ring-green-200" : "border-black/10 hover:border-black/30"}`,
                                style: {
                                    background: th.vars.bg
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-5 w-5 rounded-full",
                                                style: {
                                                    background: th.vars.primary
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-5 w-5 rounded-full",
                                                style: {
                                                    background: th.vars.accent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-5 w-5 rounded-full border",
                                                style: {
                                                    background: th.vars.surface
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold",
                                        style: {
                                            color: th.vars.text
                                        },
                                        children: ar ? th.nameAr : th.nameEn
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    settings.theme === th.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold text-green-600 mt-1",
                                        children: [
                                            "✓ ",
                                            lbl("مفعل", "Active")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, th.id, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-extrabold text-lg text-primary-c mb-4",
                        children: lbl("أوقات العمل (نظام الفترات) وحالة المطعم", "Working Hours (Split Shifts) & Status")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-muted-c block mb-1",
                                                children: lbl("الفترة الأولى - الفتح", "Shift 1 - Open")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "time",
                                                value: settings.restaurant_open_time_1 ?? "08:00",
                                                onChange: (e)=>set("restaurant_open_time_1", e.target.value),
                                                className: input,
                                                dir: "ltr"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-muted-c block mb-1",
                                                children: lbl("الفترة الأولى - الإغلاق", "Shift 1 - Close")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "time",
                                                value: settings.restaurant_close_time_1 ?? "15:00",
                                                onChange: (e)=>set("restaurant_close_time_1", e.target.value),
                                                className: input,
                                                dir: "ltr"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-muted-c block mb-1",
                                                children: lbl("الفترة الثانية - الفتح", "Shift 2 - Open")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "time",
                                                value: settings.restaurant_open_time_2 ?? "18:00",
                                                onChange: (e)=>set("restaurant_open_time_2", e.target.value),
                                                className: input,
                                                dir: "ltr"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-muted-c block mb-1",
                                                children: lbl("الفترة الثانية - الإغلاق", "Shift 2 - Close")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "time",
                                                value: settings.restaurant_close_time_2 ?? "00:00",
                                                onChange: (e)=>set("restaurant_close_time_2", e.target.value),
                                                className: input,
                                                dir: "ltr"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>set("restaurant_manual_override", settings.restaurant_manual_override === "closed" ? "open" : "closed"),
                                    className: `w-full py-2.5 rounded-lg text-sm font-bold ${settings.restaurant_manual_override !== "closed" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`,
                                    children: settings.restaurant_manual_override !== "closed" ? lbl("حالة المطعم: يعمل حسب الفترات أعلاه", "Status: Operating normally") : lbl("حالة المطعم: مغلق يدوياً", "Status: Manually Closed")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>saveSettings({
                                restaurant_open_time_1: settings.restaurant_open_time_1 ?? "08:00",
                                restaurant_close_time_1: settings.restaurant_close_time_1 ?? "15:00",
                                restaurant_open_time_2: settings.restaurant_open_time_2 ?? "18:00",
                                restaurant_close_time_2: settings.restaurant_close_time_2 ?? "00:00",
                                restaurant_manual_override: settings.restaurant_manual_override ?? "open"
                            }),
                        disabled: busy,
                        className: "btn-primary mt-4 px-8 py-2.5 rounded-lg font-bold disabled:opacity-50",
                        children: lbl("حفظ أوقات العمل", "Save working hours")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-extrabold text-lg text-primary-c mb-4",
                        children: lbl("صورة الواجهة والشعار", "Hero Image & Logo")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            [
                                "hero_image",
                                lbl("صورة الواجهة الرئيسية", "Hero background image")
                            ],
                            [
                                "logo_url",
                                lbl("شعار المطعم", "Restaurant logo")
                            ]
                        ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-bold block mb-2",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    settings[key] && // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: settings[key],
                                        alt: "",
                                        className: "h-32 w-full object-cover rounded-xl border mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "text-xs",
                                        onChange: async (e)=>{
                                            const file = e.target.files?.[0];
                                            if (!file) return;
                                            try {
                                                const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFileAsDataUrl"])(file);
                                                set(key, url);
                                                await fetch("/api/admin/settings", {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify({
                                                        settings: {
                                                            [key]: url
                                                        }
                                                    })
                                                });
                                                setSaved(lbl("تم تحديث الصورة ✓", "Image updated ✓"));
                                                setTimeout(()=>setSaved(""), 2000);
                                            } catch  {
                                                alert(lbl("الصورة كبيرة جداً (الحد 2MB)", "Image too large (max 2MB)"));
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-extrabold text-lg text-primary-c mb-4",
                        children: lbl("التوصيل والدفع", "Delivery & Payment")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-muted-c block mb-1",
                                        children: lbl("رسوم التوصيل الأساسية (د.ب)", "Base delivery fee (BHD)")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "any",
                                        value: settings.delivery_fee_base ?? "",
                                        onChange: (e)=>set("delivery_fee_base", e.target.value),
                                        className: input,
                                        dir: "ltr"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-muted-c block mb-1",
                                        children: lbl("نسبة تحمل العميل من رسوم التوصيل %", "Customer share of delivery fee %")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: settings.delivery_customer_share_percent ?? "",
                                        onChange: (e)=>set("delivery_customer_share_percent", e.target.value),
                                        className: input,
                                        dir: "ltr"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>set("delivery_share_enabled", settings.delivery_share_enabled === "1" ? "0" : "1"),
                                    className: `px-4 py-2 rounded-full text-sm font-bold ${settings.delivery_share_enabled === "1" ? "bg-green-500 text-white" : "bg-red-100 text-red-600"}`,
                                    children: settings.delivery_share_enabled === "1" ? lbl("خاصية مشاركة رسوم التوصيل: مفعلة (50/50 افتراضياً)", "Shared delivery fee: Enabled (50/50 default)") : lbl("خاصية مشاركة رسوم التوصيل: معطلة (العميل يدفع كامل الرسوم)", "Shared delivery fee: Disabled (customer pays full fee)")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-muted-c block mb-1",
                                        children: lbl("مفتاح BenefitPay API", "BenefitPay API key")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: settings.benefitpay_api_key ?? "",
                                        onChange: (e)=>set("benefitpay_api_key", e.target.value),
                                        className: input,
                                        dir: "ltr",
                                        placeholder: lbl("أدخل المفتاح عند التفعيل", "Enter key when activating")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-muted-c block mb-1",
                                        children: lbl("مفتاح بوابة البطاقات الائتمانية", "Credit card gateway API key")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: settings.card_gateway_api_key ?? "",
                                        onChange: (e)=>set("card_gateway_api_key", e.target.value),
                                        className: input,
                                        dir: "ltr",
                                        placeholder: lbl("أدخل المفتاح عند التفعيل", "Enter key when activating")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>saveSettings(),
                        disabled: busy,
                        className: "btn-primary mt-4 px-8 py-2.5 rounded-lg font-bold disabled:opacity-50",
                        children: lbl("حفظ الإعدادات", "Save settings")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-extrabold text-lg text-primary-c mb-1",
                        children: lbl("إدارة نصوص الموقع (عربي / إنجليزي)", "Site Content CMS (Arabic / English)")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-c mb-4",
                        children: lbl("عدل كل نص في الموقع بشكل مستقل باللغتين", "Edit every site text independently in both languages")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: content.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-black/10 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-extrabold text-accent-c mb-2",
                                        children: [
                                            CONTENT_LABELS[row.key] ? ar ? CONTENT_LABELS[row.key].ar : CONTENT_LABELS[row.key].en : row.key,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-c font-normal ms-2",
                                                dir: "ltr",
                                                children: [
                                                    "(",
                                                    row.key,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold text-muted-c",
                                                        children: "العربية"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        dir: "rtl",
                                                        value: row.valueAr ?? "",
                                                        onChange: (e)=>setContent((p)=>p.map((r, i)=>i === idx ? {
                                                                        ...r,
                                                                        valueAr: e.target.value
                                                                    } : r)),
                                                        className: input,
                                                        rows: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-bold text-muted-c",
                                                        children: "English"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        dir: "ltr",
                                                        value: row.valueEn ?? "",
                                                        onChange: (e)=>setContent((p)=>p.map((r, i)=>i === idx ? {
                                                                        ...r,
                                                                        valueEn: e.target.value
                                                                    } : r)),
                                                        className: input,
                                                        rows: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.key, true, {
                                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: saveContent,
                        disabled: busy,
                        className: "btn-primary mt-4 px-8 py-2.5 rounded-lg font-bold disabled:opacity-50",
                        children: lbl("حفظ جميع النصوص", "Save all content")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SettingsPanel.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/SettingsPanel.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(SettingsPanel, "xglq02bPlR0UeawKtUH7yYz8f4M=");
_c = SettingsPanel;
var _c;
__turbopack_context__.k.register(_c, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/AdminApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/ResourceManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MenuManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/MenuManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/SettingsPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ALL_TABS = [
    {
        id: "orders",
        ar: "الطلبات",
        en: "Orders",
        icon: "🧾",
        roles: [
            "superadmin",
            "manager",
            "staff"
        ]
    },
    {
        id: "reports",
        ar: "التقارير المالية",
        en: "Financial Reports",
        icon: "📊",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "menu",
        ar: "القائمة والأطباق",
        en: "Menu & Dishes",
        icon: "🍽️",
        roles: [
            "superadmin",
            "manager",
            "staff"
        ]
    },
    {
        id: "geo",
        ar: "المحافظات والمناطق",
        en: "Governorates & Regions",
        icon: "🗺️",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "promos",
        ar: "أكواد الخصم",
        en: "Promo Codes",
        icon: "🏷️",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "popups",
        ar: "النوافذ الإعلانية",
        en: "Popups",
        icon: "📢",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "aggregators",
        ar: "شركات التوصيل",
        en: "Delivery Apps",
        icon: "🛵",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "customers",
        ar: "العملاء والحظر",
        en: "Customers & Bans",
        icon: "👥",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "staff",
        ar: "الموظفون والصلاحيات",
        en: "Staff & Permissions",
        icon: "🔐",
        roles: [
            "superadmin",
            "manager"
        ]
    },
    {
        id: "settings",
        ar: "الإعدادات والقوالب",
        en: "Settings & Themes",
        icon: "⚙️",
        roles: [
            "superadmin",
            "manager"
        ]
    }
];
const STATUSES = [
    "pending",
    "confirmed",
    "preparing",
    "ready",
    "out_for_delivery",
    "completed",
    "cancelled"
];
function AdminApp({ locale, initialStaff }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDict"])(locale);
    const ar = locale === "ar";
    const lbl = (a, e)=>ar ? a : e;
    const [me, setMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStaff);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("orders");
    /* login form */ const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loginErr, setLoginErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* orders */ const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unack, setUnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [alarmOn, setAlarmOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAdminOrder, setSelectedAdminOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const alarmTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ref لمتابعة حالة الطلبات بدون إعادة إنشاء المتايمر وتصفيره
    const ordersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(orders);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminApp.useEffect": ()=>{
            ordersRef.current = orders;
        }
    }["AdminApp.useEffect"], [
        orders
    ]);
    const [govs, setGovs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [regs, setRegs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    /* reports */ const [repFrom, setRepFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [repTo, setRepTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const switchLocale = async ()=>{
        await fetch("/api/auth/locale", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                locale: ar ? "en" : "ar"
            })
        });
        window.location.reload();
    };
    const login = async ()=>{
        setBusy(true);
        setLoginErr("");
        try {
            const res = await fetch("/api/auth/staff-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const d = await res.json();
            if (res.ok) setMe(d.staff);
            else setLoginErr(t.loginFailed);
        } finally{
            setBusy(false);
        }
    };
    const logout = async ()=>{
        await fetch("/api/auth/staff-logout", {
            method: "POST"
        });
        setMe(null);
    };
    /* ---------- alarm sound ---------- */ const beep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminApp.useCallback[beep]": ()=>{
            try {
                if (!audioCtxRef.current) {
                    const Ctx = window.AudioContext || window.webkitAudioContext;
                    audioCtxRef.current = new Ctx();
                }
                const ctx = audioCtxRef.current;
                if (ctx.state === "suspended") ctx.resume();
                const now = ctx.currentTime;
                for(let i = 0; i < 3; i++){
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
            } catch  {}
        }
    }["AdminApp.useCallback[beep]"], []);
    // التنبيه المستمر للطلبات الجديدة بانتظار التأكيد
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminApp.useEffect": ()=>{
            if (alarmOn) {
                beep();
                alarmTimerRef.current = setInterval(beep, 1800);
            } else if (alarmTimerRef.current) {
                clearInterval(alarmTimerRef.current);
                alarmTimerRef.current = null;
            }
            return ({
                "AdminApp.useEffect": ()=>{
                    if (alarmTimerRef.current) clearInterval(alarmTimerRef.current);
                }
            })["AdminApp.useEffect"];
        }
    }["AdminApp.useEffect"], [
        alarmOn,
        beep
    ]);
    // التنبيه الدوري كل 5 دقائق للطلبات النشطة (التي ليست "مكتمل" ولا "ملغي")
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminApp.useEffect": ()=>{
            if (!me) return;
            const periodicInterval = setInterval({
                "AdminApp.useEffect.periodicInterval": ()=>{
                    const hasPendingOrActive = ordersRef.current.some({
                        "AdminApp.useEffect.periodicInterval.hasPendingOrActive": (o)=>o.status !== "completed" && o.status !== "cancelled"
                    }["AdminApp.useEffect.periodicInterval.hasPendingOrActive"]);
                    if (hasPendingOrActive) {
                        beep();
                    }
                }
            }["AdminApp.useEffect.periodicInterval"], 5 * 60 * 1000); // 5 دقائق
            return ({
                "AdminApp.useEffect": ()=>clearInterval(periodicInterval)
            })["AdminApp.useEffect"];
        }
    }["AdminApp.useEffect"], [
        me,
        beep
    ]);
    const loadOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminApp.useCallback[loadOrders]": async ()=>{
            const res = await fetch("/api/admin/orders");
            if (!res.ok) return;
            const d = await res.json();
            setOrders(d.data ?? []);
            setUnack(d.unacknowledged ?? 0);
            setAlarmOn((d.unacknowledged ?? 0) > 0);
        }
    }["AdminApp.useCallback[loadOrders]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminApp.useEffect": ()=>{
            if (!me) return;
            loadOrders();
            fetch("/api/admin/governorates").then({
                "AdminApp.useEffect": (r)=>r.json()
            }["AdminApp.useEffect"]).then({
                "AdminApp.useEffect": (d)=>setGovs(d.data ?? [])
            }["AdminApp.useEffect"]);
            fetch("/api/admin/regions").then({
                "AdminApp.useEffect": (r)=>r.json()
            }["AdminApp.useEffect"]).then({
                "AdminApp.useEffect": (d)=>setRegs(d.data ?? [])
            }["AdminApp.useEffect"]);
            const iv = setInterval(loadOrders, 6000);
            return ({
                "AdminApp.useEffect": ()=>clearInterval(iv)
            })["AdminApp.useEffect"];
        }
    }["AdminApp.useEffect"], [
        me,
        loadOrders
    ]);
    const acknowledgeAll = async ()=>{
        await fetch("/api/admin/orders-ack", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
        setAlarmOn(false);
        loadOrders();
    };
    const updateOrder = async (id, patch)=>{
        await fetch("/api/admin/orders", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                ...patch
            })
        });
        loadOrders();
    };
    const loadReport = async (preset)=>{
        let from = repFrom;
        let to = repTo;
        const today = new Date();
        const fmt = (d)=>d.toISOString().slice(0, 10);
        if (preset === "daily") {
            from = fmt(today);
            to = fmt(today);
        }
        if (preset === "weekly") {
            const d = new Date(today);
            d.setDate(d.getDate() - 6);
            from = fmt(d);
            to = fmt(today);
        }
        if (preset === "monthly") {
            const d = new Date(today);
            d.setDate(d.getDate() - 29);
            from = fmt(d);
            to = fmt(today);
        }
        setRepFrom(from);
        setRepTo(to);
        const res = await fetch(`/api/admin/reports?from=${from}&to=${to}`);
        const d = await res.json();
        setReport(d.data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminApp.useEffect": ()=>{
            if (me && tab === "reports" && !report) loadReport("monthly");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AdminApp.useEffect"], [
        tab,
        me
    ]);
    const input = "w-full border border-black/15 rounded-lg px-3 py-2 text-sm bg-white";
    /* ---------------- login screen ---------------- */ if (!me) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center p-4",
            style: {
                background: "var(--bg)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card w-full max-w-sm p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl",
                                children: "🔐"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-extrabold text-primary-c mt-2",
                                children: lbl("لوحة إدارة مطعم الجودي", "Jowdi Restaurant Admin")
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                placeholder: lbl("اسم المستخدم", "Username"),
                                className: input,
                                dir: "ltr"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                onKeyDown: (e)=>e.key === "Enter" && login(),
                                placeholder: lbl("كلمة المرور", "Password"),
                                className: input,
                                dir: "ltr",
                                type: "password"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    loginErr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-sm font-bold text-red-500",
                        children: loginErr
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 222,
                        columnNumber: 24
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: login,
                        disabled: busy,
                        className: "btn-primary w-full mt-5 py-3 rounded-xl font-extrabold disabled:opacity-50",
                        children: lbl("دخول", "Sign in")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "text-xs text-muted-c hover:text-accent-c",
                                children: [
                                    "← ",
                                    t.home
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: switchLocale,
                                className: "text-xs font-bold text-muted-c hover:text-accent-c",
                                children: t.language
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/AdminApp.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/AdminApp.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    // تصفية التبويبات حسب دور المستخدم
    const availableTabs = ALL_TABS.filter((tb)=>tb.roles.includes(me.role));
    /* ---------------- dashboard ---------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "var(--bg)"
        },
        children: [
            unack > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-0 top-0 z-[70] bg-red-600 text-white px-4 py-3 flex items-center justify-center gap-4 alert-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: "🔔"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-extrabold",
                        children: ar ? `${unack} طلب جديد بانتظار التأكيد!` : `${unack} new order(s) awaiting acknowledgment!`
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: acknowledgeAll,
                        className: "bg-white text-red-600 font-extrabold px-5 py-1.5 rounded-full text-sm",
                        children: lbl("تأكيد الاستلام وإيقاف التنبيه", "Acknowledge & stop alarm")
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/AdminApp.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-primary-c text-white sticky top-0 z-40 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 h-14 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-extrabold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "👨‍🍳"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    lbl("لوحة إدارة مطعم الجودي", "Jowdi Admin Dashboard")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-80 hidden sm:inline",
                                        children: [
                                            me.fullName,
                                            " (",
                                            me.role,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: switchLocale,
                                        className: "px-3 py-1 rounded-full border border-white/40 text-xs font-bold",
                                        children: t.language
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        className: "px-3 py-1 rounded-full border border-white/40 text-xs font-bold",
                                        children: lbl("الموقع", "Site")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: logout,
                                        className: "px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-xs font-bold",
                                        children: t.logout
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto pb-2",
                        children: availableTabs.map((tb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(tb.id),
                                className: `whitespace-nowrap px-4 py-2 rounded-t-lg text-xs font-bold transition ${tab === tb.id ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"}`,
                                style: tab === tb.id ? {
                                    color: "var(--text)",
                                    background: "var(--bg)"
                                } : undefined,
                                children: [
                                    tb.icon,
                                    " ",
                                    lbl(tb.ar, tb.en),
                                    tb.id === "orders" && unack > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ms-1 bg-red-500 text-white rounded-full px-1.5",
                                        children: unack
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 270,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, tb.id, true, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/AdminApp.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [
                    tab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            orders.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-10 text-center text-muted-c",
                                children: lbl("لا توجد طلبات بعد", "No orders yet")
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 280,
                                columnNumber: 37
                            }, this),
                            selectedAdminOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedAdminOrder(null),
                                        className: "text-sm font-bold text-accent-c hover:underline flex items-center gap-1",
                                        children: ar ? "← العودة إلى قائمة الطلبات" : "← Back to Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-black/10 pb-4 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-extrabold text-primary-c",
                                                        children: ar ? `فاتورة رقم #${selectedAdminOrder.orderNumber}` : `Invoice #${selectedAdminOrder.orderNumber}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-c mt-1",
                                                        dir: "ltr",
                                                        children: new Date(selectedAdminOrder.createdAt).toLocaleString("en-GB")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 292,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold px-3 py-1 rounded-full bg-primary-c text-white",
                                                children: t.orderStatus[selectedAdminOrder.status] ?? selectedAdminOrder.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm space-y-1 bg-surface/50 p-4 rounded-xl border border-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-base mb-2",
                                                children: ar ? "معلومات العميل:" : "Customer Info:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    ar ? "الاسم:" : "Name:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: selectedAdminOrder.customerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    ar ? "الهاتف:" : "Phone:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        dir: "ltr",
                                                        children: selectedAdminOrder.customerPhone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 52
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this),
                                            selectedAdminOrder.customerEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    ar ? "البريد:" : "Email:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        dir: "ltr",
                                                        children: selectedAdminOrder.customerEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 89
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 307,
                                                columnNumber: 56
                                            }, this),
                                            selectedAdminOrder.orderType === "delivery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 pt-2 border-t border-black/5",
                                                children: [
                                                    "📍 ",
                                                    selectedAdminOrder.addressDetails
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this),
                                            selectedAdminOrder.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-2 border-t border-black/5 bg-amber-50/50 p-2.5 rounded-lg text-amber-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: ar ? "ملاحظات الزبون: " : "Customer Notes: "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: selectedAdminOrder.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 314,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-sm mb-3",
                                                children: ar ? "الأصناف المطلوبة:" : "Ordered Items:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: (selectedAdminOrder.items ?? []).map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm border-b border-black/5 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold",
                                                                        children: [
                                                                            ar ? it.nameAr : it.nameEn,
                                                                            (ar ? it.sizeNameAr : it.sizeNameEn) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-c font-normal",
                                                                                children: [
                                                                                    " (",
                                                                                    ar ? it.sizeNameAr : it.sizeNameEn,
                                                                                    ")"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                lineNumber: 329,
                                                                                columnNumber: 70
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-c",
                                                                        children: [
                                                                            ar ? "الكمية:" : "Qty:",
                                                                            " ",
                                                                            it.quantity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold",
                                                                children: [
                                                                    it.lineTotal,
                                                                    " ",
                                                                    t.currency
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-black/15 pt-3 space-y-1.5 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-c",
                                                        children: t.subtotal
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            selectedAdminOrder.subtotal,
                                                            " ",
                                                            t.currency
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 107
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, this),
                                            Number(selectedAdminOrder.discountAmount) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-green-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            t.discount,
                                                            " ",
                                                            selectedAdminOrder.promoCode && `(${selectedAdminOrder.promoCode})`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            "-",
                                                            selectedAdminOrder.discountAmount,
                                                            " ",
                                                            t.currency
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 342,
                                                columnNumber: 21
                                            }, this),
                                            selectedAdminOrder.orderType === "delivery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-c",
                                                        children: t.deliveryFee
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 59
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            selectedAdminOrder.deliveryFeeCustomer,
                                                            " ",
                                                            t.currency
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 112
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 348,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-lg font-extrabold pt-2 border-t border-black/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            t.total,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-accent-c",
                                                        children: [
                                                            selectedAdminOrder.total,
                                                            " ",
                                                            t.currency
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 350,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 339,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this) : orders.map((o)=>{
                                const isLocked = (o.status === "completed" || o.status === "cancelled") && me.role !== "superadmin";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `card p-4 ${!o.acknowledged ? "ring-2 ring-red-400" : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3 justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        onClick: ()=>setSelectedAdminOrder(o),
                                                        className: "font-extrabold text-primary-c cursor-pointer hover:text-accent-c underline",
                                                        children: [
                                                            o.orderNumber,
                                                            " (🔍 ",
                                                            ar ? "عرض الفاتورة" : "View Invoice",
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-c ms-2",
                                                        dir: "ltr",
                                                        children: new Date(o.createdAt).toLocaleString("en-GB")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 25
                                                    }, this),
                                                    !o.acknowledged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ms-2 text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full",
                                                        children: lbl("جديد", "NEW")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 362,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold px-3 py-1 rounded-full bg-black/5",
                                                        children: o.orderType === "dine_in" ? t.dineIn : o.orderType === "takeaway" ? t.takeaway : t.delivery
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold px-3 py-1 rounded-full bg-black/5",
                                                        children: o.paymentMethod === "cash" ? t.cash : o.paymentMethod === "benefitpay" ? t.benefitpay : t.card
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: o.status,
                                                        disabled: isLocked,
                                                        onChange: (e)=>updateOrder(o.id, {
                                                                status: e.target.value
                                                            }),
                                                        className: "border border-black/15 rounded-lg px-2 py-1 text-xs font-bold bg-white disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                        children: STATUSES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s,
                                                                children: t.orderStatus[s] ?? s
                                                            }, s, false, {
                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 48
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 372,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 361,
                                        columnNumber: 21
                                    }, this)
                                }, o.id, false, {
                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                    lineNumber: 360,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    tab === "reports" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>loadReport("daily"),
                                            className: "btn-primary px-4 py-2 rounded-lg text-sm font-bold",
                                            children: lbl("يومي", "Daily")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>loadReport("weekly"),
                                            className: "btn-primary px-4 py-2 rounded-lg text-sm font-bold",
                                            children: lbl("أسبوعي", "Weekly")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>loadReport("monthly"),
                                            className: "btn-primary px-4 py-2 rounded-lg text-sm font-bold",
                                            children: lbl("شهري", "Monthly")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end gap-2 ms-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-muted-c block",
                                                            children: lbl("من تاريخ", "From")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: repFrom,
                                                            onChange: (e)=>setRepFrom(e.target.value),
                                                            className: input,
                                                            dir: "ltr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-muted-c block",
                                                            children: lbl("إلى تاريخ", "To")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: repTo,
                                                            onChange: (e)=>setRepTo(e.target.value),
                                                            className: input,
                                                            dir: "ltr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>loadReport(),
                                                    className: "btn-accent px-4 py-2 rounded-lg text-sm font-bold",
                                                    children: lbl("عرض", "Show")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            report && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",
                                        children: [
                                            [
                                                lbl("عدد الطلبات", "Orders"),
                                                report.orderCount
                                            ],
                                            [
                                                lbl("الإيرادات", "Revenue"),
                                                `${report.revenue} ${t.currency}`
                                            ],
                                            [
                                                lbl("رسوم التوصيل المحصلة", "Delivery fees collected"),
                                                `${report.deliveryFeesCollected} ${t.currency}`
                                            ],
                                            [
                                                lbl("تكلفة التوصيل على المطعم", "Restaurant delivery cost"),
                                                `${report.restaurantDeliveryCost} ${t.currency}`
                                            ],
                                            [
                                                lbl("الخصومات", "Discounts"),
                                                `${report.discounts} ${t.currency}`
                                            ],
                                            [
                                                lbl("صافي الربح", "Net profit"),
                                                `${report.netProfit} ${t.currency}`
                                            ]
                                        ].map(([label, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card p-4 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-c font-bold",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-extrabold text-primary-c mt-1",
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 429,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-extrabold mb-3",
                                                        children: lbl("حسب نوع الطلب", "By order type")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: t.dineIn
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: report.byType.dine_in ?? 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 84
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: t.takeaway
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: report.byType.takeaway ?? 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 86
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: t.delivery
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: report.byType.delivery ?? 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 86
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 436,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-extrabold mb-3",
                                                        children: lbl("التفصيل اليومي", "Daily breakdown")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-64 overflow-y-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "text-xs text-muted-c border-b",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-start py-1",
                                                                                children: lbl("اليوم", "Day")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                lineNumber: 448,
                                                                                columnNumber: 78
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-start",
                                                                                children: lbl("الطلبات", "Orders")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                lineNumber: 448,
                                                                                columnNumber: 136
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-end",
                                                                                children: lbl("الإيراد", "Revenue")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                lineNumber: 448,
                                                                                columnNumber: 194
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                        lineNumber: 448,
                                                                        columnNumber: 32
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    children: report.byDay.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "border-b border-black/5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-1",
                                                                                    dir: "ltr",
                                                                                    children: d.day
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                    lineNumber: 451,
                                                                                    columnNumber: 81
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    children: d.count
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                    lineNumber: 451,
                                                                                    columnNumber: 124
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "text-end font-bold",
                                                                                    children: d.revenue
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                                    lineNumber: 451,
                                                                                    columnNumber: 142
                                                                                }, this)
                                                                            ]
                                                                        }, d.day, true, {
                                                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                            lineNumber: 451,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 444,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this),
                    tab === "menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MenuManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        locale: locale,
                        role: me.role
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 464,
                        columnNumber: 28
                    }, this),
                    tab === "geo" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                resource: "governorates",
                                titleAr: "المحافظات",
                                titleEn: "Governorates",
                                locale: locale,
                                onChanged: ()=>fetch("/api/admin/governorates").then((r)=>r.json()).then((d)=>setGovs(d.data ?? [])),
                                fields: [
                                    {
                                        key: "nameAr",
                                        ar: "الاسم (عربي)",
                                        en: "Name (AR)",
                                        type: "text",
                                        required: true
                                    },
                                    {
                                        key: "nameEn",
                                        ar: "الاسم (إنجليزي)",
                                        en: "Name (EN)",
                                        type: "text",
                                        required: true
                                    },
                                    {
                                        key: "isActive",
                                        ar: "مفعلة",
                                        en: "Active",
                                        type: "checkbox"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                resource: "regions",
                                titleAr: "المناطق ورسوم التوصيل",
                                titleEn: "Regions & Delivery Fees",
                                locale: locale,
                                fields: [
                                    {
                                        key: "governorateId",
                                        ar: "المحافظة",
                                        en: "Governorate",
                                        type: "select",
                                        options: govs.map((g)=>({
                                                value: g.id,
                                                label: ar ? g.nameAr : g.nameEn
                                            })),
                                        required: true
                                    },
                                    {
                                        key: "nameAr",
                                        ar: "الاسم (عربي)",
                                        en: "Name (AR)",
                                        type: "text",
                                        required: true
                                    },
                                    {
                                        key: "nameEn",
                                        ar: "الاسم (إنجليزي)",
                                        en: "Name (EN)",
                                        type: "text",
                                        required: true
                                    },
                                    {
                                        key: "deliveryFee",
                                        ar: "رسوم التوصيل للمنطقة (د.ب) - اختياري",
                                        en: "Delivery Fee (BHD) - Optional",
                                        type: "number"
                                    },
                                    {
                                        key: "minOrderAmount",
                                        ar: "الحد الأدنى للطلب (د.ب)",
                                        en: "Min Order Amount (BHD)",
                                        type: "number"
                                    },
                                    {
                                        key: "isActive",
                                        ar: "مفعلة",
                                        en: "Active",
                                        type: "checkbox"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this),
                    tab === "promos" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        resource: "promos",
                        titleAr: "أكواد الخصم والعروض",
                        titleEn: "Promo & Discount Codes",
                        locale: locale,
                        fields: [
                            {
                                key: "code",
                                ar: "الكود",
                                en: "Code",
                                type: "text",
                                required: true
                            },
                            {
                                key: "discountType",
                                ar: "نوع الخصم",
                                en: "Discount type",
                                type: "select",
                                options: [
                                    {
                                        value: "percent",
                                        label: lbl("نسبة %", "Percent %")
                                    },
                                    {
                                        value: "amount",
                                        label: lbl("مبلغ ثابت", "Fixed amount")
                                    }
                                ]
                            },
                            {
                                key: "discountValue",
                                ar: "قيمة الخصم",
                                en: "Discount value",
                                type: "number",
                                required: true
                            },
                            {
                                key: "validFrom",
                                ar: "صالح من",
                                en: "Valid from",
                                type: "datetime"
                            },
                            {
                                key: "validUntil",
                                ar: "تاريخ الانتهاء",
                                en: "Expires at",
                                type: "datetime"
                            },
                            {
                                key: "maxUsageCount",
                                ar: "سقف عدد الطلبات (فارغ = بلا حد)",
                                en: "Max usage count (empty = unlimited)",
                                type: "number"
                            },
                            {
                                key: "currentUsageCount",
                                ar: "الاستخدام الحالي",
                                en: "Used",
                                type: "number",
                                table: true
                            },
                            {
                                key: "isActive",
                                ar: "مفعل",
                                en: "Active",
                                type: "checkbox"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 500,
                        columnNumber: 11
                    }, this),
                    tab === "popups" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        resource: "popups",
                        titleAr: "النوافذ الإعلانية المنبثقة",
                        titleEn: "Popup Announcements",
                        locale: locale,
                        fields: [
                            {
                                key: "titleAr",
                                ar: "العنوان (عربي)",
                                en: "Title (AR)",
                                type: "text",
                                required: true
                            },
                            {
                                key: "titleEn",
                                ar: "العنوان (إنجليزي)",
                                en: "Title (EN)",
                                type: "text",
                                required: true
                            },
                            {
                                key: "bodyAr",
                                ar: "النص (عربي)",
                                en: "Body (AR)",
                                type: "textarea"
                            },
                            {
                                key: "bodyEn",
                                ar: "النص (إنجليزي)",
                                en: "Body (EN)",
                                type: "textarea"
                            },
                            {
                                key: "imageUrl",
                                ar: "صورة",
                                en: "Image",
                                type: "image"
                            },
                            {
                                key: "startsAt",
                                ar: "يبدأ في",
                                en: "Starts at",
                                type: "datetime"
                            },
                            {
                                key: "endsAt",
                                ar: "ينتهي في",
                                en: "Ends at",
                                type: "datetime"
                            },
                            {
                                key: "isActive",
                                ar: "مفعل",
                                en: "Active",
                                type: "checkbox"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this),
                    tab === "aggregators" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card p-4 text-sm text-muted-c",
                                children: lbl("أضف شركات التوصيل (مثل Parcel و Webey) مع مفاتيح API الخاصة بها. عند وصول طلب توصيل يتم بثه تلقائياً لجميع الشركات المفعلة، وأول شركة تقبل الطلب تقفله عن البقية عبر نقطة النهاية /api/delivery/accept.", "Add delivery companies (e.g. Parcel, Webey) with their API keys. Delivery orders are automatically broadcasted to all active apps; the first app to accept locks the order for the rest via the /api/delivery/accept endpoint.")
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                resource: "aggregators",
                                titleAr: "شركات وتطبيقات التوصيل",
                                titleEn: "Delivery Aggregators",
                                locale: locale,
                                fields: [
                                    {
                                        key: "name",
                                        ar: "اسم الشركة",
                                        en: "Company name",
                                        type: "text",
                                        required: true
                                    },
                                    {
                                        key: "apiUrl",
                                        ar: "رابط API",
                                        en: "API URL",
                                        type: "text"
                                    },
                                    {
                                        key: "apiKey",
                                        ar: "مفتاح API",
                                        en: "API key",
                                        type: "text"
                                    },
                                    {
                                        key: "isActive",
                                        ar: "مفعلة",
                                        en: "Active",
                                        type: "checkbox"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this),
                    tab === "customers" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomersList, {
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                resource: "bans",
                                titleAr: "قائمة الحظر (بريد / هاتف / عنوان)",
                                titleEn: "Ban List (email / phone / address)",
                                locale: locale,
                                fields: [
                                    {
                                        key: "banType",
                                        ar: "نوع الحظر",
                                        en: "Ban type",
                                        type: "select",
                                        options: [
                                            {
                                                value: "email",
                                                label: lbl("بريد إلكتروني", "Email")
                                            },
                                            {
                                                value: "phone",
                                                label: lbl("رقم هاتف", "Phone")
                                            },
                                            {
                                                value: "address",
                                                label: lbl("عنوان", "Address")
                                            }
                                        ],
                                        required: true
                                    },
                                    {
                                        key: "value",
                                        ar: "القيمة",
                                        en: "Value",
                                        type: "text",
                                        required: true
                                    },
                                    {
                                        key: "reason",
                                        ar: "السبب",
                                        en: "Reason",
                                        type: "textarea"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 564,
                        columnNumber: 11
                    }, this),
                    tab === "staff" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResourceManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        resource: "staff",
                        titleAr: "الموظفون والصلاحيات",
                        titleEn: "Staff & Permissions",
                        locale: locale,
                        fields: [
                            {
                                key: "username",
                                ar: "اسم المستخدم",
                                en: "Username",
                                type: "text",
                                required: true
                            },
                            {
                                key: "fullName",
                                ar: "الاسم الكامل",
                                en: "Full name",
                                type: "text",
                                required: true
                            },
                            {
                                key: "email",
                                ar: "البريد الإلكتروني",
                                en: "Email",
                                type: "text"
                            },
                            {
                                key: "password",
                                ar: "كلمة المرور (اتركها فارغة للإبقاء)",
                                en: "Password (leave empty to keep)",
                                type: "password"
                            },
                            {
                                key: "role",
                                ar: "الدور",
                                en: "Role",
                                type: "select",
                                options: [
                                    {
                                        value: "superadmin",
                                        label: lbl("مدير عام", "Super admin")
                                    },
                                    {
                                        value: "manager",
                                        label: lbl("مدير", "Manager")
                                    },
                                    {
                                        value: "staff",
                                        label: lbl("موظف", "Staff")
                                    }
                                ]
                            },
                            {
                                key: "isActive",
                                ar: "مفعل",
                                en: "Active",
                                type: "checkbox"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 582,
                        columnNumber: 11
                    }, this),
                    tab === "settings" && me.role !== "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SettingsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        locale: locale
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                        lineNumber: 599,
                        columnNumber: 55
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/AdminApp.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/AdminApp.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s(AdminApp, "AlqihgulK+hGJSQ0tfhcIsbE4cY=");
_c = AdminApp;
function CustomersList({ locale }) {
    _s1();
    const ar = locale === "ar";
    const lbl = (a, e)=>ar ? a : e;
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomersList.useCallback[load]": async ()=>{
            const res = await fetch("/api/admin/customers");
            if (res.ok) setRows((await res.json()).data ?? []);
        }
    }["CustomersList.useCallback[load]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomersList.useEffect": ()=>{
            load();
        }
    }["CustomersList.useEffect"], [
        load
    ]);
    const toggleBan = async (row)=>{
        await fetch("/api/admin/customers", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: row.id,
                isBanned: !row.isBanned
            })
        });
        load();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-extrabold text-lg text-primary-c mb-4",
                children: lbl("العملاء المسجلون", "Registered Customers")
            }, void 0, false, {
                fileName: "[project]/src/components/admin/AdminApp.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-black/10 text-muted-c text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-start",
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 635,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-start px-2",
                                        children: lbl("الاسم", "Name")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-start px-2",
                                        children: lbl("البريد", "Email")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-start px-2",
                                        children: lbl("الهاتف", "Phone")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-2 text-end",
                                        children: lbl("الحالة", "Status")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                lineNumber: 634,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                            lineNumber: 633,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2",
                                                children: r.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-2 font-bold",
                                                children: r.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 646,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-2",
                                                dir: "ltr",
                                                children: r.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 647,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 px-2",
                                                dir: "ltr",
                                                children: r.phone
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-2 text-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleBan(r),
                                                    className: `text-xs font-bold px-3 py-1 rounded-full ${r.isBanned ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`,
                                                    children: r.isBanned ? lbl("محظور — إلغاء الحظر", "Banned — Unban") : lbl("نشط — حظر", "Active — Ban")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/AdminApp.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this)),
                                rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 5,
                                        className: "py-8 text-center text-muted-c",
                                        children: lbl("لا يوجد عملاء بعد", "No customers yet")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/AdminApp.tsx",
                                        lineNumber: 656,
                                        columnNumber: 39
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                                    lineNumber: 656,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/AdminApp.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/AdminApp.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/AdminApp.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/AdminApp.tsx",
        lineNumber: 629,
        columnNumber: 5
    }, this);
}
_s1(CustomersList, "5Hc2Z4fqE0604YiZtoX00Yp48C4=");
_c1 = CustomersList;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminApp");
__turbopack_context__.k.register(_c1, "CustomersList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0pc23eq._.js.map