import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/', // Nombre de tu repositorio
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Rutas relativas sin el prefijo
        chunkFileNames: 'assets/[name]-[hash].js',       // Rutas relativas sin el prefijo
        entryFileNames: 'assets/[name]-[hash].js',       // Rutas relativas sin el prefijo
      },
    },
  },
});
