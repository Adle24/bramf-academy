import dotenv from 'dotenv'

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const ENV_FILES = {
  production: '.env.production',
  development: '.env.development'
}

const CONFIG = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@comp': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@UI': fileURLToPath(new URL('./src/components/UI', import.meta.url))
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode)
  dotenv.config({ path: ENV_FILES[mode] })
  return CONFIG
})
