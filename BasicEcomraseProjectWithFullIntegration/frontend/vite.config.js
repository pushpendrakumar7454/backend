import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    proxy:{
      "/api":{
        target:"https://vercel.com/pushpendrakumar7454s-projects/backend-iuwx",
        changeOrigin:true
      }
    }
  }
})
