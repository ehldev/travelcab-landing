<template>
    <!-- SUPPORT -->
    <section class="section bg-slate-50" aria-labelledby="reliability-title">
        <div class="container max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
                <h2 id="reliability-title" class="text-3xl md:text-4xl font-bold text-slate-900 whitespace-pre-line" v-html="t('support.title')"></h2>
                <p class="mt-3 text-slate-600" v-html="t('support.description')"></p>
                <div class="mt-6 grid grid-cols-2 gap-4">
                    <div class="card p-5">
                        <h3 class="text-xl font-semibold text-slate-900" v-html="t('support.card1.title')"></h3>
                        <p class="mt-2 text-slate-600" v-html="t('support.card1.description')"></p>
                    </div>
                    <div class="card p-5">
                        <h3 class="text-xl font-semibold text-slate-900" v-html="t('support.card2.title')"></h3>
                        <p class="mt-2 text-slate-600" v-html="t('support.card2.description')"></p>
                    </div>
                </div>
            </div>

            <div class="card overflow-hidden p-2 lg:p-4" data-aos="fade-left">
                <img src="@/assets/images/soporte-travelcab.png" alt="SUV de Travelcab en Lima"
                    class="w-full h-400px md:h-[500px] rounded-xl object-cover" loading="lazy" decoding="async">
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>