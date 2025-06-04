import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { authService } from "./lib/auth";
import { env } from "./config/env";
const app = new Elysia()
  .use(authService)
  .use(
    cors({
      origin: env.BETTER_AUTH_TRUSTED_ORIGINS.split(","),
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  .use(swagger())
  .get("/works", () => {
    return { message: "Eden WORKS!" };
  })
  .listen(9876);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
export type App = typeof app;
