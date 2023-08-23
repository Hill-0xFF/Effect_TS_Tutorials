import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/interfaces': path.resolve(__dirname, '/src/interfaces'),
      '@/enums': path.resolve(__dirname, '/src/enums'),
      '@/types': path.resolve(__dirname, '/src/types'),
      '@/redux': path.resolve(__dirname, '/src/redux'),
      '@/components': path.resolve(__dirname, '/src/components'),
      '@/hooks': path.resolve(__dirname, '/src/hooks'),
      '@/requests': path.resolve(__dirname, '/src/requests/'),
      '@/pages': path.resolve(__dirname, '/src/pages'),
      '@/schemas': path.resolve(__dirname, '/src/schemas'),
      '@/utils': path.resolve(__dirname, '/src/utils'),
      '@/styles': path.resolve(__dirname, '/src/styles'),
      '@/mui': path.resolve(__dirname, '/src/mui'),
      '@/assets': path.resolve(__dirname, '/src/assets'),
    },
  },
});
