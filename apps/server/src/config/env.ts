import z from "zod";

export const env = z
  .object({
    DATABASE_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_TRUSTED_ORIGINS: z.string(),
  })
  .parse(process.env);
