import { resolve } from 'path';
import {
  defineConfig,
  externalizeDepsPlugin,
  defineViteConfig,
} from 'electron-vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: defineViteConfig(({ command }) => {
    const shared = {
      resolve: {
        alias: {
          '@renderer': resolve('src/renderer/src'),
        },
      },
    };

    if (command === 'build') {
      return {
        ...shared,
        plugins: [react()],
      };
    }

    return {
      ...shared,
      server: { https: true },
      plugins: [react(), mkcert()],
    };
  }),
});
