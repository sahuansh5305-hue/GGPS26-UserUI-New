import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // Import the core nitro bundler directly

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
  vite: {
    // Forcing Vite to use the Node-Server compiler preset on top of the Lovable default
    plugins: [
      nitro({ preset: "node-server" })
    ],
  },
});
