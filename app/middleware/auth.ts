export default defineNuxtRouteMiddleware(() => {
  const { estaLogueado } = useAuth()
  if (!estaLogueado.value) {
    return navigateTo('/auth/login')
  }
})