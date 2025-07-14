import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Use environment variable for connection string
const connectionString = process.env.DB_POSTGRES_URL;
if (!connectionString) {
  throw new Error("DB_POSTGRES_URL is not set");
}

const client = postgres(connectionString);
export const db = drizzle(client);
