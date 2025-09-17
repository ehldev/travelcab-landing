<template>
    <!-- HERO -->
    <section class="relative app-hero">
        <div class="container max-w-7xl relative z-10 section">
            <div class="grid lg:grid-cols-2 gap-10 items-center">
                <div class="text-white" data-aos="fade-right">
                    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight whitespace-pre-line" v-html="t('banner.title')"></h1>
                    <p class="mt-4 max-w-xl text-white/90 description">{{ t('banner.description') }}</p>
                    <div class="mt-6">
                        <p class="text-sm text-white/80 description">{{ t('banner.description2') }}</p>
                        <div class="mt-3 flex flex-wrap items-center gap-3">
                            <a href="https://wa.me/+51934791872"
                                class="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tc-blue hover:bg-tc-bluedark text-white font-semibold">
                                <i class="ri-send-plane-2-fill" aria-hidden="true"></i> {{ t('banner.button1') }}
                            </a>
                            <span class="text-xs text-white/80">{{ t('banner.or') }}</span>
                            <a href="https://wa.me/51900000000"
                                class="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
                                aria-label="Open WhatsApp chat">
                                <i class="ri-whatsapp-fill" aria-hidden="true"></i> {{ t('banner.button2') }}
                            </a>
                        </div>
                    </div>
                </div>

                <!-- ¿Por qué Travelcab? -->
                <aside class="card p-6 shadow-lg" data-aos="fade-left">
                    <h2 class="text-2xl font-semibold">{{ t('banner.card.title') }}</h2>
                    <ul class="mt-4 space-y-3 text-sm md:text-base text-slate-700">
                        <li class="flex items-start gap-3"><i
                                class="ri-shield-check-fill text-tc-blue mt-0.5"></i><span>{{ t('banner.card.features.0') }}</span></li>
                        <li class="flex items-start gap-3"><i
                                class="ri-translate-2 text-tc-blue mt-0.5"></i><span>{{ t('banner.card.features.1') }}</span></li>
                        <li class="flex items-start gap-3"><i
                                class="ri-user-star-fill text-tc-blue mt-0.5"></i><span>{{ t('banner.card.features.2') }}</span></li>
                        <li class="flex items-start gap-3"><i
                                class="ri-window-2-fill text-tc-blue mt-0.5"></i><span>{{ t('banner.card.features.3') }}</span></li>
                        <!--<li class="flex items-start gap-3"><i class="ri-camera-lens-fill text-tc-blue mt-0.5"></i><span>Cámaras en
                  cabina para un taxi seguro aeropuerto Lima.</span></li>-->
                    </ul>
                </aside>
            </div>
        </div>

        <!-- Franja institucional -->
        <div class="bg-tc-blue py-4">
            <div class="container max-w-7xl flex items-center justify-center gap-3 text-white font-semibold">
                <img src="@/assets/images/miembro-oficial.png" alt="AHORA Perú" class="h-10 w-10 object-contain">
                <span>{{ t('banner2.title') }}</span>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.app-hero {
  background-image: linear-gradient(to bottom, rgba(2,6,23,.45), rgba(2,6,23,.80)), url('@/assets/images/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.description {
  text-shadow:
    0 2px 2px rgba(0,0,0,0.20),
    0 4px 4px rgba(0,0,0,0.25);
}
</style>