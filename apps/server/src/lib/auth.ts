import { db } from "@/database";
import * as authSchema from "@/database/schemas/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import Elysia, { type Context } from "elysia";
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  plugins: [openAPI()],
});

export const authService = new Elysia().post("/auth/sign-up", async () => {
  const repsonse = await auth.api.signUpEmail({
    body: {
      email: "yorizel@gmail.com",
      password: "12345678",
      name: "yorizel",
    },
  });
  console.log(repsonse);
  return "AIIII";
});
