import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/config/env";
import { neon } from "@neondatabase/serverless";
import * as authSchema from "@/schemas/auth-schema";
const client = neon(env.DATABASE_URL);

export const db = drizzle({
  client,
  schema: {
    ...authSchema,
  },
});
