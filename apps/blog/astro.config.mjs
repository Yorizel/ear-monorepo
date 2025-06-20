import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx(), sitemap(), react()],
  site: "https://example.com",

  vite: {
    plugins: [tailwindcss()],
  },
});
