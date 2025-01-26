import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1", // Force IPv4 (instead of ::1, which is IPv6)
    port: 3000, // Change to a port that's not in use
    strictPort: true, // Fail if the port is already in use
  },
});
