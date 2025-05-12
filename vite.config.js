import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MyComponent',
      fileName: () => 'my-component.js',
      formats: ['es'], // for use with import()
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),

  },
});
