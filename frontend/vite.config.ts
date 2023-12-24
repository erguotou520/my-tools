import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@wails': resolve(__dirname, './wailsjs')
    }
  },
  plugins: [
    Pages({
      dirs: 'src/pages',
      exclude: ['**/components/**/*.tsx'],
      importMode: 'async'
    }),
    react()
  ]
})
