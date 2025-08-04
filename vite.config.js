import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";
import { pigment } from "@pigment-css/vite-plugin";

export default defineConfig(() => {
  return {
    base: "/trading-tools",
    plugins: [react(), pigment(), mkcert(), tsconfigPaths()],
    build: {
      outDir: "docs",
    },
    optimizeDeps: {
      include: ["react-is", "prop-types"],
    },
  };
});
