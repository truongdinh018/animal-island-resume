import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://<user>.github.io/animal-island-resume/
// For a user site repo named <user>.github.io, set base: '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/animal-island-resume/',
})
