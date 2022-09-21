import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
      filename: './sw.js',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      injectManifest: { globPatterns: ['**/*.html'] },
      manifest: {
        name: 'TEP Project',
        short_name: 'TEP Project',
        start_url: '/',
        display: 'standalone',
        background_color: '#eee',
        description:
          'Custom comment app with internal database (IndexedDB) and PWA functionality with service worker',
        icons: [
          {
            src: './icon_48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: './icon_48.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: './icon_48.png',
            sizes: '72x72',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
