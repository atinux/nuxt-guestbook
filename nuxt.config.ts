export default defineNuxtConfig({
  extends: [
    'https://hub.nuxt.com/layer',
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: { enabled: true },
})
