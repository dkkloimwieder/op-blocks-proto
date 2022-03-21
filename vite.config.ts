import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import eslint from "vite-plugin-eslint";

// import styles from "rollup-plugin-styles";

export default defineConfig({
  plugins: [solidPlugin(), eslint()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    minify: "terser",
    terserOptions: {
      compress: {
        unsafe: true,
        unsafe_arrows: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        passes: 3,
      },
    },

    // rollupOptions: {
    //   plugins: [styles()],
    // },
  },
});
