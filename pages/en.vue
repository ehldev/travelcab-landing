<template>
  <div>
    <Banner />
    <Services />
    <About />
    <Testimonials />
    <Support />
  </div>
</template>

<script setup>
import Banner from '~/components/landing/Banner.vue';
import Services from '~/components/landing/Services.vue';
import About from '~/components/landing/About.vue';
import Testimonials from '~/components/landing/Testimonials.vue';
import Support from '~/components/landing/Support.vue';

const og = 'https://wize.pe/wp-content/uploads/2025/09/logo-travelcab.png'
const url = 'https://travelcab.net/' // URL canonical de la home ES

useSeoMeta({
  title: 'Travelcab — Premium Transport in Lima',
  description: 'Travelcab: safe and reliable transport in Lima. Black SUVs, professional drivers, 24/7 service. Book online now.',
  ogTitle: 'Travelcab — Premium Transport in Lima',
  ogDescription: 'Travelcab: safe and reliable transport in Lima. Black SUVs, professional drivers, 24/7 service. Book online now.',
  ogType: 'website',
  ogUrl: url,
  ogSiteName: 'Travelcab',
  ogImage: og,
  twitterCard: 'summary_large_image',
  twitterImage: og
})

// const { t, locale, setLocale, localePath } = useI18n()
// import { ref, onMounted } from 'vue'

// const isOffline = ref(false)

// onMounted(() => {
//   isOffline.value = !navigator.onLine

//   window.addEventListener('offline', () => isOffline.value = true)
//   window.addEventListener('online', () => isOffline.value = false)
// })
</script>