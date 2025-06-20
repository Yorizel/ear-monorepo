import z from "zod";

export const env = z
  .object({
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_TRUSTED_ORIGINS: z.string(),
    DATABASE_URL: z.string(),
  })
  .parse(process.env);
