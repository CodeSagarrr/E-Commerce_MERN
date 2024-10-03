import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':process.env.SERVER_URL || ' http://localhost:6000'
    },
  },
  plugins: [react()],
})
