import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // intenta usar esto pero no es suficiente solo
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});
