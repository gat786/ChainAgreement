import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import polyfillNode from "rollup-plugin-polyfill-node";
import builtins from "rollup-plugin-node-builtins";

const builtinsPlugin = builtins({ crypto: true });
builtinsPlugin.name = "builtins";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
    },
  },
  plugins: [react(), polyfillNode()],
  envDir: ".",
  rollupInputOptions: {
    plugins: [builtinsPlugin],
  },
});
