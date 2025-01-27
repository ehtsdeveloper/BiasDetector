import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist', // Ensures build files go to "dist"
    assetsDir: 'assets', // Puts assets in a separate "assets" folder
  },
})