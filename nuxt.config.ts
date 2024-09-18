export default defineNuxtConfig({
  compatibilityDate: '2024-09-18',
  future: { compatibilityVersion: 4 },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxthub/core',
  ],
  hub: {
    database: true
  },
  devtools: { enabled: true },
})