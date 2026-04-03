import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { defineEventHandler, readBody, createError } from 'h3'
import prisma from '../../utils/prisma'
import { crearToken } from '../../utils/jwt'


const esquema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Escribe tu contraseña'),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const resultado = esquema.safeParse(body)
  if (!resultado.success) {
    throw createError({
      statusCode: 400,
      message: resultado.error.issues[0]?.message ?? 'Datos inválidos'
    })
  }

  const { email, password } = resultado.data

  const usuario = await prisma.user.findUnique({ where: { email } })
  if (!usuario) {
    throw createError({ statusCode: 401, message: 'Email o contraseña incorrectos' })
  }

  const passwordCorrecta = await bcrypt.compare(password, usuario.password)
  if (!passwordCorrecta) {
    throw createError({ statusCode: 401, message: 'Email o contraseña incorrectos' })
  }

  const token = await crearToken({ userId: usuario.id, role: usuario.role })

  return {
    token,
    user: {
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
      role: usuario.role
    }
  }
})