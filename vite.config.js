import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    // minify: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  server: {
    open: true,
  },
});
