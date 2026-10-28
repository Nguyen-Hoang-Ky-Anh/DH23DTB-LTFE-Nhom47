import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/nld": {
        target: 'https://tuoitre.vn/',
        changeOrigin : true,
        rewrite: (path) => path.replace(/^\/rss/, ""),
      }
    }
  }
})
