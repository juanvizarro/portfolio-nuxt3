// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
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
    '@vueuse/nuxt',
    'nuxt-time',
    '@hypernym/nuxt-anime',
    'nuxt-aos',
    // '@nuxtjs/seo'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      // title: 'Juan Vizarro Ramos'
    }
  },
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
  },
  runtimeConfig: {
    public: {
      MIXPANEL_TOKEN: process.env.NUXT_MIXPANEL_TOKEN
    }
  },
  anime: {
    composables: true
  },
  aos: {
    // startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    once: true
  },
  site: {
    url: 'https://juanvizarro.vercel.app',
    name: 'Juan Vizarro Ramos - Frontend Developer',
    description: 'Descubre mi portafolio de desarrollo frontend donde muestro mis habilidades y proyectos. Explora mis trabajos en diseño web, desarrollo de aplicaciones y más.',
    ogImage: false
  },
  // plugins: [
  //   '~/plugins/'
  // ]
})
