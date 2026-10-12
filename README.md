# مطعم الجودي — Jowdi Restaurant Platform

Production-ready, bilingual (Arabic RTL / English LTR) online ordering & management platform built with **Next.js (App Router, TypeScript)**, **Tailwind CSS**, **Drizzle ORM** and **PostgreSQL (Neon-ready)**, with **Resend** transactional emails.

## Features

### Customer storefront
- Full i18n (AR/EN) with one-click language switcher and native RTL/LTR layouts
- Menu with categories, multi-size variants with individual pricing/discount/stock, availability badges (متاح / غير متاح) — unavailable dishes are dimmed and blocked from the cart
- Three order types: Dine-in (محلي), Takeaway (استلام), Delivery (توصيل)
- Registered checkout + guest checkout (name, phone, governorate → region, address)
- Account system: register (email confirmation field), login, forgot-password with Resend recovery codes
- Promo codes with expiry & usage caps, cash / BenefitPay / credit-card selection (gateway keys configurable in admin)
- Shared delivery fee (50/50 by default, fully configurable), dynamic popups, CMS-driven texts & hero image

### Admin dashboard (`/admin` — also reachable via the hidden button in the bottom-left corner of the home page)
- Super admin: `moosameftah` / `Vsml3142@` (auto-seeded)
- Real-time order feed with **repeating audio alarm + visual banner** until acknowledged
- Financial reports: daily / weekly / monthly presets + custom from–to range (revenue, delivery fees, discounts, net profit, per-day breakdown)
- Full CRUD: categories, dishes (image browse upload), sizes/variants, governorates & regions, promo codes, popups, staff & roles, delivery aggregators (API key based broadcast + first-accept lock via `POST /api/delivery/accept`), ban list (email/phone/address), customers
- 20 professional themes switchable instantly, hero image & logo upload, delivery/payment settings, bilingual content CMS

## Deploy to Vercel

1. Push this repository to GitHub and import it in Vercel.
2. Create a [Neon](https://neon.tech) database and copy the connection string.
3. Set the environment variables in Vercel (see `.env.example`):
   - `DATABASE_URL` — Neon connection string (`...?sslmode=require`)
   - `AUTH_SECRET` — long random string
   - `RESEND_API_KEY` — from resend.com (emails activate instantly once your custom domain is verified; set `RESEND_FROM_EMAIL` accordingly)
   - `NEXT_PUBLIC_APP_URL` — your Vercel URL
4. Apply the schema once: `DATABASE_URL=<neon-url> npx drizzle-kit push`
5. Deploy. On first request the app auto-seeds the super admin, settings, CMS texts, governorates/regions and a starter menu.

## Local development

```bash
npm install
npx drizzle-kit push
npm run dev
```

## Key endpoints
- `POST /api/orders` — place order (guest or authenticated)
- `PATCH /api/orders` — validate promo code
- `POST /api/delivery/accept` — aggregator webhook `{ orderNumber, apiKey }`; first accept locks the order and closes it for all other apps
- `GET/POST/PATCH/DELETE /api/admin/{resource}` — staff-guarded CRUD for all resources
