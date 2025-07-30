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
    target: 'es2015', // Better browser support while maintaining performance
    chunkSizeWarningLimit: 1000, // Warn on large chunks for mobile optimization
    cssCodeSplit: true, // Split CSS for better caching
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
    minify: 'esbuild', // Faster than terser, good compression
    rollupOptions: {
      output: {
        // Enhanced chunk splitting for optimal caching
        manualChunks: {
          // Critical vendor libs - loaded first
          'react-vendor': ['react', 'react-dom'],
          // UI components - loaded as needed
          'ui-components': [
            '@radix-ui/react-label', 
            '@radix-ui/react-slot', 
            '@radix-ui/react-toast'
          ],
          // Icons - lazy loaded
          'icons': ['lucide-react'],
          // Utilities - shared across components
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
        // Optimize asset naming for better caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`;
          }
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  // Development server optimizations
  server: {
    hmr: {
      overlay: false, // Reduce visual noise during development
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
      '@radix-ui/react-toast'
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: false, // Disable CSS sourcemaps for better performance
  },
})