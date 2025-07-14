import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const waitlist = pgTable("waitlist", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  source: text("source"), // e.g. where they signed up from
});

export const notification = pgTable("notification", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // e.g. 'email', 'push', etc.
  message: text("message").notNull(),
  read: boolean("read")
    .$defaultFn(() => false)
    .notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
});

export const notificationPreference = pgTable("notification_preference", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  email: boolean("email")
    .$defaultFn(() => true)
    .notNull(),
  push: boolean("push")
    .$defaultFn(() => false)
    .notNull(),
  sms: boolean("sms")
    .$defaultFn(() => false)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});
