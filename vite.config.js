import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        main: resolve(root, 'learning.html'),
        profile: resolve(root, 'profile.html')
      }
    }
  }
});