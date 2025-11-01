import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@pages': resolve(__dirname, './src/pages'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      port: 5173,
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
