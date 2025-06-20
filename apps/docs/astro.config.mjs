import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },

  integrations: [
    starlight({
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
          label: "Guides",
        },
        {
          autogenerate: { directory: "reference" },
          label: "Reference",
        },
      ],
      social: [
        {
          href: "https://github.com/withastro/starlight",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "My Docs",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
