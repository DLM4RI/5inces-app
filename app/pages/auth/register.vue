<script setup lang="ts">
definePageMeta({
  middleware: ['guest'] as any
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="p-8 rounded-2xl shadow-sm w-full max-w-md">
      <h1 class="text-2xl font-semibold text-white mb-6 text-center">
        Crear cuenta
      </h1>
      <RegisterForm />
    </div>
  </div>
</template>