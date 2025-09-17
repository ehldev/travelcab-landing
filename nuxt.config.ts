// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-aos'],
  css: ['~/assets/css/main.css', 'remixicon/fonts/remixicon.css'],
  i18n: {
    // strategy: 'prefix_except_default', // raíz = defaultLocale sin prefijo
    strategy: 'no_prefix',
    defaultLocale: 'es',
    detectBrowserLanguage: false,
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
    // langDir: 'locales'
  }
})