import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hiddify-admin-front/',
  plugins: [react()],
  server: {
    port: 3000, // You can specify the port you want the dev server to run on
  },
  build: {
    outDir: 'dist', // Output directory for the build files
    sourcemap: true, // Generate source maps for debugging
  },
  resolve: {
    alias: {
      '@': '/src', // You can create path aliases for easier imports
    },
  },
});
