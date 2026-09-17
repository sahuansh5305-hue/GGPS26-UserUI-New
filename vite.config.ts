import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Add this section to force a Node.js server build when deploying to Render
  vite: {
    plugins: [
      {
        name: 'override-nitro-preset',
        configResolved(config) {
          // Look for the embedded nitro config and change its preset target
          const nitroConfig = (config as any).nitro;
          if (nitroConfig) {
            nitroConfig.preset = "node-server";
          }
        }
      }
    ]
  }
});