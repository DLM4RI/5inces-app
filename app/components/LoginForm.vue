<script setup lang="ts">
const { login, cargando, error } = useAuth()

const form = reactive({
  email: '',
  password: ''
})

const enviar = () => login(form.email, form.password)
</script>

<template>
  <form @submit.prevent="enviar" class="space-y-4">
    <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
      {{ error }}
    </div>

    <div>
      <label class="block text-sm font-medium text-[#FFB800] mb-1">Email</label>
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="tu@email.com"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-[#FFB800] mb-1">Contraseña</label>
      <input
        v-model="form.password"
        type="password"
        required
        placeholder="••••••••"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      :disabled="cargando"
      class="w-full bg-[#FFB800] text-white py-2 rounded-lg hover:bg-[#ffd97a] disabled:opacity-50 transition"
    >
      {{ cargando ? 'Entrando...' : 'Iniciar sesión' }}
    </button>

    <p class="text-center text-sm text-gray-500">
      ¿No tienes cuenta?
      <NuxtLink to="/auth/register" class="text-blue-600 hover:underline">
        Regístrate
      </NuxtLink>
    </p>
  </form>
</template>