import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
// eslint-disable-next-line import/order
import { pigment } from "@pigment-css/vite-plugin";

export default defineConfig(() => {
  return {
    base: "/trading-tools",
    plugins: [
      react(),
      pigment(),
      mkcert(),
      tsconfigPaths(),
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          icons: [
            {
              src: "pwa-64x64.png",
              sizes: "64x64",
              type: "image/png",
            },
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "maskable-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
    ],
    build: {
      outDir: "docs",
    },
    optimizeDeps: {
      include: ["react-is", "prop-types"],
    },
  };
});
