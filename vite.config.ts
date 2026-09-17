import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
  // Add this root-level key to change the build output to a standard Node.js server
  nitro: {
    preset: "node-server",
  },
});