import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Cambiado para despliegue correcto en GitHub Pages
  base: '/',
  plugins: [ tailwindcss(),
    react()],
})
