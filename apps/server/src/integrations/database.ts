import { env } from "@api/config/env";
import * as authSchema from "@api/schemas/auth-schema";
import * as extraSchema from "@api/schemas/waitlist-and-notification-schema";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const client = new Pool({ connectionString: env.DATABASE_URL });

export const db = drizzle(client, {
  schema: {
    ...authSchema,
  },
});
