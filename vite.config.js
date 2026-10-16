import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration: enables React support (JSX and fast refresh).
export default defineConfig({
  plugins: [react()],
});
