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
      VitePWA({ registerType: "autoUpdate" }),
    ],
    build: {
      outDir: "docs",
    },
    optimizeDeps: {
      include: ["react-is", "prop-types"],
    },
  };
});
