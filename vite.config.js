import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        booking: resolve(__dirname, 'booking.html'),
        create: resolve(__dirname, 'create.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        details: resolve(__dirname, 'details.html'),
        emailAuth: resolve(__dirname, 'email-auth.html'),
        explore: resolve(__dirname, 'explore.html'),
        login: resolve(__dirname, 'login.html'),
        messages: resolve(__dirname, 'messages.html'),
        notifications: resolve(__dirname, 'notifications.html'),
        profile: resolve(__dirname, 'profile.html'),
        verify: resolve(__dirname, 'verify.html'),
        wishlists: resolve(__dirname, 'wishlists.html'),
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  plugins: [],
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
});
