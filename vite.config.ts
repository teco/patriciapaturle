import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Warn on large chunks for mobile optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Custom splitting for vendor libs to reduce mobile initial load
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-label', '@radix-ui/react-slot', '@radix-ui/react-toast'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})