import z from "zod";

export const env = z
  .object({
    DATABASE_URL: z.string(),
  })
  .parse(process.env);
