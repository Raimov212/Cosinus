import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr(), splitVendorChunkPlugin()],
  // build: {
  //   rollupOptions: {
  //     // https://rollupjs.org/configuration-options/
  //   },
  // },
});
