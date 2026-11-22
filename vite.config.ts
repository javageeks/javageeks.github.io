import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Deploys at the root of https://javageeks.github.io/ — no base path needed.
// The SSR build (invoked with `--ssr src/entry-server.tsx`) uses the same config
// and writes to a separate outDir that scripts/prerender.mjs consumes and deletes.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  ssr: {
    noExternal: [],
  },
});
