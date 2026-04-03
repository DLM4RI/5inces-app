<script setup lang="ts">
definePageMeta({
  middleware: ['auth'] as any
})

const { user, logout, esAdmin } = useAuth()
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-2xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm p-6">
        <h1 class="text-2xl font-semibold mb-2">Hola, {{ user?.name }} 👋</h1>
        <p class="text-gray-500 mb-1">Email: {{ user?.email }}</p>
        <p class="text-gray-500 mb-4">
          Rol:
          <span class="font-medium" :class="esAdmin ? 'text-purple-600' : 'text-blue-600'">
            {{ user?.role }}
          </span>
        </p>

        <NuxtLink
          v-if="esAdmin"
          to="/admin"
          class="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg mr-3 hover:bg-purple-700"
        >
          Panel Admin
        </NuxtLink>

        <button
          @click="logout"
          class="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</template>