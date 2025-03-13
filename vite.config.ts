import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        mf1: 'http://localhost:3001/dist/assets/remoteEntry.js',
        mf2: 'http://localhost:3002/dist/assets/remoteEntry.js'
      },
      exposes: {
        './store': './src/store/use-app-store.ts'
      },
      shared: [
        'react',
        'react-dom',
        'zustand',
      ],
    }),
    tailwindcss()
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})