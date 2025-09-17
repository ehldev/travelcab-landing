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
                {{ t('about.modal.title') }}
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
                <!-- Nombre -->
                <label class="block">
                  <span class="sr-only">{{ t('about.modal.form.name') }}</span>
                  <input
                    v-model.trim="form.nombre"
                    type="text"
                    :placeholder="t('about.modal.form.name')"
                    @blur="v$.form.nombre.$touch()"
                    :aria-invalid="v$.form.nombre.$error"
                    class="w-full rounded-xl bg-white/5 border px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                    :class="v$.form.nombre.$error ? 'border-red-500/70' : 'border-white/10'"
                  />
                  <p v-if="v$.form.nombre.$error" class="mt-1 text-xs text-red-400">
                    {{ nameMsg }}
                  </p>
                </label>

                <!-- Email -->
                <label class="block">
                  <span class="sr-only">{{ t('about.modal.form.email') }}</span>
                  <input
                    v-model.trim="form.email"
                    type="email"
                    :placeholder="t('about.modal.form.email')"
                    @blur="v$.form.email.$touch()"
                    :aria-invalid="v$.form.email.$error"
                    class="w-full rounded-xl bg-white/5 border px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                    :class="v$.form.email.$error ? 'border-red-500/70' : 'border-white/10'"
                  />
                  <p v-if="v$.form.email.$error" class="mt-1 text-xs text-red-400">
                    {{ emailMsg }}
                  </p>
                </label>

                <!-- RUC (opcional) -->
                <label class="block">
                  <span class="sr-only">{{ t('about.modal.form.ruc') }}</span>
                  <input
                    v-model.trim="form.ruc"
                    type="text"
                    :placeholder="t('about.modal.form.ruc')"
                    @blur="v$.form.ruc.$touch()"
                    :aria-invalid="v$.form.ruc.$error"
                    class="w-full rounded-xl bg-white/5 border px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                    :class="v$.form.ruc.$error ? 'border-red-500/70' : 'border-white/10'"
                  />
                  <p v-if="v$.form.ruc.$error" class="mt-1 text-xs text-red-400">
                    {{ locale === 'es' ? 'El RUC debe tener 11 dígitos.' : 'RUC must be 11 digits.' }}
                  </p>
                </label>

                <!-- Celular -->
                <label class="block">
                  <span class="sr-only">{{ t('about.modal.form.phone') }}</span>
                  <input
                    v-model.trim="form.telefono"
                    type="tel"
                    :placeholder="t('about.modal.form.phone')"
                    @blur="v$.form.telefono.$touch()"
                    :aria-invalid="v$.form.telefono.$error"
                    class="w-full rounded-xl bg-white/5 border px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                    :class="v$.form.telefono.$error ? 'border-red-500/70' : 'border-white/10'"
                  />
                  <p v-if="v$.form.telefono.$error" class="mt-1 text-xs text-red-400">
                    {{ locale === 'es' ? 'Ingresa solo dígitos (mín. 6).' : 'Enter only digits (min. 6).' }}
                  </p>
                </label>
              </div>

              <!-- Mensaje -->
              <label class="block">
                <span class="sr-only">{{ t('about.modal.form.message') }}</span>
                <textarea
                  v-model.trim="form.mensaje"
                  rows="3"
                  :placeholder="t('about.modal.form.message')"
                  @blur="v$.form.mensaje.$touch()"
                  class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 outline-none placeholder-white/40 text-white focus:border-white/30"
                ></textarea>
              </label>

              <div class="flex items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  :disabled="v$.$invalid && v$.$dirty"
                  class="w-full d-flex justift-center items-center gap-2 rounded-3xl bg-[#365EFF] px-4 py-2.5 font-medium text-white hover:bg-[#365EFF] focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ t('about.modal.form.button') }}
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
import { reactive, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const { t, locale } = useI18n()

const props = defineProps<{ open: boolean }>()
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

/* Validadores */
const onlyDigits = helpers.regex(/^\d+$/) // solo números
const rucOptional = (value: string) => !value || /^\d{11}$/.test(value)

const rules = computed(() => ({
  form: {
    nombre: { required, minLength: minLength(2) },
    email: { required, email },
    ruc: { rucOptional: helpers.withMessage('RUC inválido', rucOptional) },
    telefono: { required, onlyDigits, minLength: minLength(6) },
    mensaje: {}
  }
}))

const v$ = useVuelidate(rules, { form })

/* Mensajes */
const nameMsg = computed(() => {
  if (!v$.value.form.nombre.$dirty) return ''
  if (v$.value.form.nombre.required.$invalid) return locale.value === 'es' ? 'El nombre es obligatorio.' : 'Name is required.'
  if (v$.value.form.nombre.minLength.$invalid) return locale.value === 'es' ? 'Mínimo 2 caracteres.' : 'Minimum 2 characters.'
  return ''
})

const emailMsg = computed(() => {
  if (!v$.value.form.email.$dirty) return ''
  if (v$.value.form.email.required.$invalid) return locale.value === 'es' ? 'El correo es obligatorio.' : 'Email is required.'
  if (v$.value.form.email.email.$invalid) return locale.value === 'es' ? 'Formato de correo inválido.' : 'Invalid email format.'
  return ''
})

const close = () => emit('update:open', false)

const submit = async () => {
  const ok = await v$.value.$validate()
  if (!ok) return
  emit('submit', { ...form })
  v$.value.$reset()
  close()
}

/* Evitar error SSR al tocar document/window */
const lockScroll = (lock: boolean) => {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = lock ? 'hidden' : ''
}

onMounted(() => {
  const stop = watch(() => props.open, (v) => lockScroll(v), { immediate: true })
  const handler = () => lockScroll(false)
  window.addEventListener('beforeunload', handler)

  onBeforeUnmount(() => {
    stop()
    window.removeEventListener('beforeunload', handler)
    lockScroll(false)
  })
})
</script>

<style scoped>
/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 200ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.scale-enter-active, .scale-leave-active { transition: transform 200ms ease, opacity 200ms ease; }
.scale-enter-from, .scale-leave-to { transform: scale(0.98); opacity: 0; }
</style>