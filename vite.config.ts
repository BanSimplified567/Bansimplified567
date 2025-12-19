import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
    '@': path.resolve(__dirname, './src'),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
    "@contexts": path.resolve(__dirname, "src/contexts"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@lib": path.resolve(__dirname, "src/lib"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@routes": path.resolve(__dirname, "src@routes"),
    "@services": path.resolve(__dirname, "src/services"),
    "@stores": path.resolve(__dirname, "src/stores"),
    "@styles": path.resolve(__dirname, "src/styles"),
    "@types": path.resolve(__dirname, "src/types"),
    "@utils": path.resolve(__dirname, "src/utils"),
    }
  }
});
