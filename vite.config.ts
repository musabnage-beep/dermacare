import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // Allows deploying under a sub-path (e.g. GitHub Pages) without code changes.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
