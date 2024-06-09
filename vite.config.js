import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 4000,
  },
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    assetsInlineLimit: 0,
  },
})
