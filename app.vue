<!-- app.vue -->
<template>
  <div class="antialiased">
    <AppHeader />
    <main id="content" class="overflow-hidden">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' }
  ]
})

onMounted(() => {
  const route = useRoute()
  const { locale, setLocale } = useI18n()

  if (route.path.startsWith('/en')) {
    setLocale('en')
  } else {
    setLocale('es')
  }
})
// Verificar con el router si en la URL existe el parametro "en" en ese caso cambiar el idioma
</script>

<style></style>