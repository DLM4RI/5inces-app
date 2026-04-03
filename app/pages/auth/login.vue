<script setup lang="ts">
import LogoImg from '~/components/start/LogoImg.vue';

definePageMeta({
  middleware: 'guest'
})
</script>

<template>
  <div class="min-h-screen w-full flex lg:flex-row flex-col lg:gap-16 lg:text-sm items-center justify-center bg-black">
    <LogoImg class="mb-6" />
    <div class="p-8 rounded-2xl shadow-sm w-full max-w-md">
      <h1 class="text-2xl font-bold font-Viga text-white mb-6 text-center lg:text-left">
        Bienvenido de vuelta
      </h1>
      <LoginForm />
    </div>
  </div>
</template>