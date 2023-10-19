import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    outDir: '/Wasafati-CookingBlog-ReactJS/dist', // Set the correct output directory
  },
})
