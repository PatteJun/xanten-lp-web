import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        retreat: resolve(__dirname, 'retreat.html'),
        offsite: resolve(__dirname, 'offsite.html'),
      },
    },
  },
});