import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    outDir: 'dist/Wasafati-CookingBlog-ReactJS', // Set the correct output directory
  },
})
