import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/imgs': {
  //       target: 'https://s21.ax1x.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/imgs/, ''),
  //     },
  //   },
  // },
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