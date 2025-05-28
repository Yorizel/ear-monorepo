import { env } from "@/config/env";
import * as authSchema from "@/schemas/auth-schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const client = neon(env.DATABASE_URL);

export const db = drizzle({
	client,
	schema: {
		...authSchema,
	},
});
