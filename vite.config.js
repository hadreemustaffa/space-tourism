import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/space-tourism/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, 'pages/destination/index.html'),
        crew: resolve(__dirname, 'pages/crew/index.html'),
        technology: resolve(__dirname, 'pages/technology/index.html'),
      },
    },
  },
});
