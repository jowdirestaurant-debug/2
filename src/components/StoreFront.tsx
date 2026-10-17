"use client";
import { isRestaurantOpen } from "@/lib/openingHours";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { getDict, type Locale } from "@/lib/i18n";

/* ---------- Types ---------- */
type Category = { id: number; parentId: number | null; nameAr: string; nameEn: string; sortOrder: number; isActive: boolean };
type Size = { id: number; itemId: number; nameAr: string; nameEn: string; price: string; discountPercent: string; stock: number | null; isAvailable: boolean; sortOrder: number };
type Item = {
  id: number; categoryId: number; nameAr: string; nameEn: string;
  descriptionAr: string | null; descriptionEn: string | null;
  basePrice: string; discountPercent: string; imageUrl: string | null;
  isAvailable: boolean; sortOrder: number;
};
type Gov = { id: number; nameAr: string; nameEn: string };
type Region = { id: number; governorateId: number; nameAr: string; nameEn: string; deliveryFee?: string | number | null };
type Popup = { id: number; titleAr: string; titleEn: string; bodyAr: string | null; bodyEn: string | null; imageUrl: string | null };
type CartLine = { itemId: number; sizeId: number | null; quantity: number };
type Me = { id: number; fullName: string; email: string; phone: string; governorateId: number | null; regionId: number | null; addressDetails: string | null } | null;
type MyOrder = {
  id: number; orderNumber: string; status: string; orderType: string; total: string; createdAt: string;
  items: { id: number; nameAr: string; nameEn: string; sizeNameAr: string | null; sizeNameEn: string | null; quantity: number; lineTotal: string }[];
};

type Props = {
  locale: Locale;
  settings: Record<string, string>;
  content: Record<string, { ar: string; en: string }>;
  categories: Category[];
  items: (Item & { createdAt: string })[];
  sizes: Size[];
  governorates: Gov[];
  regions: Region[];
  popups: Popup[];
};

function price(n: number) {
  return n.toFixed(3);
}

