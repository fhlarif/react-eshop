import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs-extra";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "vios.iium.edu.my",
    https: {
      key: fs.readFileSync("../../../../etc/ssl/laragon.key"),
      cert: fs.readFileSync("../../../../etc/ssl/laragon.crt"),
    },
  },
});
