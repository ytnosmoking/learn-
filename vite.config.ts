import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/variable.less')}";`
        // additionalData: '@import "src/styles/variable.less"',
      }
    }
  },

  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      com: `${path.resolve(__dirname, 'src/components')}`
    },
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
});
