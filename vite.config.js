import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      common: "/src/common",
      icons: "/src/assets",
      locales:"/src/locals",
      landing:"/src/landing",
      components:"/src/landing/components"
    },
  },
});