import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'report.html', // 分析图生成的文件名
      open: true, // 如果存在本地服务端口，将在打包后自动展示
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    target: 'esnext', // 或者将其设置为支持顶层 await 的具体浏览器
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    // 自动打开浏览器
    open: true,
    host: true,
    port: 5173,
    proxy: {
      '/cityk': {
        // target: 'https://cityk.net/',
        target: 'http://47.100.226.26:8021/',
        // target: 'http://localhost:55332',
        changeOrigin: true,
        rewrite: (paths) => paths.replace(/^\/cityk/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer(), tailwindcss()],
      },
    },
  },
});
