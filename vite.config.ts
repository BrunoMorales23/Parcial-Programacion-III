import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/auth/login/login.html'),
        // Añade aquí otras páginas HTML que tengas en tu proyecto
        // dashboard: resolve(__dirname, 'src/pages/dashboard/dashboard.html'),
      },
    },
  },
});