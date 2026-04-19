import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: { alias: { '~': '/src' } },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        failOnError: true,
      }
    }),
    viteReact(),
  ],
})
