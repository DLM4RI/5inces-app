<script setup lang="ts">
const { register, cargando, error } = useAuth()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmar: ''
})

const errorLocal = ref('')

const enviar = () => {
  errorLocal.value = ''
  if (form.password !== form.confirmar) {
    errorLocal.value = 'Las contraseñas no coinciden'
    return
  }
  register(form.name, form.email, form.password)
}
</script>

<template>
  <form @submit.prevent="enviar" class="space-y-4">
    <div v-if="error || errorLocal" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
      {{ error || errorLocal }}
    </div>

    <div>
      <label class="block text-sm font-Boldonse font-bold text-[#FFB800] mb-1">Nombre</label>
      <input
        v-model="form.name"
        type="text"
        required
        placeholder="Tu nombre"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-Boldonse font-bold text-[#FFB800] mb-1">Email</label>
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="tu@email.com"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-Boldonse font-bold text-[#FFB800] mb-1">Contraseña</label>
      <input
        v-model="form.password"
        type="password"
        required
        placeholder="Mínimo 6 caracteres"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-mediumfont-Boldonse font-bold text-[#FFB800] mb-1">Confirmar contraseña</label>
      <input
        v-model="form.confirmar"
        type="password"
        required
        placeholder="Repite la contraseña"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      :disabled="cargando"
      class="w-full bg-[#FFB800] text-white py-2 rounded-lg hover:bg-[#ffd97a] disabled:opacity-50 transition"
    >
      {{ cargando ? 'Creando cuenta...' : 'Crear cuenta' }}
    </button>

    <p class="text-center text-sm text-gray-500">
      ¿Ya tienes cuenta?
      <NuxtLink to="/auth/login" class="text-blue-600 hover:underline">
        Inicia sesión
      </NuxtLink>
    </p>
  </form>
</template>