module.exports = [
"[project]/src/lib/openingHours.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRestaurantOpen",
    ()=>isRestaurantOpen
]);
function isRestaurantOpen() {
    const now = new Date();
    // الحصول على الوقت الحالي بالساعات والدقائق
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTimeInMinutes = currentHours * 60 + currentMinutes;
    // الفترة الأولى: من 11:00 صباحاً (660 دقيقة) إلى 3:00 عصراً (900 دقيقة)
    const shift1Start = 11 * 60; // 11:00
    const shift1End = 15 * 60; // 15:00
    // الفترة الثانية: من 6:00 مساءً (1080 دقيقة) إلى 11:00 مساءً (1380 دقيقة)
    const shift2Start = 18 * 60; // 18:00
    const shift2End = 23 * 60; // 23:00
    const inShift1 = currentTimeInMinutes >= shift1Start && currentTimeInMinutes < shift1End;
    const inShift2 = currentTimeInMinutes >= shift2Start && currentTimeInMinutes < shift2End;
    return inShift1 || inShift2;
}
}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/StoreFront.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreFront
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openingHours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/openingHours.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function price(n) {
    return n.toFixed(3);
}
function StoreFront(props) {
    const { locale, settings, content, categories, items, sizes, governorates, regions, popups } = props;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDict"])(locale);
    const ar = locale === "ar";
    const L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((o)=>ar ? o.nameAr : o.nameEn, [
        ar
    ]);
    const C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, fallback = "")=>content[key] ? ar ? content[key].ar : content[key].en : fallback, [
        content,
        ar
    ]);
    const [activeCat, setActiveCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalItem, setModalItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalSize, setModalSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalQty, setModalQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [dismissedPopups, setDismissedPopups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [me, setMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showOrders, setShowOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [myOrders, setMyOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedOrder, setSelectedOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* Alert state for status change */ const [alertingOrderId, setAlertingOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const prevOrdersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    /* checkout state */ const [checkoutOpen, setCheckoutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderType, setOrderType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("delivery");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [govId, setGovId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [regionId, setRegionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [payment, setPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cash");
    const [promo, setPromo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [promoResult, setPromoResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [promoMsg, setPromoMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [placing, setPlacing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderDone, setOrderDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const playAlertSound = ()=>{
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(587.33, ctx.currentTime); // نغمة التنبيه
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        } catch  {}
    };
    const fetchOrdersSilent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            let ordersList = [];
            if (me) {
                const res = await fetch("/api/orders");
                const d = await res.json();
                if (d.orders && Array.isArray(d.orders)) {
                    ordersList = d.orders;
                }
            } else {
                const savedNumbersRaw = localStorage.getItem("jowdi_guest_orders");
                const savedNumbers = savedNumbersRaw ? JSON.parse(savedNumbersRaw) : [];
                if (savedNumbers.length > 0) {
                    const fetchedOrders = await Promise.all(savedNumbers.map(async (num)=>{
                        try {
                            const res = await fetch(`/api/orders?orderNumber=${num}`);
                            const d = await res.json();
                            return d.ok && d.order ? d.order : null;
                        } catch  {
                            return null;
                        }
                    }));
                    ordersList = fetchedOrders.filter((o)=>o !== null);
                }
            }
            let statusChanged = false;
            ordersList.forEach((newOrder)=>{
                const oldStatus = prevOrdersRef.current.get(newOrder.id);
                if (oldStatus && oldStatus !== newOrder.status) {
                    statusChanged = true;
                    setAlertingOrderId(newOrder.id);
                    playAlertSound();
                    setTimeout(()=>{
                        setAlertingOrderId(null);
                    }, 2000);
                }
                prevOrdersRef.current.set(newOrder.id, newOrder.status);
            });
            setMyOrders(ordersList);
            if (selectedOrder) {
                const updatedSelected = ordersList.find((o)=>o.id === selectedOrder.id);
                if (updatedSelected) setSelectedOrder(updatedSelected);
            }
        } catch  {}
    }, [
        me,
        selectedOrder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem("jowdi_cart");
            if (saved) setCart(JSON.parse(saved));
        } catch  {}
        fetch("/api/auth/me").then((r)=>r.json()).then((d)=>{
            if (d.user) {
                setMe(d.user);
                setName(d.user.fullName);
                setPhone(d.user.phone);
                setEmail(d.user.email);
                if (d.user.governorateId) setGovId(d.user.governorateId);
                if (d.user.regionId) setRegionId(d.user.regionId);
                if (d.user.addressDetails) setAddress(d.user.addressDetails);
            }
        }).catch(()=>{});
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("jowdi_cart", JSON.stringify(cart));
    }, [
        cart
    ]);
    // Polling للتحقق من تحديثات حالة الطلب كل 10 ثوانٍ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchOrdersSilent();
        const interval = setInterval(fetchOrdersSilent, 10000);
        return ()=>clearInterval(interval);
    }, [
        fetchOrdersSilent
    ]);
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
    const itemSizesFor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((itemId)=>sizes.filter((s)=>s.itemId === itemId && s.isAvailable), [
        sizes
    ]);
    const effectivePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item, sizeId)=>{
        if (sizeId) {
            const s = sizes.find((x)=>x.id === sizeId);
            if (s) {
                const d = Number(s.discountPercent) > 0 ? Number(s.discountPercent) : 0;
                return Number(s.price) * (1 - d / 100);
            }
        }
        return Number(item.basePrice) * (1 - (Number(item.discountPercent) || 0) / 100);
    }, [
        sizes
    ]);
    const addToCart = (item, sizeId, qty)=>{
        setCart((prev)=>{
            const existing = prev.find((l)=>l.itemId === item.id && l.sizeId === sizeId);
            if (existing) {
                return prev.map((l)=>l === existing ? {
                        ...l,
                        quantity: l.quantity + qty
                    } : l);
            }
            return [
                ...prev,
                {
                    itemId: item.id,
                    sizeId,
                    quantity: qty
                }
            ];
        });
        setModalItem(null);
        setCartOpen(true);
    };
    const cartDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return cart.map((line)=>{
            const item = items.find((i)=>i.id === line.itemId);
            if (!item) return null;
            const size = line.sizeId ? sizes.find((s)=>s.id === line.sizeId) ?? null : null;
            const unit = effectivePrice(item, line.sizeId);
            return {
                line,
                item,
                size,
                unit,
                total: unit * line.quantity
            };
        }).filter((x)=>x !== null);
    }, [
        cart,
        items,
        sizes,
        effectivePrice
    ]);
    const subtotal = cartDetails.reduce((s, l)=>s + l.total, 0);
    // قراءة سعر التوصيل المخصص للمنطقة المختارة، وفي حال عدم وجوده يتم استخدام السعر الأساسي
    const selectedRegionObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!regionId) return null;
        return regions.find((r)=>r.id === Number(regionId)) ?? null;
    }, [
        regionId,
        regions
    ]);
    const deliveryFeeBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedRegionObj && selectedRegionObj.deliveryFee !== undefined && selectedRegionObj.deliveryFee !== null && selectedRegionObj.deliveryFee !== "") {
            return Number(selectedRegionObj.deliveryFee);
        }
        return Number(settings.delivery_fee_base || "1.5");
    }, [
        selectedRegionObj,
        settings.delivery_fee_base
    ]);
    const shareEnabled = settings.delivery_share_enabled === "1";
    const customerShare = shareEnabled ? Number(settings.delivery_customer_share_percent || "50") : 100;
    const deliveryFeeCustomer = orderType === "delivery" ? deliveryFeeBase * customerShare / 100 : 0;
    const discountAmount = promoResult ? promoResult.amount : 0;
    const grandTotal = Math.max(0, subtotal - discountAmount) + deliveryFeeCustomer;
    const applyPromo = async ()=>{
        setPromoMsg("");
        if (!promo.trim()) return;
        const res = await fetch("/api/orders", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: promo,
                subtotal
            })
        });
        const d = await res.json();
        if (d.valid) {
            setPromoResult({
                code: d.code,
                amount: d.amount
            });
            setPromoMsg(t.promoApplied);
        } else {
            setPromoResult(null);
            setPromoMsg(t.promoInvalid);
        }
    };
    const placeOrder = async ()=>{
        setErrorMsg("");
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$openingHours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRestaurantOpen"])()) {
            setErrorMsg(t.restaurantClosed);
            return;
        }
        if (!name.trim() || !phone.trim()) {
            setErrorMsg(t.requiredFields);
            return;
        }
        if (orderType === "delivery" && (!govId || !regionId || !address.trim())) {
            setErrorMsg(t.requiredFields);
            return;
        }
        if (orderType === "delivery" && selectedRegionObj) {
            const minOrder = Number(selectedRegionObj.minOrderAmount || 0);
            if (subtotal < minOrder) {
                setErrorMsg(ar ? `عذراً، الحد الأدنى للطلب لمنطقة ${selectedRegionObj.nameAr} هو ${minOrder.toFixed(3)} ${t.currency}` : `Sorry, the minimum order for ${selectedRegionObj.nameEn} is ${minOrder.toFixed(3)} ${t.currency}`);
                return;
            }
        }
        setPlacing(true);
        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    customerName: name,
                    customerPhone: phone,
                    customerEmail: email || undefined,
                    orderType,
                    governorateId: govId || undefined,
                    regionId: regionId || undefined,
                    addressDetails: address || undefined,
                    paymentMethod: payment,
                    promoCode: promoResult?.code,
                    notes,
                    locale,
                    lines: cart
                })
            });
            const d = await res.json();
            if (d.ok) {
                setOrderDone({
                    orderNumber: d.orderNumber,
                    total: d.total
                });
                if (!me) {
                    try {
                        const currentGuestOrdersRaw = localStorage.getItem("jowdi_guest_orders");
                        const currentGuestOrders = currentGuestOrdersRaw ? JSON.parse(currentGuestOrdersRaw) : [];
                        currentGuestOrders.unshift(d.orderNumber);
                        localStorage.setItem("jowdi_guest_orders", JSON.stringify(currentGuestOrders));
                    } catch  {}
                }
                setCart([]);
                setPromoResult(null);
                setPromo("");
                fetchOrdersSilent();
            } else if (d.error === "banned") {
                setErrorMsg(t.banned);
            } else if (d.error === "promo_invalid") {
                setErrorMsg(t.promoInvalid);
            } else {
                setErrorMsg(ar ? "حدث خطأ، حاول مرة أخرى" : "Something went wrong, please try again");
            }
        } finally{
            setPlacing(false);
        }
    };
    const loadMyOrders = async ()=>{
        setShowOrders(true);
        await fetchOrdersSilent();
    };
    const logout = async ()=>{
        await fetch("/api/auth/logout", {
            method: "POST"
        });
        window.location.reload();
    };
    const visibleCats = categories.filter((c)=>!c.parentId);
    const filteredItems = activeCat === 0 ? items : items.filter((i)=>{
        const childIds = categories.filter((c)=>c.parentId === activeCat).map((c)=>c.id);
        return i.categoryId === activeCat || childIds.includes(i.categoryId);
    });
    const heroImage = settings.hero_image || "/hero.jpg";
    const logo = settings.logo_url || "/logo.png";
    const currency = t.currency;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-black/5 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: t.brand,
                                    className: "h-10 w-auto object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-extrabold text-primary-c leading-5",
                                            children: t.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-c",
                                            children: ar ? "Jowdi Restaurant" : "مطعم الجودي"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-6 text-sm font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#home",
                                    className: "hover:text-accent-c",
                                    children: t.home
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#menu",
                                    className: "hover:text-accent-c",
                                    children: t.menu
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#about",
                                    className: "hover:text-accent-c",
                                    children: t.about
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "hover:text-accent-c",
                                    children: t.contact
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: switchLocale,
                                    className: "px-2.5 py-1.5 rounded-full border border-primary-c text-primary-c text-xs sm:text-sm font-bold hover:bg-primary-c hover:text-white transition",
                                    children: t.language
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>loadMyOrders(),
                                    className: "px-2 py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:text-accent-c transition cursor-pointer",
                                    children: t.myOrders
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                me ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "px-2 py-1.5 rounded-full text-xs sm:text-sm text-muted-c hover:text-red-500",
                                    children: t.logout
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/login",
                                    className: "px-2 py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:text-accent-c",
                                    children: t.login
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCartOpen(true),
                                    className: "relative btn-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🛒"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden xs:inline",
                                            children: t.cart
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-2 -end-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center",
                                            children: cart.reduce((s, l)=>s + l.quantity, 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StoreFront.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                className: "relative min-h-[70vh] flex items-center justify-center text-center",
                style: {
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: "var(--hero-overlay)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-4 py-24 text-white max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-extrabold drop-shadow-lg",
                                children: C("hero_title", t.brand)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-lg md:text-2xl opacity-95 leading-relaxed",
                                children: C("hero_subtitle", t.tagline)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#menu",
                                className: "inline-block mt-8 btn-accent px-10 py-4 rounded-full text-lg font-extrabold shadow-xl hover:scale-105 transition",
                                children: t.heroCta
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "menu",
                className: "max-w-6xl mx-auto px-4 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-extrabold text-center text-primary-c",
                        children: C("menu_title", t.menu)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-muted-c mt-2",
                        children: C("menu_subtitle", "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap justify-center mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCat(0),
                                className: `px-5 py-2 rounded-full font-bold text-sm transition ${activeCat === 0 ? "btn-primary" : "bg-surface border border-black/10 hover:border-primary-c"}`,
                                children: t.all
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            visibleCats.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCat(c.id),
                                    className: `px-5 py-2 rounded-full font-bold text-sm transition ${activeCat === c.id ? "btn-primary" : "bg-surface border border-black/10 hover:border-primary-c"}`,
                                    children: L(c)
                                }, c.id, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10",
                        children: filteredItems.map((item)=>{
                            const szs = itemSizesFor(item.id);
                            const minPrice = szs.length ? Math.min(...szs.map((s)=>Number(s.price) * (1 - Number(s.discountPercent) / 100))) : effectivePrice(item, null);
                            const hasDiscount = Number(item.discountPercent) > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `card overflow-hidden flex flex-col ${!item.isAvailable ? "opacity-50 grayscale" : "hover:shadow-xl hover:-translate-y-1 transition"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-44 bg-black/5 relative",
                                        children: [
                                            item.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.imageUrl,
                                                alt: L(item),
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 445,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full flex items-center justify-center text-6xl",
                                                children: "🍽️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 447,
                                                columnNumber: 21
                                            }, this),
                                            !item.isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-3 start-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full",
                                                children: t.unavailable
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 450,
                                                columnNumber: 21
                                            }, this),
                                            hasDiscount && item.isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-3 start-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full",
                                                children: [
                                                    "-",
                                                    Number(item.discountPercent),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 453,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 flex flex-col flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-extrabold text-lg",
                                                children: L(item)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-c mt-1 line-clamp-2 flex-1",
                                                children: ar ? item.descriptionAr : item.descriptionEn
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 458,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-extrabold text-accent-c text-lg",
                                                        children: [
                                                            szs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-c font-normal me-1",
                                                                children: ar ? "يبدأ من" : "from"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 42
                                                            }, this),
                                                            price(minPrice),
                                                            " ",
                                                            currency
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StoreFront.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !item.isAvailable,
                                                        onClick: ()=>{
                                                            if (szs.length > 0) {
                                                                setModalItem(item);
                                                                setModalSize(szs[0].id);
                                                                setModalQty(1);
                                                            } else {
                                                                addToCart(item, null, 1);
                                                            }
                                                        },
                                                        className: "btn-primary px-4 py-2 rounded-full text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed",
                                                        children: item.isAvailable ? `+ ${t.addToCart}` : t.unavailable
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/StoreFront.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 456,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "bg-surface border-y border-black/5 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-primary-c",
                            children: C("about_title", t.about)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg leading-relaxed text-muted-c",
                            children: C("about_body", "")
                        }, void 0, false, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StoreFront.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                id: "contact",
                className: "bg-primary-c text-white py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-extrabold text-xl",
                                        children: t.brand
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 opacity-80 text-sm",
                                        children: C("hero_subtitle", t.tagline)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold",
                                        children: t.contact
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 opacity-80 text-sm",
                                        children: [
                                            "📞 ",
                                            C("contact_phone", "")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "opacity-80 text-sm",
                                        children: [
                                            "📍 ",
                                            C("contact_address", "")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold",
                                        children: ar ? "ساعات العمل" : "Opening Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 opacity-80 text-sm",
                                        children: [
                                            "🕐 ",
                                            C("opening_hours", "")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/StoreFront.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8 opacity-60 text-xs",
                        children: C("footer_text", "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/admin",
                "aria-label": "admin",
                className: "fixed bottom-0 left-0 w-10 h-10 z-50",
                style: {
                    background: "transparent",
                    color: "transparent"
                },
                children: "."
            }, void 0, false, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 515,
                columnNumber: 7
            }, this),
            modalItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
                onClick: ()=>setModalItem(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card w-full max-w-md p-6",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-extrabold",
                                    children: L(modalItem)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalItem(null),
                                    className: "text-muted-c hover:text-red-500 text-xl",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 530,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 528,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-c mt-1",
                            children: ar ? modalItem.descriptionAr : modalItem.descriptionEn
                        }, void 0, false, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-sm mb-2",
                                    children: t.size
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: itemSizesFor(modalItem.id).map((s)=>{
                                        const p = Number(s.price) * (1 - Number(s.discountPercent) / 100);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModalSize(s.id),
                                            className: `px-4 py-2 rounded-xl border text-sm font-bold transition ${modalSize === s.id ? "btn-primary border-transparent" : "border-black/15 hover:border-primary-c"}`,
                                            children: [
                                                L(s),
                                                " — ",
                                                price(p),
                                                " ",
                                                currency,
                                                Number(s.discountPercent) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ms-1 text-xs text-green-500",
                                                    children: [
                                                        "-",
                                                        Number(s.discountPercent),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 57
                                                }, this)
                                            ]
                                        }, s.id, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 539,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-sm",
                                    children: t.quantity
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModalQty((q)=>Math.max(1, q - 1)),
                                            className: "w-8 h-8 rounded-full border border-black/15 font-bold",
                                            children: "−"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-8 text-center font-bold",
                                            children: modalQty
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 551,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModalQty((q)=>Math.min(50, q + 1)),
                                            className: "w-8 h-8 rounded-full border border-black/15 font-bold",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 552,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>addToCart(modalItem, modalSize, modalQty),
                            className: "btn-accent w-full mt-6 py-3 rounded-xl font-extrabold",
                            children: [
                                t.addToCart,
                                " — ",
                                price(effectivePrice(modalItem, modalSize) * modalQty),
                                " ",
                                currency
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 555,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StoreFront.tsx",
                    lineNumber: 527,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 526,
                columnNumber: 9
            }, this),
            cartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex justify-end",
                onClick: ()=>{
                    setCartOpen(false);
                    setCheckoutOpen(false);
                    setOrderDone(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface w-full max-w-md h-full overflow-y-auto p-5 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-extrabold text-primary-c",
                                    children: checkoutOpen ? t.checkout : t.cart
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCartOpen(false);
                                        setCheckoutOpen(false);
                                        setOrderDone(null);
                                    },
                                    className: "text-muted-c hover:text-red-500 text-xl",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this),
                        orderDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl",
                                    children: "✅"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 576,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-2xl font-extrabold mt-4 text-green-600",
                                    children: t.orderSuccess
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-muted-c",
                                    children: t.orderNumber
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-extrabold text-primary-c",
                                    children: orderDone.orderNumber
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 579,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 font-bold",
                                    children: [
                                        t.total,
                                        ": ",
                                        orderDone.total,
                                        " ",
                                        currency
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 580,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setCartOpen(false);
                                        setCheckoutOpen(false);
                                        setOrderDone(null);
                                    },
                                    className: "btn-primary mt-8 px-8 py-3 rounded-full font-bold",
                                    children: t.continueShopping
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 581,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 575,
                            columnNumber: 15
                        }, this) : cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-20 text-muted-c",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-4",
                                    children: "🛒"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this),
                                t.emptyCart
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 586,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-3",
                                    children: cartDetails.map(({ line, item, size, unit, total }, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 border border-black/5 rounded-xl p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-sm",
                                                            children: [
                                                                L(item),
                                                                size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-c font-normal",
                                                                    children: [
                                                                        " — ",
                                                                        L(size)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                                    lineNumber: 596,
                                                                    columnNumber: 78
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-c",
                                                            children: [
                                                                price(unit),
                                                                " ",
                                                                currency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCart((p)=>p.map((l)=>l === line ? {
                                                                            ...l,
                                                                            quantity: Math.max(1, l.quantity - 1)
                                                                        } : l)),
                                                            className: "w-7 h-7 rounded-full border border-black/15 text-sm font-bold",
                                                            children: "−"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-7 text-center text-sm font-bold",
                                                            children: line.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCart((p)=>p.map((l)=>l === line ? {
                                                                            ...l,
                                                                            quantity: Math.min(50, l.quantity + 1)
                                                                        } : l)),
                                                            className: "w-7 h-7 rounded-full border border-black/15 text-sm font-bold",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-sm w-16 text-end",
                                                    children: price(total)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCart((p)=>p.filter((l)=>l !== line)),
                                                    className: "text-red-400 hover:text-red-600",
                                                    children: "🗑"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 594,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 592,
                                    columnNumber: 17
                                }, this),
                                checkoutOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-sm mb-2",
                                                    children: t.orderType
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-2",
                                                    children: [
                                                        [
                                                            "dine_in",
                                                            t.dineIn
                                                        ],
                                                        [
                                                            "takeaway",
                                                            t.takeaway
                                                        ],
                                                        [
                                                            "delivery",
                                                            t.delivery
                                                        ]
                                                    ].map(([v, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setOrderType(v),
                                                            className: `py-2 rounded-xl text-sm font-bold border transition ${orderType === v ? "btn-primary border-transparent" : "border-black/15"}`,
                                                            children: label
                                                        }, v, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 613,
                                            columnNumber: 21
                                        }, this),
                                        !me && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-muted-c font-bold",
                                            children: [
                                                t.guestCheckout,
                                                " — ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "text-accent-c underline",
                                                    href: "/login",
                                                    children: t.login
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 97
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 624,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            placeholder: `${t.fullName} *`,
                                            className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 626,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: phone,
                                            onChange: (e)=>setPhone(e.target.value),
                                            placeholder: `${t.phone} *`,
                                            className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm",
                                            dir: "ltr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 627,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: t.email,
                                            className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm",
                                            dir: "ltr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 628,
                                            columnNumber: 21
                                        }, this),
                                        orderType === "delivery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: govId,
                                                    onChange: (e)=>{
                                                        setGovId(e.target.value ? Number(e.target.value) : "");
                                                        setRegionId("");
                                                    },
                                                    className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: [
                                                                t.selectGovernorate,
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 27
                                                        }, this),
                                                        governorates.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: g.id,
                                                                children: L(g)
                                                            }, g.id, false, {
                                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 52
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: regionId,
                                                    onChange: (e)=>setRegionId(e.target.value ? Number(e.target.value) : ""),
                                                    className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm",
                                                    disabled: !govId,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: [
                                                                t.selectRegion,
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 27
                                                        }, this),
                                                        regions.filter((r)=>r.governorateId === govId).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: r.id,
                                                                children: L(r)
                                                            }, r.id, false, {
                                                                fileName: "[project]/src/components/StoreFront.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 88
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: address,
                                                    onChange: (e)=>setAddress(e.target.value),
                                                    placeholder: `${t.addressDetails} *`,
                                                    className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm",
                                                    rows: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-sm mb-2",
                                                    children: t.paymentMethod
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-2",
                                                    children: [
                                                        [
                                                            "cash",
                                                            t.cash
                                                        ],
                                                        [
                                                            "benefitpay",
                                                            t.benefitpay
                                                        ],
                                                        [
                                                            "card",
                                                            t.card
                                                        ]
                                                    ].map(([v, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPayment(v),
                                                            className: `py-2 rounded-xl text-xs font-bold border transition ${payment === v ? "btn-primary border-transparent" : "border-black/15"}`,
                                                            children: label
                                                        }, v, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 23
                                                }, this),
                                                payment !== "cash" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-amber-600 mt-1",
                                                    children: t.onlineNotConfigured
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 645,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: promo,
                                                    onChange: (e)=>setPromo(e.target.value),
                                                    placeholder: t.promoCode,
                                                    className: "flex-1 border border-black/15 rounded-xl px-4 py-2.5 text-sm uppercase",
                                                    dir: "ltr"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: applyPromo,
                                                    className: "btn-primary px-5 rounded-xl text-sm font-bold",
                                                    children: t.apply
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 658,
                                            columnNumber: 21
                                        }, this),
                                        promoMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs font-bold ${promoResult ? "text-green-600" : "text-red-500"}`,
                                            children: promoMsg
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 662,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: notes,
                                            onChange: (e)=>setNotes(e.target.value),
                                            placeholder: t.notes,
                                            className: "w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm",
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 664,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 611,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 border-t border-black/10 pt-4 space-y-1.5 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-c",
                                                    children: t.subtotal
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 57
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        price(subtotal),
                                                        " ",
                                                        currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 670,
                                            columnNumber: 19
                                        }, this),
                                        discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-green-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        t.discount,
                                                        " (",
                                                        promoResult?.code,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 95
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        "-",
                                                        price(discountAmount),
                                                        " ",
                                                        currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 142
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 671,
                                            columnNumber: 42
                                        }, this),
                                        checkoutOpen && orderType === "delivery" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-c",
                                                    children: t.deliveryFee
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        price(deliveryFeeCustomer),
                                                        " ",
                                                        currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 112
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 673,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-lg font-extrabold pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 85
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-accent-c",
                                                    children: [
                                                        price(checkoutOpen ? grandTotal : subtotal),
                                                        " ",
                                                        currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 107
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 675,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 669,
                                    columnNumber: 17
                                }, this),
                                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 bg-red-50 text-red-600 text-sm font-bold rounded-xl px-4 py-3",
                                    children: errorMsg
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 678,
                                    columnNumber: 30
                                }, this),
                                checkoutOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: placeOrder,
                                    disabled: placing,
                                    className: "btn-accent w-full mt-4 py-3.5 rounded-xl font-extrabold text-lg disabled:opacity-50",
                                    children: placing ? "..." : `${t.placeOrder} — ${price(grandTotal)} ${currency}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const manualOverride = settings.restaurant_manual_override;
                                        if (manualOverride === "closed") {
                                            setErrorMsg(ar ? "عذراً، المطعم مغلق حالياً من قبل الإدارة" : "Sorry, the restaurant is currently closed by management");
                                            return;
                                        }
                                        const open1 = settings.restaurant_open_time_1 || "11:00";
                                        const close1 = settings.restaurant_close_time_1 || "15:00";
                                        const open2 = settings.restaurant_open_time_2 || "18:00";
                                        const close2 = settings.restaurant_close_time_2 || "23:00";
                                        const isShift2Active = settings.restaurant_shift2_enabled === "1" || settings.restaurant_shift2_enabled === "true" || settings.restaurant_shift2_enabled === "on" || Boolean(open2 && close2 && open2 !== "00:00" && open2 !== "");
                                        const now = new Date();
                                        const currentMinutes = now.getHours() * 60 + now.getMinutes();
                                        const toMins = (tStr)=>{
                                            const [h, m] = tStr.split(":").map(Number);
                                            if (h === 0 && m === 0) return 1440;
                                            return h * 60 + m;
                                        };
                                        const inShift = (nowMins, startStr, endStr)=>{
                                            const startMins = toMins(startStr);
                                            let endMins = toMins(endStr);
                                            if (endMins < startMins) {
                                                return nowMins >= startMins || nowMins <= endMins;
                                            }
                                            return nowMins >= startMins && nowMins <= endMins;
                                        };
                                        const isShift1Open = inShift(currentMinutes, open1, close1);
                                        const isShift2Open = isShift2Active ? inShift(currentMinutes, open2, close2) : false;
                                        if (!isShift1Open && !isShift2Open) {
                                            if (isShift2Active) {
                                                setErrorMsg(ar ? `عذراً، المطعم مغلق حالياً. أوقات العمل: من ${open1} إلى ${close1} - ومن ${open2} إلى ${close2}` : `Sorry, restaurant closed. Hours: (${open1} to ${close1}) & (${open2} to ${close2})`);
                                            } else {
                                                setErrorMsg(ar ? `عذراً، المطعم مغلق حالياً. أوقات العمل الرسمية: من ${open1} إلى ${close1}` : `Sorry, restaurant closed. Working hours: from ${open1} to ${close1}`);
                                            }
                                            return;
                                        }
                                        setErrorMsg("");
                                        setCheckoutOpen(true);
                                    },
                                    className: "btn-primary w-full mt-4 py-3.5 rounded-xl font-extrabold text-lg",
                                    children: t.checkout
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StoreFront.tsx",
                    lineNumber: 568,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, this),
            popups && popups.length > 0 && popups.map((popup)=>{
                if (dismissedPopups.includes(popup.id)) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card w-full max-w-lg p-6 bg-surface shadow-2xl relative animate-in fade-in zoom-in duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDismissedPopups((prev)=>[
                                            ...prev,
                                            popup.id
                                        ]),
                                className: "absolute top-4 end-4 text-muted-c hover:text-red-500 text-xl font-bold",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 763,
                                columnNumber: 15
                            }, this),
                            popup.imageUrl && /* eslint-disable-next-line @next/next/no-img-element */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: popup.imageUrl,
                                alt: "",
                                className: "w-full h-48 object-cover rounded-xl mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 771,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-extrabold text-primary-c",
                                children: ar ? popup.titleAr : popup.titleEn
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 773,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-c mt-2 leading-relaxed",
                                children: ar ? popup.bodyAr : popup.bodyEn
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 774,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDismissedPopups((prev)=>[
                                            ...prev,
                                            popup.id
                                        ]),
                                className: "btn-primary w-full mt-6 py-3 rounded-xl font-extrabold",
                                children: ar ? "حسناً" : "OK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StoreFront.tsx",
                                lineNumber: 775,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StoreFront.tsx",
                        lineNumber: 762,
                        columnNumber: 13
                    }, this)
                }, popup.id, false, {
                    fileName: "[project]/src/components/StoreFront.tsx",
                    lineNumber: 761,
                    columnNumber: 11
                }, this);
            }),
            showOrders && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
                onClick: ()=>{
                    setShowOrders(false);
                    setSelectedOrder(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface w-full max-w-2xl max-h-[85vh] rounded-2xl p-6 overflow-y-auto shadow-2xl relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pb-4 border-b border-black/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-extrabold text-primary-c",
                                    children: t.myOrders
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 791,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowOrders(false);
                                        setSelectedOrder(null);
                                    },
                                    className: "text-muted-c hover:text-red-500 text-xl font-bold",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 792,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 790,
                            columnNumber: 13
                        }, this),
                        selectedOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedOrder(null),
                                    className: "text-sm font-bold text-accent-c hover:underline mb-4 flex items-center gap-1",
                                    children: [
                                        "← ",
                                        ar ? "العودة لقائمة الطلبات" : "Back to orders list"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 797,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-black/10 rounded-xl p-4 bg-black/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-extrabold text-lg text-primary-c",
                                                            children: selectedOrder.orderNumber
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-c mt-1",
                                                            children: new Date(selectedOrder.createdAt).toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-primary-c/10 text-primary-c text-xs font-bold px-3 py-1 rounded-full",
                                                    children: selectedOrder.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 801,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-2 border-t border-black/10 pt-3",
                                            children: selectedOrder.items?.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                ar ? it.nameAr : it.nameEn,
                                                                " ",
                                                                it.sizeNameAr && `(${ar ? it.sizeNameAr : it.sizeNameEn})`,
                                                                " × ",
                                                                it.quantity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 813,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            children: [
                                                                it.lineTotal,
                                                                " ",
                                                                currency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/StoreFront.tsx",
                                                            lineNumber: 814,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, it.id, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 810,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-3 border-t border-black/10 flex justify-between font-extrabold text-lg text-accent-c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        selectedOrder.total,
                                                        " ",
                                                        currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 818,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 800,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 796,
                            columnNumber: 15
                        }, this) : myOrders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 text-muted-c",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl mb-3",
                                    children: "📦"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 826,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: ar ? "لا توجد طلبات سابقة" : "No orders found"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 827,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 825,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-3",
                            children: myOrders.map((ord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedOrder(ord),
                                    className: "border border-black/10 rounded-xl p-4 hover:border-primary-c cursor-pointer transition flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-primary-c",
                                                    children: ord.orderNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-c mt-1",
                                                    children: new Date(ord.createdAt).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 837,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-extrabold text-accent-c",
                                                    children: [
                                                        ord.total,
                                                        " ",
                                                        currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-c",
                                                    children: ord.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StoreFront.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StoreFront.tsx",
                                            lineNumber: 841,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, ord.id, true, {
                                    fileName: "[project]/src/components/StoreFront.tsx",
                                    lineNumber: 832,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StoreFront.tsx",
                            lineNumber: 830,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StoreFront.tsx",
                    lineNumber: 789,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StoreFront.tsx",
                lineNumber: 788,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StoreFront.tsx",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0kip144._.js.map