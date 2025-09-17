<template>
    <!-- ABOUT -->
    <section id="about" class="section" aria-labelledby="safety-title">
      <div class="container max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        <div data-aos="fade-right">
          <h2 id="safety-title" class="text-3xl md:text-4xl font-bold text-slate-900">{{ t('about.title') }}</h2>
          <p class="mt-3 text-slate-600">{{ t('about.description') }}</p>
          <ul class="mt-5 space-y-3 text-slate-700">
            <li class="flex items-start gap-3"><i class="ri-building-2-fill text-tc-blue mt-0.5"
                aria-hidden="true"></i><span>{{ t('about.features.0') }}</span></li>
            <li class="flex items-start gap-3"><i class="ri-briefcase-4-fill text-tc-blue mt-0.5"
                aria-hidden="true"></i><span>{{ t('about.features.1') }}</span></li>
            <li class="flex items-start gap-3"><i class="ri-earth-fill text-tc-blue mt-0.5"
                aria-hidden="true"></i><span>{{ t('about.features.2') }}</span></li>
            <li class="flex items-start gap-3"><i class="ri-car-fill text-tc-blue mt-0.5"
                aria-hidden="true"></i><span>{{ t('about.features.3') }}</span></li>
          </ul>
          <div class="mt-8" data-aos="fade-up" data-aos-delay="150">
            <button type="button" @click="isOpen = true"
              class="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tc-blue hover:bg-tc-bluedark text-white font-semibold">
              <i class="ri-chat-3-fill" aria-hidden="true"></i> {{ t('about.button') }}
            </button>
          </div>
        </div>

        <div class="card p-6" data-aos="fade-left">
          <img src="@/assets/images/travelcab-nosotros.png" alt="SUV negra ejecutiva de Travelcab"
            class="rounded-xl w-full h-400px md:h-[500px]" loading="lazy" decoding="async">
        </div>
      </div>

      <ContactModal v-model:open="isOpen" @submit="handleSubmit" />
    </section>
</template>

<script setup>
import { ref } from 'vue'

import ContactModal from '~/components/landing/ContactModal.vue'
const { t } = useI18n()

const isOpen = ref(false)

const handleSubmit = () => {
  console.log('Formulario enviado:')
  // Aquí puedes llamar a tu API / n8n, etc.
}
</script>