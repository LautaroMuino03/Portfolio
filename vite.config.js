import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/', // Mantén el nombre del repositorio
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: './assets/[name]-[hash][extname]',
        chunkFileNames: './assets/[name]-[hash].js',
        entryFileNames: './assets/[name]-[hash].js',
      },
    },
  },
});
