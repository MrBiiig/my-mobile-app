import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  mode: 'dev',
  server: {
    proxy: {
      '/.netlify/functions/proxy?url=https://s21.ax1x.com': {
        target: 'https://s21.ax1x.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/\.netlify\/functions\/proxy\?url=https:\/\/s21\.ax1x\.com/, '')
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})