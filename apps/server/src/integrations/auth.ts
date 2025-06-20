import { env } from "@api/config/env";
import * as authSchema from "@api/schemas/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import Elysia from "elysia";
import { db } from "./database";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [openAPI()],
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: env.BETTER_AUTH_TRUSTED_ORIGINS.split(","),
});

export const authService = new Elysia().mount(auth.handler);
