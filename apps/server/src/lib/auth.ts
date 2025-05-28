import { db } from "@/database";
import * as authSchema from "@/database/schemas/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import Elysia, { type Context } from "elysia";
export const auth = betterAuth({
  secret: "secret",
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  plugins: [openAPI()],
});
export const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    console.log(context.request);
    return auth.handler(context.request);
  }

  context.status(405);
};

export const authService = new Elysia().all("/api/auth/*", betterAuthView);
