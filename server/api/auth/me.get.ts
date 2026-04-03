import { defineEventHandler, getHeader, createError } from 'h3'
import prisma from '../../utils/prisma'
import { verificarToken } from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization')

  if (!authHeader?.startsWith('Bearer ')) {
    throw createError({ statusCode: 401, message: 'No autorizado' })
  }

  const token = authHeader.split(' ')[1]

  if (!token) {
    throw createError({ statusCode: 401, message: 'Token no encontrado' })
  }

  try {
    const payload = await verificarToken(token)

    const usuario = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, name: true, email: true, role: true }
    })

    if (!usuario) {
      throw createError({ statusCode: 401, message: 'Usuario no encontrado' })
    }

    return usuario
  } catch {
    throw createError({ statusCode: 401, message: 'Token inválido o expirado' })
  }
})