export default function StoreFront(props: Props) {
  const { locale, settings, content, categories, items, sizes, governorates, regions, popups } = props;
  const t = getDict(locale);
  const ar = locale === "ar";
  const L = useCallback(<T extends { nameAr: string; nameEn: string }>(o: T) => (ar ? o.nameAr : o.nameEn), [ar]);
  const C = useCallback((key: string, fallback = "") => (content[key] ? (ar ? content[key].ar : content[key].en) : fallback), [content, ar]);

  const [activeCat, setActiveCat] = useState<number | 0>(0);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalItem, setModalItem] = useState<Item | null>(null);
  const [modalSize, setModalSize] = useState<number | null>(null);
  const [modalQty, setModalQty] = useState(1);
  const [dismissedPopups, setDismissedPopups] = useState<number[]>([]);
  const [me, setMe] = useState<Me>(null);
  const [showOrders, setShowOrders] = useState(false);
  const [myOrders, setMyOrders] = useState<MyOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<MyOrder | null>(null);

  /* Alert state for status change */
  const [alertingOrderId, setAlertingOrderId] = useState<number | null>(null);
  const prevOrdersRef = useRef<Map<number, string>>(new Map());

  /* checkout state */
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderType, setOrderType] = useState<"dine_in" | "takeaway" | "delivery">("delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [govId, setGovId] = useState<number | "">("");
  const [regionId, setRegionId] = useState<number | "">("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cash");
  const [promo, setPromo] = useState("");
  const [promoResult, setPromoResult] = useState<{ code: string; amount: number } | null>(null);
  const [promoMsg, setPromoMsg] = useState("");
  const [notes, setNotes] = useState("");
  const [placing, setPlacing] = useState(false);
  const [orderDone, setOrderDone] = useState<{ orderNumber: string; total: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const playAlertSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // نغمة التنبيه
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {}
  };

  const fetchOrdersSilent = useCallback(async () => {
    try {
      let ordersList: MyOrder[] = [];

      if (me) {
        const res = await fetch("/api/orders");
        const d = await res.json();
        if (d.orders && Array.isArray(d.orders)) {
          ordersList = d.orders;
        }
      } else {
        const savedNumbersRaw = localStorage.getItem("jowdi_guest_orders");
        const savedNumbers: string[] = savedNumbersRaw ? JSON.parse(savedNumbersRaw) : [];

        if (savedNumbers.length > 0) {
          const fetchedOrders = await Promise.all(
            savedNumbers.map(async (num) => {
              try {
                const res = await fetch(`/api/orders?orderNumber=${num}`);
                const d = await res.json();
                return d.ok && d.order ? d.order : null;
              } catch {
                return null;
              }
            })
          );
          ordersList = fetchedOrders.filter((o): o is MyOrder => o !== null);
        }
      }

      let statusChanged = false;
      ordersList.forEach((newOrder: MyOrder) => {
        const oldStatus = prevOrdersRef.current.get(newOrder.id);
        if (oldStatus && oldStatus !== newOrder.status) {
          statusChanged = true;
          setAlertingOrderId(newOrder.id);
          playAlertSound();
          setTimeout(() => {
            setAlertingOrderId(null);
          }, 2000);
        }
        prevOrdersRef.current.set(newOrder.id, newOrder.status);
      });

      setMyOrders(ordersList);

      if (selectedOrder) {
        const updatedSelected = ordersList.find((o: MyOrder) => o.id === selectedOrder.id);
        if (updatedSelected) setSelectedOrder(updatedSelected);
      }
    } catch {}
  }, [me, selectedOrder]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("jowdi_cart");
      if (saved) setCart(JSON.parse(saved));
    } catch {}
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (d.user) {
          setMe(d.user);
          setName(d.user.fullName);
          setPhone(d.user.phone);
          setEmail(d.user.email);
          if (d.user.governorateId) setGovId(d.user.governorateId);
          if (d.user.regionId) setRegionId(d.user.regionId);
          if (d.user.addressDetails) setAddress(d.user.addressDetails);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    localStorage.setItem("jowdi_cart", JSON.stringify(cart));
  }, [cart]);

  // Polling للتحقق من تحديثات حالة الطلب كل 10 ثوانٍ
  useEffect(() => {
    fetchOrdersSilent();
    const interval = setInterval(fetchOrdersSilent, 10000);
    return () => clearInterval(interval);
  }, [fetchOrdersSilent]);

  const switchLocale = async () => {
    await fetch("/api/auth/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: ar ? "en" : "ar" }),
    });
    window.location.reload();
  };

  const itemSizesFor = useCallback((itemId: number) => sizes.filter((s) => s.itemId === itemId && s.isAvailable), [sizes]);

  const effectivePrice = useCallback((item: Item, sizeId: number | null) => {
    if (sizeId) {
      const s = sizes.find((x) => x.id === sizeId);
      if (s) {
        const d = Number(s.discountPercent) > 0 ? Number(s.discountPercent) : 0;
        return Number(s.price) * (1 - d / 100);
      }
    }
    return Number(item.basePrice) * (1 - (Number(item.discountPercent) || 0) / 100);
  }, [sizes]);

  const addToCart = (item: Item, sizeId: number | null, qty: number) => {
    setCart((prev) => {
      const existing = prev.find((l) => l.itemId === item.id && l.sizeId === sizeId);
      if (existing) {
        return prev.map((l) => (l === existing ? { ...l, quantity: l.quantity + qty } : l));
      }
      return [...prev, { itemId: item.id, sizeId, quantity: qty }];
    });
    setModalItem(null);
    setCartOpen(true);
  };

  const cartDetails = useMemo(() => {
    return cart
      .map((line) => {
        const item = items.find((i) => i.id === line.itemId);
        if (!item) return null;
        const size = line.sizeId ? sizes.find((s) => s.id === line.sizeId) ?? null : null;
        const unit = effectivePrice(item, line.sizeId);
        return { line, item, size, unit, total: unit * line.quantity };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }, [cart, items, sizes, effectivePrice]);

  const subtotal = cartDetails.reduce((s, l) => s + l.total, 0);
  // قراءة سعر التوصيل المخصص للمنطقة المختارة، وفي حال عدم وجوده يتم استخدام السعر الأساسي
  const selectedRegionObj = useMemo(() => {
    if (!regionId) return null;
    return regions.find((r) => r.id === Number(regionId)) ?? null;
  }, [regionId, regions]);

  const deliveryFeeBase = useMemo(() => {
    if (selectedRegionObj && selectedRegionObj.deliveryFee !== undefined && selectedRegionObj.deliveryFee !== null && selectedRegionObj.deliveryFee !== "") {
      return Number(selectedRegionObj.deliveryFee);
    }
    return Number(settings.delivery_fee_base || "1.5");
  }, [selectedRegionObj, settings.delivery_fee_base]);
  const shareEnabled = settings.delivery_share_enabled === "1";
  const customerShare = shareEnabled ? Number(settings.delivery_customer_share_percent || "50") : 100;
  const deliveryFeeCustomer = orderType === "delivery" ? (deliveryFeeBase * customerShare) / 100 : 0;
  const discountAmount = promoResult ? promoResult.amount : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount) + deliveryFeeCustomer;

  const applyPromo = async () => {
    setPromoMsg("");
    if (!promo.trim()) return;
    const res = await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: promo, subtotal }),
    });
    const d = await res.json();
    if (d.valid) {
      setPromoResult({ code: d.code, amount: d.amount });
      setPromoMsg(t.promoApplied);
    } else {
      setPromoResult(null);
      setPromoMsg(t.promoInvalid);
    }
  };

  const placeOrder = async () => {
    setErrorMsg("");
    if (!isRestaurantOpen()) {
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
    setPlacing(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          lines: cart,
        }),
      });
      const d = await res.json();
      if (d.ok) {
        setOrderDone({ orderNumber: d.orderNumber, total: d.total });
        if (!me) {
          try {
            const currentGuestOrdersRaw = localStorage.getItem("jowdi_guest_orders");
            const currentGuestOrders: string[] = currentGuestOrdersRaw ? JSON.parse(currentGuestOrdersRaw) : [];
            currentGuestOrders.unshift(d.orderNumber);
            localStorage.setItem("jowdi_guest_orders", JSON.stringify(currentGuestOrders));
          } catch {}
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
    } finally {
      setPlacing(false);
    }
  };

  const loadMyOrders = async () => {
    await fetchOrdersSilent();
    setShowOrders(true);
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.reload();
  };

  const visibleCats = categories.filter((c) => !c.parentId);
  const filteredItems = activeCat === 0 ? items : items.filter((i) => {
    const childIds = categories.filter((c) => c.parentId === activeCat).map((c) => c.id);
    return i.categoryId === activeCat || childIds.includes(i.categoryId);
  });

  const heroImage = settings.hero_image || "/hero.jpg";
  const logo = settings.logo_url || "/logo.png";
  const currency = t.currency;

  return (
    <div className="min-h-screen">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-black/5 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={t.brand} className="h-11 w-auto object-contain" />
            <div>
              <div className="font-extrabold text-primary-c leading-5">{t.brand}</div>
              <div className="text-xs text-muted-c">{ar ? "Jowdi Restaurant" : "مطعم الجودي"}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#home" className="hover:text-accent-c">{t.home}</a>
            <a href="#menu" className="hover:text-accent-c">{t.menu}</a>
            <a href="#about" className="hover:text-accent-c">{t.about}</a>
            <a href="#contact" className="hover:text-accent-c">{t.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={switchLocale} className="px-3 py-1.5 rounded-full border border-primary-c text-primary-c text-sm font-bold hover:bg-primary-c hover:text-white transition">
              {t.language}
            </button>
            <button 
  type="button"
  onClick={(e) => {
    e.stopPropagation();
    loadMyOrders();
  }} 
  className="relative z-50 px-3 py-1.5 rounded-full text-sm font-semibold hover:text-accent-c cursor-pointer pointer-events-auto"
>
  {t.myOrders}
</button>
            {me ? (
              <button onClick={logout} className="px-3 py-1.5 rounded-full text-sm text-muted-c hover:text-red-500">{t.logout}</button>
            ) : (
              <a href="/login" className="px-3 py-1.5 rounded-full text-sm font-semibold hover:text-accent-c">{t.login}</a>
            )}
            <button onClick={() => setCartOpen(true)} className="relative btn-primary px-4 py-2 rounded-full text-sm font-bold">
              🛒 {t.cart}
              {cart.length > 0 && (
                <span className="absolute -top-2 -end-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((s, l) => s + l.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="home" className="relative min-h-[70vh] flex items-center justify-center text-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 px-4 py-24 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{C("hero_title", t.brand)}</h1>
          <p className="mt-5 text-lg md:text-2xl opacity-95 leading-relaxed">{C("hero_subtitle", t.tagline)}</p>
          <a href="#menu" className="inline-block mt-8 btn-accent px-10 py-4 rounded-full text-lg font-extrabold shadow-xl hover:scale-105 transition">
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* ---------- Menu ---------- */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary-c">{C("menu_title", t.menu)}</h2>
        <p className="text-center text-muted-c mt-2">{C("menu_subtitle", "")}</p>

        <div className="flex gap-2 flex-wrap justify-center mt-8">
          <button onClick={() => setActiveCat(0)} className={`px-5 py-2 rounded-full font-bold text-sm transition ${activeCat === 0 ? "btn-primary" : "bg-surface border border-black/10 hover:border-primary-c"}`}>
            {t.all}
          </button>
          {visibleCats.map((c) => (
            <button key={c.id} onClick={() => setActiveCat(c.id)} className={`px-5 py-2 rounded-full font-bold text-sm transition ${activeCat === c.id ? "btn-primary" : "bg-surface border border-black/10 hover:border-primary-c"}`}>
              {L(c)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredItems.map((item) => {
            const szs = itemSizesFor(item.id);
            const minPrice = szs.length
              ? Math.min(...szs.map((s) => Number(s.price) * (1 - Number(s.discountPercent) / 100)))
              : effectivePrice(item, null);
            const hasDiscount = Number(item.discountPercent) > 0;
            return (
              <div key={item.id} className={`card overflow-hidden flex flex-col ${!item.isAvailable ? "opacity-50 grayscale" : "hover:shadow-xl hover:-translate-y-1 transition"}`}>
                <div className="h-44 bg-black/5 relative">
                  {item.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.imageUrl} alt={L(item)} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">🍽️</div>
                  )}
                  {!item.isAvailable && (
                    <span className="absolute top-3 start-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{t.unavailable}</span>
                  )}
                  {hasDiscount && item.isAvailable && (
                    <span className="absolute top-3 start-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">-{Number(item.discountPercent)}%</span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-extrabold text-lg">{L(item)}</h3>
                  <p className="text-sm text-muted-c mt-1 line-clamp-2 flex-1">{ar ? item.descriptionAr : item.descriptionEn}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="font-extrabold text-accent-c text-lg">
                      {szs.length > 0 && <span className="text-xs text-muted-c font-normal me-1">{ar ? "يبدأ من" : "from"}</span>}
                      {price(minPrice)} {currency}
                    </div>
                    <button
                      disabled={!item.isAvailable}
                      onClick={() => {
                        if (szs.length > 0) {
                          setModalItem(item);
                          setModalSize(szs[0].id);
                          setModalQty(1);
                        } else {
                          addToCart(item, null, 1);
                        }
                      }}
                      className="btn-primary px-4 py-2 rounded-full text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {item.isAvailable ? `+ ${t.addToCart}` : t.unavailable}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- About & Contact ---------- */}
      <section id="about" className="bg-surface border-y border-black/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-primary-c">{C("about_title", t.about)}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-c">{C("about_body", "")}</p>
        </div>
      </section>

      <footer id="contact" className="bg-primary-c text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-start">
          <div>
            <h3 className="font-extrabold text-xl">{t.brand}</h3>
            <p className="mt-2 opacity-80 text-sm">{C("hero_subtitle", t.tagline)}</p>
          </div>
          <div>
            <h3 className="font-bold">{t.contact}</h3>
            <p className="mt-2 opacity-80 text-sm">📞 {C("contact_phone", "")}</p>
            <p className="opacity-80 text-sm">📍 {C("contact_address", "")}</p>
          </div>
          <div>
            <h3 className="font-bold">{ar ? "ساعات العمل" : "Opening Hours"}</h3>
            <p className="mt-2 opacity-80 text-sm">🕐 {C("opening_hours", "")}</p>
          </div>
        </div>
        <div className="text-center mt-8 opacity-60 text-xs">{C("footer_text", "")}</div>
      </footer>

      {/* Hidden admin access button (bottom-left, same color as background) */}
      <a
        href="/admin"
        aria-label="admin"
        className="fixed bottom-0 left-0 w-10 h-10 z-50"
        style={{ background: "transparent", color: "transparent" }}
      >
        .
      </a>

      {/* ---------- Item size modal ---------- */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setModalItem(null)}>
          <div className="card w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-extrabold">{L(modalItem)}</h3>
              <button onClick={() => setModalItem(null)} className="text-muted-c hover:text-red-500 text-xl">✕</button>
            </div>
            <p className="text-sm text-muted-c mt-1">{ar ? modalItem.descriptionAr : modalItem.descriptionEn}</p>
            <div className="mt-4">
              <div className="font-bold text-sm mb-2">{t.size}</div>
              <div className="flex flex-wrap gap-2">
                {itemSizesFor(modalItem.id).map((s) => {
                  const p = Number(s.price) * (1 - Number(s.discountPercent) / 100);
                  return (
                    <button key={s.id} onClick={() => setModalSize(s.id)} className={`px-4 py-2 rounded-xl border text-sm font-bold transition ${modalSize === s.id ? "btn-primary border-transparent" : "border-black/15 hover:border-primary-c"}`}>
                      {L(s)} — {price(p)} {currency}
                      {Number(s.discountPercent) > 0 && <span className="ms-1 text-xs text-green-500">-{Number(s.discountPercent)}%</span>}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="font-bold text-sm">{t.quantity}</div>
              <div className="flex items-center gap-2">
                <button onClick={() => setModalQty((q) => Math.max(1, q - 1))} className="w-8 h-8 rounded-full border border-black/15 font-bold">−</button>
                <span className="w-8 text-center font-bold">{modalQty}</span>
                <button onClick={() => setModalQty((q) => Math.min(50, q + 1))} className="w-8 h-8 rounded-full border border-black/15 font-bold">+</button>
              </div>
            </div>
            <button
              onClick={() => addToCart(modalItem, modalSize, modalQty)}
              className="btn-accent w-full mt-6 py-3 rounded-xl font-extrabold"
            >
              {t.addToCart} — {price(effectivePrice(modalItem, modalSize) * modalQty)} {currency}
            </button>
          </div>
        </div>
      )}

      {/* ---------- Cart / Checkout drawer ---------- */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end" onClick={() => { setCartOpen(false); setCheckoutOpen(false); setOrderDone(null); }}>
          <div className="bg-surface w-full max-w-md h-full overflow-y-auto p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold text-primary-c">{checkoutOpen ? t.checkout : t.cart}</h3>
              <button onClick={() => { setCartOpen(false); setCheckoutOpen(false); setOrderDone(null); }} className="text-muted-c hover:text-red-500 text-xl">✕</button>
            </div>

            {orderDone ? (
              <div className="text-center py-16">
                <div className="text-6xl">✅</div>
                <h4 className="text-2xl font-extrabold mt-4 text-green-600">{t.orderSuccess}</h4>
                <p className="mt-3 text-muted-c">{t.orderNumber}</p>
                <p className="text-2xl font-extrabold text-primary-c">{orderDone.orderNumber}</p>
                <p className="mt-2 font-bold">{t.total}: {orderDone.total} {currency}</p>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(false); setOrderDone(null); }} className="btn-primary mt-8 px-8 py-3 rounded-full font-bold">
                  {t.continueShopping}
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-20 text-muted-c">
                <div className="text-6xl mb-4">🛒</div>
                {t.emptyCart}
              </div>
            ) : (
              <>
                <div className="mt-4 space-y-3">
                  {cartDetails.map(({ line, item, size, unit, total }, idx) => (
                    <div key={idx} className="flex items-center gap-3 border border-black/5 rounded-xl p-3">
                      <div className="flex-1">
                        <div className="font-bold text-sm">{L(item)}{size && <span className="text-muted-c font-normal"> — {L(size)}</span>}</div>
                        <div className="text-xs text-muted-c">{price(unit)} {currency}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => setCart((p) => p.map((l) => (l === line ? { ...l, quantity: Math.max(1, l.quantity - 1) } : l)))} className="w-7 h-7 rounded-full border border-black/15 text-sm font-bold">−</button>
                        <span className="w-7 text-center text-sm font-bold">{line.quantity}</span>
                        <button onClick={() => setCart((p) => p.map((l) => (l === line ? { ...l, quantity: Math.min(50, l.quantity + 1) } : l)))} className="w-7 h-7 rounded-full border border-black/15 text-sm font-bold">+</button>
                      </div>
                      <div className="font-bold text-sm w-16 text-end">{price(total)}</div>
                      <button onClick={() => setCart((p) => p.filter((l) => l !== line))} className="text-red-400 hover:text-red-600">🗑</button>
                    </div>
                  ))}
                </div>

                {checkoutOpen && (
                  <div className="mt-5 space-y-3">
                    {/* Order type */}
                    <div>
                      <div className="font-bold text-sm mb-2">{t.orderType}</div>
                      <div className="grid grid-cols-3 gap-2">
                        {([["dine_in", t.dineIn], ["takeaway", t.takeaway], ["delivery", t.delivery]] as const).map(([v, label]) => (
                          <button key={v} onClick={() => setOrderType(v)} className={`py-2 rounded-xl text-sm font-bold border transition ${orderType === v ? "btn-primary border-transparent" : "border-black/15"}`}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {!me && <div className="text-xs text-muted-c font-bold">{t.guestCheckout} — <a className="text-accent-c underline" href="/login">{t.login}</a></div>}

                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder={`${t.fullName} *`} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm" />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={`${t.phone} *`} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm" dir="ltr" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm" dir="ltr" />

                    {orderType === "delivery" && (
                      <>
                        <select value={govId} onChange={(e) => { setGovId(e.target.value ? Number(e.target.value) : ""); setRegionId(""); }} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm">
                          <option value="">{t.selectGovernorate} *</option>
                          {governorates.map((g) => <option key={g.id} value={g.id}>{L(g)}</option>)}
                        </select>
                        <select value={regionId} onChange={(e) => setRegionId(e.target.value ? Number(e.target.value) : "")} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm" disabled={!govId}>
                          <option value="">{t.selectRegion} *</option>
                          {regions.filter((r) => r.governorateId === govId).map((r) => <option key={r.id} value={r.id}>{L(r)}</option>)}
                        </select>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder={`${t.addressDetails} *`} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm" rows={2} />
                      </>
                    )}

                    {/* Payment */}
                    <div>
                      <div className="font-bold text-sm mb-2">{t.paymentMethod}</div>
                      <div className="grid grid-cols-3 gap-2">
                        {([["cash", t.cash], ["benefitpay", t.benefitpay], ["card", t.card]] as const).map(([v, label]) => (
                          <button key={v} onClick={() => setPayment(v)} className={`py-2 rounded-xl text-xs font-bold border transition ${payment === v ? "btn-primary border-transparent" : "border-black/15"}`}>
                            {label}
                          </button>
                        ))}
                      </div>
                      {payment !== "cash" && <div className="text-xs text-amber-600 mt-1">{t.onlineNotConfigured}</div>}
                    </div>

                    {/* Promo */}
                    <div className="flex gap-2">
                      <input value={promo} onChange={(e) => setPromo(e.target.value)} placeholder={t.promoCode} className="flex-1 border border-black/15 rounded-xl px-4 py-2.5 text-sm uppercase" dir="ltr" />
                      <button onClick={applyPromo} className="btn-primary px-5 rounded-xl text-sm font-bold">{t.apply}</button>
                    </div>
                    {promoMsg && <div className={`text-xs font-bold ${promoResult ? "text-green-600" : "text-red-500"}`}>{promoMsg}</div>}

                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t.notes} className="w-full border border-black/15 rounded-xl px-4 py-2.5 text-sm" rows={2} />
                  </div>
                )}

                {/* Totals */}
                <div className="mt-5 border-t border-black/10 pt-4 space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-c">{t.subtotal}</span><span className="font-bold">{price(subtotal)} {currency}</span></div>
                  {discountAmount > 0 && <div className="flex justify-between text-green-600"><span>{t.discount} ({promoResult?.code})</span><span className="font-bold">-{price(discountAmount)} {currency}</span></div>}
                  {checkoutOpen && orderType === "delivery" && (
                    <div className="flex justify-between"><span className="text-muted-c">{t.deliveryFee}</span><span className="font-bold">{price(deliveryFeeCustomer)} {currency}</span></div>
                  )}
                  <div className="flex justify-between text-lg font-extrabold pt-1"><span>{t.total}</span><span className="text-accent-c">{price(checkoutOpen ? grandTotal : subtotal)} {currency}</span></div>
                </div>

                {errorMsg && <div className="mt-3 bg-red-50 text-red-600 text-sm font-bold rounded-xl px-4 py-3">{errorMsg}</div>}

          {checkoutOpen ? (
            <button onClick={placeOrder} disabled={placing} className="btn-accent w-full mt-4 py-3.5 rounded-xl font-extrabold text-lg disabled:opacity-50">
              {placing ? "..." : `${t.placeOrder} — ${price(grandTotal)} ${currency}`}
            </button>
          ) : (
            <button 
              onClick={() => {
                const manualOverride = settings.restaurant_manual_override;

                if (manualOverride === "closed") {
                  setErrorMsg(ar ? "عذراً، المطعم مغلق حالياً من قبل الإدارة" : "Sorry, the restaurant is currently closed by management");
                  return;
                }

                const open1 = settings.restaurant_open_time_1 || "11:00";
    const close1 = settings.restaurant_close_time_1 || "15:00";
    const open2 = settings.restaurant_open_time_2 || "18:00";
    const close2 = settings.restaurant_close_time_2 || "23:00";
    
    const isShift2Active = 
      settings.restaurant_shift2_enabled === "1" || 
      settings.restaurant_shift2_enabled === "true" || 
      settings.restaurant_shift2_enabled === "on" || 
      Boolean(open2 && close2 && open2 !== "00:00" && open2 !== "");

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const toMins = (tStr: string) => {
      const [h, m] = tStr.split(":").map(Number);
      if (h === 0 && m === 0) return 1440;
      return h * 60 + m;
    };

    const inShift = (nowMins: number, startStr: string, endStr: string) => {
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
        setErrorMsg(
          ar
            ? `عذراً، المطعم مغلق حالياً. أوقات العمل: من ${open1} إلى ${close1} - ومن ${open2} إلى ${close2}`
            : `Sorry, restaurant closed. Hours: (${open1} to ${close1}) & (${open2} to ${close2})`
        );
      } else {
        setErrorMsg(
          ar
            ? `عذراً، المطعم مغلق حالياً. أوقات العمل الرسمية: من ${open1} إلى ${close1}`
            : `Sorry, restaurant closed. Working hours: from ${open1} to ${close1}`
        );
      }
      return;
    }

    setErrorMsg("");
    setCheckoutOpen(true);
  }}  
  className="btn-primary w-full mt-4 py-3.5 rounded-xl font-extrabold text-lg"
>
  {t.checkout}
</button>
  )}
  </>
)}
</div>
</div>
)}

      {/* ---------- Popups Modal ---------- */}
      {popups && popups.length > 0 && popups.map((popup) => {
        if (dismissedPopups.includes(popup.id)) return null;
        return (
          <div key={popup.id} className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="card w-full max-w-lg p-6 bg-surface shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => setDismissedPopups((prev) => [...prev, popup.id])} 
                className="absolute top-4 end-4 text-muted-c hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>
              {popup.imageUrl && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={popup.imageUrl} alt="" className="w-full h-48 object-cover rounded-xl mb-4" />
              )}
              <h3 className="text-xl font-extrabold text-primary-c">{ar ? popup.titleAr : popup.titleEn}</h3>
              <p className="text-sm text-muted-c mt-2 leading-relaxed">{ar ? popup.bodyAr : popup.bodyEn}</p>
              <button 
                onClick={() => setDismissedPopups((prev) => [...prev, popup.id])}
                className="btn-primary w-full mt-6 py-3 rounded-xl font-extrabold"
              >
                {ar ? "حسناً" : "OK"}
              </button>
            </div>
          </div>
        );
      })}

    </div>
  );
}