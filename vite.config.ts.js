// vite.config.ts
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import eslint from "vite-plugin-eslint";
var vite_config_default = defineConfig({
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
        passes: 3
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgc29saWRQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLXNvbGlkXCI7XG5pbXBvcnQgZXNsaW50IGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjtcblxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwicm9sbHVwLXBsdWdpbi1zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3NvbGlkUGx1Z2luKCksIGVzbGludCgpXSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgcG9seWZpbGxEeW5hbWljSW1wb3J0OiBmYWxzZSxcbiAgICBtaW5pZnk6IFwidGVyc2VyXCIsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgdW5zYWZlOiB0cnVlLFxuICAgICAgICB1bnNhZmVfYXJyb3dzOiB0cnVlLFxuICAgICAgICB1bnNhZmVfRnVuY3Rpb246IHRydWUsXG4gICAgICAgIHVuc2FmZV9tYXRoOiB0cnVlLFxuICAgICAgICB1bnNhZmVfc3ltYm9sczogdHJ1ZSxcbiAgICAgICAgdW5zYWZlX21ldGhvZHM6IHRydWUsXG4gICAgICAgIHVuc2FmZV9wcm90bzogdHJ1ZSxcbiAgICAgICAgdW5zYWZlX3JlZ2V4cDogdHJ1ZSxcbiAgICAgICAgcGFzc2VzOiAzLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gcm9sbHVwT3B0aW9uczoge1xuICAgIC8vICAgcGx1Z2luczogW3N0eWxlcygpXSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBSUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7QUFBQSxFQUNqQyxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUix1QkFBdUI7QUFBQSxJQUN2QixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixlQUFlO0FBQUEsUUFDZixpQkFBaUI7QUFBQSxRQUNqQixhQUFhO0FBQUEsUUFDYixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsUUFDZixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUtGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
