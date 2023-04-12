import { resolve } from 'path';
import {
  defineConfig,
  externalizeDepsPlugin,
  defineViteConfig,
} from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  // renderer: {
  //   resolve: {
  //     alias: {
  //       '@renderer': resolve('out/renderer'),
  //     },
  //   },
  //   plugins: [react()],
  // },
  renderer: defineViteConfig(({ command }) => {
    if (command === 'build') {
      return {
        resolve: {
          alias: {
            '@renderer': resolve('out/renderer'),
          },
        },
        plugins: [react()],
      };
    } else {
      return {
        resolve: {
          alias: {
            '@renderer': resolve('src/renderer/src'),
          },
        },
        plugins: [react()],
      };
    }
  }),
});
