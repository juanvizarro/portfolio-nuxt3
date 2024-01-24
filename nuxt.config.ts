// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/google-fonts',
    'nuxt-vitest',
    'dayjs-nuxt',
    'nuxt-phosphor-icons',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    './modules/auto-import-eslint.ts',
    '@vueuse/nuxt'
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  } as object,
  typescript: {
    typeCheck: true
  },
  ui: {
    icons: ['ph']
  }
})
