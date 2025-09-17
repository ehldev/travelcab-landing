<!-- DemoRequestModal.vue -->
<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[1000] flex items-center justify-center p-4"
        @keydown.esc.prevent="close"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/60" @click="close"></div>

        <!-- Panel -->
        <transition name="scale">
          <div
            v-if="open"
            class="relative w-full max-w-2xl rounded-2xl shadow-2xl text-white border border-white/10"
            :style="{ backgroundColor: 'rgb(2 6 23)' }"
          >
            <!-- Header -->
            <div class="px-10 pt-10 pr-12">
              <h2 :id="titleId" class="text-[20px] md:text-[26px] font-bold leading-tight">
                Solicita información sobre nuestros servicios
              </h2>

              <!-- Close -->
              <button
                type="button"
                @click="close"
                class="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z"
                  />
                </svg>
              </button>
            </div>

            <!-- Body / Form -->
            <form class="px-10 pb-12 pt-4 mt-4 space-y-4" @submit.prevent="submit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="block">
                  <span class="sr-only">Nombre</span>
                  <input
                    v-model="form.nombre"
                    type="text"
                    placeholder="Nombre"
                    class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                    required
                  />
                </label>

                <label class="block">
                  <span class="sr-only">Correo electrónico</span>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Correo electrónico"
                    class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                    required
                  />
                </label>

                <label class="block">
                  <span class="sr-only">RUC</span>
                  <input
                    v-model="form.ruc"
                    type="text"
                    placeholder="RUC"
                    class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                  />
                </label>

                <label class="block">
                  <span class="sr-only">Celular</span>
                  <input
                    v-model="form.telefono"
                    type="tel"
                    placeholder="Celular"
                    class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                  />
                </label>
              </div>

              <label class="block">
                <span class="sr-only">Mensaje</span>
                <textarea
                  v-model="form.mensaje"
                  rows="3"
                  placeholder="Indica tu consulta o mensaje"
                  class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                ></textarea>
              </label>

              <div class="flex items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  class="w-full d-flex justift-center items-center gap-2 rounded-3xl bg-[#10B981] px-4 py-2.5 font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Solicitar
                </button>
              </div>
            </form>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, watch, onMounted } from 'vue'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
  (e: 'submit', payload: Record<string, string>): void
}>()

const titleId = 'demo-modal-title'

const form = reactive({
  nombre: '',
  email: '',
  ruc: '',
  telefono: '',
  mensaje: ''
})

const close = () => emit('update:open', false)

const submit = () => {
  emit('submit', { ...form })
  close()
}

watch(
  () => props.open,
  (v) => {
    // Simple bloqueo de scroll del body
    document.documentElement.style.overflow = v ? 'hidden' : ''
  },
  { immediate: true }
)

onMounted(() => {
  // Limpieza por si el componente se desmonta con el modal abierto
  window.addEventListener('beforeunload', () => {
    document.documentElement.style.overflow = ''
  })
})
</script>

<style scoped>
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 200ms ease, opacity 200ms ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.98);
  opacity: 0;
}
</style>