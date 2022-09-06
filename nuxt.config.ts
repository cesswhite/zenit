import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  css: ['@/assets/css/main.css'],
  unocss: {
    uno: true,
    preflight: true,
    attributify: true,
  },
})
