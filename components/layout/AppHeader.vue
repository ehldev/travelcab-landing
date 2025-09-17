<template>
    <!-- HEADER -->
    <header class="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-white/80 backdrop-blur">
        <div class="container max-w-7xl h-16 flex items-center justify-between">
            <a href="#" class="inline-flex items-center gap-2 font-semibold tracking-wide text-slate-900">
                <!-- <i class="ri-steering-2-fill text-tc-blue text-xl" aria-hidden="true"></i>
        <h2>TRAVELCAB</h2> -->

                <img src="@/assets/images/logo-header.png" alt="Travelcab" class="w-[180px]">
            </a>

            <!-- Desktop nav -->
            <nav class="hidden md:flex items-center gap-6 text-sm text-slate-700" aria-label="Primario">
                <a href="#services" class="hover:text-slate-900">{{ $t('header.nav.services') }}</a>
                <a href="#about" class="hover:text-slate-900">{{ $t('header.nav.about') }}</a>
                <a href="#testimonials" class="hover:text-slate-900">{{ $t('header.nav.testimonials') }}</a>

                <!-- Selector idioma -->
                <div class="relative flex items-center gap-2">
                    <i class="ri-translate-2 text-slate-600 text-lg" aria-hidden="true"></i>
                    <select
                        class="appearance-none uppercase bg-transparent border border-slate-300 rounded-md px-3 py-1.5 text-sm text-slate-700 hover:border-slate-400 focus-ring cursor-pointer"
                        aria-label="Seleccionar idioma" v-model="currentLocale" @change="change()">
                        <option v-for="value in locales" :key="value.code">{{ value.code }}</option>
                    </select>
                </div>

                <a href="https://wa.me/+51934791872"
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-tc-blue hover:bg-tc-bluedark text-white font-medium focus-ring">
                    <i class="ri-send-plane-2-fill" aria-hidden="true"></i> {{ $t('header.nav.button') }}
                </a>
            </nav>

            <!-- Mobile toggle -->
            <button id="navToggle"
                class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100 text-slate-700 focus-ring"
                aria-controls="mobileNav" aria-expanded="false" aria-label="Abrir menú">
                <i class="ri-menu-fill text-xl" aria-hidden="true"></i>
            </button>
        </div>

        <!-- Mobile nav -->
        <div id="mobileNav" class="md:hidden hidden border-t border-[rgb(var(--border))] bg-white">
            <nav class="container max-w-7xl py-2 text-sm text-slate-700" aria-label="Móvil">
                <a href="#services" class="block px-2 py-2 hover:bg-slate-50 rounded-md">{{ $t('header.nav.services')
                }}</a>
                <a href="#about" class="block px-2 py-2 hover:bg-slate-50 rounded-md">{{ $t('header.nav.about') }}</a>
                <a href="#testimonials" class="block px-2 py-2 hover:bg-slate-50 rounded-md">{{
                    $t('header.nav.testimonials') }}</a>
                <div class="flex items-center gap-2 px-2 py-2">
                    <i class="ri-translate-2 text-slate-600 text-lg" aria-hidden="true"></i>
                    <select
                        class="flex-1 appearance-none bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 hover:border-slate-400 focus-ring cursor-pointer"
                        aria-label="Seleccionar idioma" v-model="currentLocale" @change="change()">
                        <option v-for="value in locales" :key="value.code">{{ value.code }}</option>
                    </select>
                </div>
                <a href="https://wa.me/+51934791872"
                    class="block mt-1 px-2 py-2 rounded-md bg-tc-blue hover:bg-tc-bluedark text-center text-white font-medium">{{
                        $t('header.nav.button') }}</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentLocale = ref('en')

if (route.path.startsWith('/es')) {
    currentLocale.value = 'es'
}

const { locale, locales, setLocale } = useI18n()
function change() {
    setLocale(currentLocale.value)
    router.push(currentLocale.value === 'es' ? '/es' : '/')
}

onMounted(() => {
    const btn = document.getElementById('navToggle');
    const nav = document.getElementById('mobileNav');
    btn?.addEventListener('click', () => {
        const open = nav.classList.toggle('hidden') === false;
        btn.setAttribute('aria-expanded', String(open));
    });
    document.getElementById('ft-year')?.append(new Date().getFullYear());
})
</script>