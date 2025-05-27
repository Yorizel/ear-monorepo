import { treaty } from "@elysiajs/eden";
import type { App } from "elysia-server";
export const edenAdapter = treaty<App>("localhost:9876");
