import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true, // Para no tener que importar describe, it, expect, etc.
    environment: 'jsdom', // Simula el DOM
    setupFiles: './src/setupTests.js', // (Opcional) Archivo de configuración global para pruebas
    css: false, // O true si necesitas procesar CSS, o un objeto de configuración
  },
});
