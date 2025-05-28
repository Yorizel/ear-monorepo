import { env } from "@/config/env";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/schemas/*",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
