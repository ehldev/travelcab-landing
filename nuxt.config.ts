// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-aos', '@vite-pwa/nuxt'],
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
  },
  pwa: {
    registerType: 'autoUpdate',
    strategies: 'generateSW', // 👈 esto es clave
    manifest: {
      name: 'Mi App PWA',
      short_name: 'MiPWA',
      description: 'Landing PWA de ejemplo',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      start_url: '/',   // raíz en Netlify
      scope: '/',
    },
    workbox: {
      navigateFallback: '/offline', // o '/offline.html' si usas public/offline.html
      navigateFallbackAllowlist: [/^\/.*/],
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
      maximumFileSizeToCacheInBytes: 6 * 1024 * 1024
    },
    includeAssets: [
      // 'offline.html',        // si usas archivo en /public
      // 'icon-192x192.png',
      // 'icon-512x512.png',
      'banner.jpg'
    ],
  },

  // 👇 Muy importante: dile a Nitro que prerenderice las rutas necesarias
  nitro: {
    prerender: {
      routes: ['/', '/en'] // asegura que / esté en el build estático
    }
  }
})