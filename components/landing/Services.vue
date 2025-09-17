<template>
    <!-- SERVICIOS -->
    <section id="services" class="section bg-white" aria-labelledby="services-title">
        <div class="container max-w-7xl">
            <h2 id="services-title" class="text-3xl md:text-4xl font-bold text-slate-900">
                {{ t('services.title') }}
            </h2>
            <p class="mt-3 text-slate-600">{{ t('services.description') }}</p>

            <div class="mt-8 grid md:grid-cols-3 gap-6">
                <article class="card p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <i class="ri-flight-takeoff-fill text-tc-blue text-2xl" aria-hidden="true"></i>
                        <h3 class="text-xl font-semibold">{{ t('services.items.0.title') }}</h3>
                    </div>
                    <p class="text-slate-600">{{ t('services.items.0.description') }}</p>
                </article>

                <article class="card p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <i class="ri-time-fill text-tc-blue text-2xl" aria-hidden="true"></i>
                        <h3 class="text-xl font-semibold">{{ t('services.items.1.title') }}</h3>
                    </div>
                    <p class="text-slate-600">{{ t('services.items.1.description') }}</p>
                </article>

                <article class="card p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <i class="ri-building-fill text-tc-blue text-2xl" aria-hidden="true"></i>
                        <h3 class="text-xl font-semibold">{{ t('services.items.2.title') }}</h3>
                    </div>
                    <p class="text-slate-600">{{ t('services.items.2.description') }}</p>
                </article>
            </div>

            <div class="mt-8">
                <a href="https://wa.me/+51934791872"
                    class="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tc-blue hover:bg-tc-bluedark text-white font-semibold">
                    <i class="ri-send-plane-2-fill" aria-hidden="true"></i> {{ t('services.button') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>