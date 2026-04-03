<script setup>
const { cargarUsuario } = useAuth()

onMounted(() => {
  cargarUsuario()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>