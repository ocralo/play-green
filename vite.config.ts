import {defineConfig} from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      includeAssets: ['vite.svg', 'robot.txt'],
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      base: '/',
      srcDir: 'src',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'PWA App',
        short_name: 'PWA App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  define: {
    'process.env': process.env,
  },
})
