<template>
    <!-- TESTIMONIOS -->
    <!-- TESTIMONIOS (TripAdvisor) -->
    <section id="testimonials" class="section bg-white" aria-labelledby="testimonials-title">
        <div class="container max-w-7xl">
            <div class="flex items-end justify-between gap-4">
                <h2 id="testimonials-title" class="text-3xl md:text-4xl font-bold text-slate-900">{{ t('testimonials.title') }}</h2>
                <!-- CTA global opcional -->
                <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                    class="hidden md:inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">
                    {{ t('testimonials.link') }} <i class="ri-arrow-right-up-line"></i>
                </a>
            </div>

            <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="0">
                    <div class="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/80?img=12" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy" decoding="async">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">Cika D</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>

                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>

                    <h3 class="mt-3 text-lg font-semibold text-slate-900">Excelente servicio</h3>
                    <p class="mt-2 text-slate-600">
                        Enzo fue muy amable y respondió a todas nuestras preguntas. Muy profesional. Lo recomendaría
                        enormemente.
                    </p>

                    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">
                        Leer más <i class="ri-arrow-right-up-line"></i>
                    </a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="50">
                    <div class="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/80?img=22" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">María P</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">Puntuales y muy atentos</h3>
                    <p class="mt-2 text-slate-600">Llegamos tarde en la noche y nos esperaron con un cartel. SUV
                        impecable y
                        conductor muy profesional.</p>
                    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/80?img=45" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">Jacob R</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">Seguro y confiable</h3>
                    <p class="mt-2 text-slate-600">Viajé solo por trabajo. Me sentí seguro en todo momento. Muy
                        recomendado para
                        ejecutivos.</p>
                    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="150">
                    <div class="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/80?img=15" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">Lucía A</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">Excelente atención</h3>
                    <p class="mt-2 text-slate-600">Coordinación por WhatsApp súper rápida. El chofer nos ayudó con las
                        maletas y
                        recomendaciones en Lima.</p>
                    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/80?img=28" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">Daniel S</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">Ideal para familias</h3>
                    <p class="mt-2 text-slate-600">Silla para niño, agua a bordo y SUV cómoda. Gran experiencia al salir
                        del
                        aeropuerto.</p>
                    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>

                <!-- Item -->
                <figure class="card p-6" data-aos="fade-up" data-aos-delay="250">
                    <div class="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/80?img=7" alt="Avatar de cliente"
                            class="h-10 w-10 rounded-full object-cover" loading="lazy">
                        <figcaption>
                            <div class="font-semibold text-slate-900 leading-tight">Sophie L</div>
                            <div class="text-xs text-slate-500">Desde TripAdvisor</div>
                        </figcaption>
                    </div>
                    <div class="mt-4 flex items-center gap-1 text-emerald-600" aria-label="5 de 5 estrellas">
                        <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i
                            class="ri-star-fill"></i><i class="ri-star-fill"></i>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold text-slate-900">Profesionales y cordiales</h3>
                    <p class="mt-2 text-slate-600">Muy buenos conductores y autos impecables. Volvería a reservar sin
                        dudar.</p>
                    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tc-blue hover:underline">Leer
                        más <i class="ri-arrow-right-up-line"></i></a>
                </figure>
            </div>

            <!-- CTA global visible en mobile -->
            <div class="mt-8 flex justify-center md:hidden">
                <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener nofollow"
                    class="focus-ring inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tc-blue hover:bg-tc-bluedark text-white font-semibold">
                    <i class="ri-external-link-line" aria-hidden="true"></i> Ver más reseñas en TripAdvisor
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>