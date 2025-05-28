import * as authSchema from "@/schemas/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import Elysia from "elysia";
import { db } from "./database";
import { env } from "@/config/env";
export const auth = betterAuth({
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: ["http://localhost:3000"],
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  plugins: [openAPI()],
});

export const authService = new Elysia().mount(auth.handler);
