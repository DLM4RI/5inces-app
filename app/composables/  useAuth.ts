export const useAuth = () => {
  const token = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  const user = useState<{
    id: number
    name: string
    email: string
    role: string
  } | null>('auth_user', () => null)

  const cargando = ref(false)
  const error = ref('')

  const register = async (name: string, email: string, password: string) => {
    cargando.value = true
    error.value = ''
    try {
      const data = await $fetch<any>('/api/auth/register', {
        method: 'POST',
        body: { name, email, password }
      })
      token.value = data.token
      user.value = data.user
      await navigateTo('/dashboard')
    } catch (e: any) {
      error.value = e?.data?.message || 'Error al registrarse'
    } finally {
      cargando.value = false
    }
  }

  const login = async (email: string, password: string) => {
    cargando.value = true
    error.value = ''
    try {
      const data = await $fetch<any>('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })
      token.value = data.token
      user.value = data.user
      await navigateTo('/dashboard')
    } catch (e: any) {
      error.value = e?.data?.message || 'Email o contraseña incorrectos'
    } finally {
      cargando.value = false
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    navigateTo('/auth/login')
  }

  const cargarUsuario = async () => {
  if (!token.value || user.value) return
  try {
    const data = await $fetch<{
      id: number
      name: string
      email: string
      role: string
    }>('/api/auth/me', {
      headers: { Authorization: `Bearer ${token.value}` }
    })
    user.value = data
  } catch {
    token.value = null
    user.value = null
  }
}

  const estaLogueado = computed(() => !!token.value)
  const esAdmin = computed(() => user.value?.role === 'ADMIN')

  return {
    user,
    token,
    cargando,
    error,
    login,
    register,
    logout,
    cargarUsuario,
    estaLogueado,
    esAdmin
  }
}