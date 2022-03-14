import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import styles from "rollup-plugin-styles";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    // rollupOptions: {
    //   plugins: [styles()],
    // },
  },
});
