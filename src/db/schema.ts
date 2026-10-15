import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  integer,
  numeric,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

/* ---------------- Geography ---------------- */
export const governorates = pgTable("governorates", {
  id: serial("id").primaryKey(),
  nameAr: varchar("name_ar", { length: 200 }).notNull(),
  nameEn: varchar("name_en", { length: 200 }).notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const regions = pgTable("regions", {
  id: serial("id").primaryKey(),
  governorateId: integer("governorate_id")
    .notNull()
    .references(() => governorates.id, { onDelete: "cascade" }),
  nameAr: varchar("name_ar", { length: 200 }).notNull(),
  nameEn: varchar("name_en", { length: 200 }).notNull(),
  deliveryFee: numeric("delivery_fee", { precision: 10, scale: 3 }),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

/* ---------------- Customers ---------------- */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 200 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  governorateId: integer("governorate_id").references(() => governorates.id, {
    onDelete: "set null",
  }),
  regionId: integer("region_id").references(() => regions.id, {
    onDelete: "set null",
  }),
  addressDetails: text("address_details"),
  language: varchar("language", { length: 5 }).notNull().default("ar"),
  emailVerified: boolean("email_verified").notNull().default(false),
  verifyCode: varchar("verify_code", { length: 10 }),
  resetCode: varchar("reset_code", { length: 10 }),
  resetCodeExpiresAt: timestamp("reset_code_expires_at"),
  isBanned: boolean("is_banned").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

/* ---------------- Staff ---------------- */
export const staff = pgTable("staff", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  fullName: varchar("full_name", { length: 200 }).notNull(),
  email: varchar("email", { length: 255 }),
  passwordHash: text("password_hash").notNull(),
  role: varchar("role", { length: 50 }).notNull().default("staff"), // superadmin | manager | staff
  permissions: jsonb("permissions").$type<string[]>().notNull().default([]),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

/* ---------------- Menu ---------------- */
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id"),
  nameAr: varchar("name_ar", { length: 200 }).notNull(),
  nameEn: varchar("name_en", { length: 200 }).notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
  nameAr: varchar("name_ar", { length: 200 }).notNull(),
  nameEn: varchar("name_en", { length: 200 }).notNull(),
  descriptionAr: text("description_ar"),
  descriptionEn: text("description_en"),
  basePrice: numeric("base_price", { precision: 10, scale: 3 }).notNull().default("0"),
  discountPercent: numeric("discount_percent", { precision: 5, scale: 2 }).notNull().default("0"),
  imageUrl: text("image_url"),
  isAvailable: boolean("is_available").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const itemSizes = pgTable("item_sizes", {
  id: serial("id").primaryKey(),
  itemId: integer("item_id")
    .notNull()
    .references(() => menuItems.id, { onDelete: "cascade" }),
  nameAr: varchar("name_ar", { length: 100 }).notNull(),
  nameEn: varchar("name_en", { length: 100 }).notNull(),
  price: numeric("price", { precision: 10, scale: 3 }).notNull(),
  discountPercent: numeric("discount_percent", { precision: 5, scale: 2 }).notNull().default("0"),
  stock: integer("stock"), // null = unlimited
  isAvailable: boolean("is_available").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

/* ---------------- Settings & CMS ---------------- */
export const siteSettings = pgTable("site_settings", {
  key: varchar("key", { length: 100 }).primaryKey(),
  value: text("value"),
});

export const siteContent = pgTable("site_content", {
  key: varchar("key", { length: 100 }).primaryKey(),
  valueAr: text("value_ar"),
  valueEn: text("value_en"),
});

/* ---------------- Delivery aggregators ---------------- */
export const deliveryAggregators = pgTable("delivery_aggregators", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  apiKey: text("api_key"),
  apiUrl: text("api_url"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

/* ---------------- Orders ---------------- */
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  orderNumber: varchar("order_number", { length: 30 }).notNull().unique(),
  userId: integer("user_id").references(() => users.id, { onDelete: "set null" }),
  customerName: varchar("customer_name", { length: 200 }).notNull(),
  customerPhone: varchar("customer_phone", { length: 50 }).notNull(),
  customerEmail: varchar("customer_email", { length: 255 }),
  orderType: varchar("order_type", { length: 20 }).notNull(), // dine_in | takeaway | delivery
  governorateId: integer("governorate_id").references(() => governorates.id, { onDelete: "set null" }),
  regionId: integer("region_id").references(() => regions.id, { onDelete: "set null" }),
  addressDetails: text("address_details"),
  paymentMethod: varchar("payment_method", { length: 30 }).notNull().default("cash"), // cash | benefitpay | card
  paymentStatus: varchar("payment_status", { length: 30 }).notNull().default("unpaid"),
  status: varchar("status", { length: 30 }).notNull().default("pending"), // pending | confirmed | preparing | ready | out_for_delivery | completed | cancelled
  subtotal: numeric("subtotal", { precision: 10, scale: 3 }).notNull().default("0"),
  discountAmount: numeric("discount_amount", { precision: 10, scale: 3 }).notNull().default("0"),
  deliveryFeeTotal: numeric("delivery_fee_total", { precision: 10, scale: 3 }).notNull().default("0"),
  deliveryFeeCustomer: numeric("delivery_fee_customer", { precision: 10, scale: 3 }).notNull().default("0"),
  deliveryFeeRestaurant: numeric("delivery_fee_restaurant", { precision: 10, scale: 3 }).notNull().default("0"),
  total: numeric("total", { precision: 10, scale: 3 }).notNull().default("0"),
  promoCode: varchar("promo_code", { length: 60 }),
  notes: text("notes"),
  language: varchar("language", { length: 5 }).notNull().default("ar"),
  acknowledged: boolean("acknowledged").notNull().default(false),
  dispatchStatus: varchar("dispatch_status", { length: 30 }), // broadcasting | locked | null
  lockedAggregatorId: integer("locked_aggregator_id").references(() => deliveryAggregators.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id, { onDelete: "cascade" }),
  itemId: integer("item_id").references(() => menuItems.id, { onDelete: "set null" }),
  sizeId: integer("size_id").references(() => itemSizes.id, { onDelete: "set null" }),
  nameAr: varchar("name_ar", { length: 255 }).notNull(),
  nameEn: varchar("name_en", { length: 255 }).notNull(),
  sizeNameAr: varchar("size_name_ar", { length: 100 }),
  sizeNameEn: varchar("size_name_en", { length: 100 }),
  unitPrice: numeric("unit_price", { precision: 10, scale: 3 }).notNull(),
  quantity: integer("quantity").notNull().default(1),
  lineTotal: numeric("line_total", { precision: 10, scale: 3 }).notNull(),
});

export const orderDispatches = pgTable("order_dispatches", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id, { onDelete: "cascade" }),
  aggregatorId: integer("aggregator_id")
    .notNull()
    .references(() => deliveryAggregators.id, { onDelete: "cascade" }),
  status: varchar("status", { length: 30 }).notNull().default("broadcasted"), // broadcasted | accepted | closed
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

/* ---------------- Promo codes ---------------- */
export const promoCodes = pgTable("promo_codes", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 60 }).notNull().unique(),
  discountType: varchar("discount_type", { length: 20 }).notNull().default("percent"), // percent | amount
  discountValue: numeric("discount_value", { precision: 10, scale: 3 }).notNull(),
  validFrom: timestamp("valid_from"),
  validUntil: timestamp("valid_until"),
  maxUsageCount: integer("max_usage_count"), // null = unlimited
  currentUsageCount: integer("current_usage_count").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

/* ---------------- Popups ---------------- */
export const popups = pgTable("popups", {
  id: serial("id").primaryKey(),
  titleAr: varchar("title_ar", { length: 255 }).notNull(),
  titleEn: varchar("title_en", { length: 255 }).notNull(),
  bodyAr: text("body_ar"),
  bodyEn: text("body_en"),
  imageUrl: text("image_url"),
  startsAt: timestamp("starts_at"),
  endsAt: timestamp("ends_at"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

/* ---------------- Bans ---------------- */
export const bans = pgTable("bans", {
  id: serial("id").primaryKey(),
  banType: varchar("ban_type", { length: 20 }).notNull(), // email | phone | address
  value: text("value").notNull(),
  reason: text("reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});