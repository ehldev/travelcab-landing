<template>
    <!-- FOOTER OSCURO -->
    <!-- FOOTER OSCURO · 4 columnas (5/2/2/3) -->
    <footer class="border-t border-slate-800 bg-slate-950 text-slate-300">
        <div class="container max-w-7xl py-12">
            <div class="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-10">

                <!-- ABOUT (col-span-5) -->
                <div class="md:col-span-5 flex flex-col">
                    <a href="#" class="inline-flex items-center gap-2 font-semibold text-white">
                        <img src="@/assets/images/footer-icon.png" alt="Travelcab" class="w-[20px]">
                        <h2>TRAVELCAB</h2>
                    </a>

                    <div class="mt-4 text-[15px] leading-7 max-w-prose">
                        <i18n-t keypath="footer.description1" tag="p">
                            <template #first><b>{{ currentLang == 'es' ? 'Somos Travelcab' : 'We are Travelcab' }}</b></template>
                        </i18n-t>
                        <p class="mt-3">
                            {{ $t("footer.description2") }}
                        </p>
                    </div>

                    <div class="mt-6">
                        <a href="https://zet.wize.pe/travelcab" target="_blank">
                            <img src="@/assets/images/libro-reclamaciones.png" alt="Libro de Reclamaciones"
                                class="h-24 w-auto object-contain rounded-md" loading="lazy" decoding="async">
                        </a>
                    </div>
                </div>

                <!-- SERVICIOS (col-span-2) -->
                <nav class="md:col-span-2" aria-labelledby="ft-services">
                    <h3 id="ft-services" class="text-white font-semibold text-lg">{{ $t("footer.services.title") }}</h3>
                    <ul class="mt-4 space-y-3 text-[15px]">
                        <li><a href="#services" class="hover:text-white">{{ $t("footer.services.list.0") }}</a></li>
                        <li><a href="#services" class="hover:text-white">{{ $t("footer.services.list.1") }}</a></li>
                        <li><a href="#services" class="hover:text-white">{{ $t("footer.services.list.2") }}</a></li>
                    </ul>
                </nav>

                <!-- EMPRESA (col-span-2) -->
                <nav class="md:col-span-2" aria-labelledby="ft-company">
                    <h3 id="ft-company" class="text-white font-semibold text-lg">{{ $t("footer.company.title") }}</h3>
                    <ul class="mt-4 space-y-3 text-[15px]">
                        <li><a href="#about" class="hover:text-white">{{ $t("footer.company.list.0") }}</a></li>
                        <li><a href="#testimonials" class="hover:text-white">{{ $t("footer.company.list.1") }}</a></li>
                        <li><a href="#" class="hover:text-white">{{ $t("footer.company.list.2") }}</a></li>
                    </ul>
                </nav>

                <!-- CONTACTO (col-span-3) -->
                <address class="md:col-span-3 not-italic" aria-labelledby="ft-contact">
                    <h3 id="ft-contact" class="text-white font-semibold text-lg">{{ $t("footer.contact.title") }}</h3>

                    <ul class="mt-4 space-y-4">
                        <li class="flex items-start gap-3">
                            <i class="ri-mail-line text-tc-blue text-2xl mt-0.5" aria-hidden="true"></i>
                            <a href="mailto:travelsafe@travelcab.net" class="text-base md:text-lg hover:text-white">
                                travelsafe@travelcab.net
                            </a>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ri-phone-line text-tc-blue text-2xl mt-0.5" aria-hidden="true"></i>
                            <a href="tel:+51934791872" class="text-base md:text-lg hover:text-white">+51 934 791 872</a>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ri-whatsapp-line text-tc-blue text-2xl mt-0.5" aria-hidden="true"></i>
                            <a href="https://wa.me/51934791872" class="text-base md:text-lg hover:text-white">
                                +51 934 791 872
                            </a>
                        </li>
                    </ul>

                    <!-- Redes -->
                    <div class="mt-6 flex items-center gap-3" aria-label="Redes sociales">
                        <a href="#" aria-label="Facebook"
                            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700">
                            <i class="ri-facebook-circle-fill text-white text-2xl" aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="TikTok"
                            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700">
                            <i class="ri-tiktok-fill text-white text-2xl" aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="Instagram"
                            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700">
                            <i class="ri-instagram-line text-white text-2xl" aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="YouTube"
                            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700">
                            <i class="ri-youtube-fill text-white text-2xl" aria-hidden="true"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn"
                            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700">
                            <i class="ri-linkedin-box-fill text-white text-2xl" aria-hidden="true"></i>
                        </a>
                    </div>
                </address>
            </div>

            <!-- Bottom bar -->
            <div
                class="mt-10 border-t border-slate-800 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
                <p>© <span id="ft-year"></span> Travelcab. {{ $t("footer.footerDetails.text") }}</p>
                <nav class="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a href="#" class="hover:text-white">{{ $t("footer.footerDetails.links.0") }}</a>
                    <a href="#" class="hover:text-white">{{ $t("footer.footerDetails.links.1") }}</a>
                    <a href="#" class="hover:text-white">{{ $t("footer.footerDetails.links.2") }}</a>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { computed } from 'vue'
const { t, locale } = useI18n()

const currentLang = computed(() => locale.value)
</script>