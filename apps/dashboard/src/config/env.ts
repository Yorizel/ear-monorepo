import { brandConfig, brandLogoSvg } from "@packages/brand";
console.log("Brand config:", brandConfig);
console.log("Brand logo SVG:", brandLogoSvg);

import { z } from "zod";
export const env = z
  .object({
    VITE_SERVER_URL: z.string().url(),
  })
  .parse(import.meta.env);
