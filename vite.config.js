import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/', // Nombre de tu repositorio
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Cambié aquí
        chunkFileNames: 'assets/[name]-[hash].js',       // Cambié aquí también
        entryFileNames: 'assets/[name]-[hash].js',       // Y aquí
      },
    },
  },
});
