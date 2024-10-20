import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':'https://e-commerce-app-1qa6.onrender.com'
    },
  },
  plugins: [react()],
})
