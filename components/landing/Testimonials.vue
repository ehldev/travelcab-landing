<template>
    <!-- TESTIMONIOS -->
    <!-- TESTIMONIOS (TripAdvisor) -->
    <section id="testimonials" class="section bg-white" aria-labelledby="testimonials-title">
        <div class="container max-w-7xl">
            <div class="flex items-end justify-between gap-4">
                <h2 id="testimonials-title" class="text-3xl md:text-4xl font-bold text-slate-900">{{ t('testimonials.title') }}</h2>
                <!-- CTA global opcional -->
                <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                    class="hidden md:inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">
                    {{ t('testimonials.link') }} <i class="ri-arrow-right-up-line"></i>
                </a>
            </div>

            <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="0">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/images/testimonials/beatriz-s.jpg" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy" decoding="async">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">{{ t('testimonials.list.0.name') }}</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>

                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>

                    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ t('testimonials.list.0.subtitle') }}</h3>
                    <p class="mt-2 text-slate-600">
                        {{ t('testimonials.list.0.description') }}
                    </p>

                    <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">
                        Leer más <i class="ri-arrow-right-up-line"></i>
                    </a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="50">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/images/testimonials/zika-d.jpg" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">{{ t('testimonials.list.1.name') }}</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ t('testimonials.list.1.subtitle') }}</h3>
                    <p class="mt-2 text-slate-600">{{ t('testimonials.list.1.description') }}</p>
                    <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/images/testimonials/franco-z.jpg" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">{{ t('testimonials.list.2.name') }}</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ t('testimonials.list.2.subtitle') }}</h3>
                    <p class="mt-2 text-slate-600">{{ t('testimonials.list.2.description') }}</p>
                    <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="150">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/images/testimonials/katherine.jpg" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">{{ t('testimonials.list.3.name') }}</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ t('testimonials.list.3.subtitle') }}</h3>
                    <p class="mt-2 text-slate-600">{{ t('testimonials.list.3.description') }}</p>
                    <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/images/testimonials/olga.jpg" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">{{ t('testimonials.list.4.name') }}</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ t('testimonials.list.4.subtitle') }}</h3>
                    <p class="mt-2 text-slate-600">{{ t('testimonials.list.4.description') }}</p>
                    <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="250">
                    <div class="flex items-center gap-3">
                        <img src="@/assets/images/testimonials/pamela.jpg" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">{{ t('testimonials.list.5.name') }}</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ t('testimonials.list.5.subtitle') }}</h3>
                    <p class="mt-2 text-slate-600">{{ t('testimonials.list.5.description') }}</p>
                    <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>
            </div>

            <!-- CTA global visible en mobile -->
            <div class="mt-8 flex justify-center md:hidden">
                <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294316-d27469003-Reviews-Travelcab_Peru-Lima_Lima_Region.html" target="_blank" rel="noopener nofollow"
                    class="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tc-blue hover:bg-tc-bluedark text-white font-semibold">
                    <i class="ri-external-link-line" aria-hidden="true"></i> {{ t('testimonials.link') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>