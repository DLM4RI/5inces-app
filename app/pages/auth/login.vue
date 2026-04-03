<script setup lang="ts">
definePageMeta({
  middleware: 'guest'
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="p-8 rounded-2xl shadow-sm w-full max-w-md">
      <h1 class="text-2xl font-semibold text-[#FFB800] mb-6 text-center">
        Bienvenido de vuelta
      </h1>
      <LoginForm />
    </div>
  </div>
</template>