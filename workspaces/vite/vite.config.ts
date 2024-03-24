import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'chrome120',
    rollupOptions: {
      plugins: [
        process.env.ANALYZE &&
          visualizer({
            filename: 'dist/stats.html',
            gzipSize: true,
            brotliSize: true,
          }),
      ],
    },
  },
  plugins: [react(), nodePolyfills()],
});
