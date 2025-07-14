import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "Dashboard",
        name: "Ear Dashboard PWA",
        description:
          "A robust, installable dashboard PWA built with TanStack and Vite.",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
        ],
        screenshots: [
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Dashboard",
            short_name: "Dashboard",
            description: "Go to Dashboard",
            url: "/",
            icons: [{ src: "logo192.png", sizes: "192x192" }],
          },
        ],
        categories: ["productivity", "dashboard", "tools"],
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,png,svg,ico,json,webp}"],
      },
      includeAssets: [
        "favicon.ico",
        "logo192.png",
        "logo512.png",
        "robots.txt",
      ],
      srcDir: "src",
      filename: "sw.js",
      strategies: "generateSW",
      injectRegister: "auto",
      scope: "/",
    }),
  ],
  server: {
    port: 3000,
  },
});
