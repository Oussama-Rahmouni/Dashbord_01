// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // This tells Vite to use this plugin for .js files as well.
      include: ['**/*.js', '**/*.jsx'] // Explicitly include .js files
    })
  ],
  esbuild: {
    // Ensure esbuild is also configured to handle JSX in .js files
    loader: 'jsx',
    include: /src\/.*\.js$/, // Adjust regex as needed for your project structure
    exclude: []
  }
});
