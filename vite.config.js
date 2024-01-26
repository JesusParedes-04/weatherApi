import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': import.meta.env.VITE_API_KEY,
  },
})
