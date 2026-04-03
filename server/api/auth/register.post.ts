import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { defineEventHandler, readBody, createError } from 'h3'
import prisma from '../../utils/prisma'
import { crearToken } from '../../utils/jwt'

const esquema = z.object({
	name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
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

	const { name, email, password } = resultado.data

	const usuarioExiste = await prisma.user.findUnique({ where: { email } })
	if (usuarioExiste) {
		throw createError({ statusCode: 409, message: 'Ese email ya está registrado' })
	}

	const passwordEncriptada = await bcrypt.hash(password, 12)

	const usuario = await prisma.user.create({
		data: { name, email, password: passwordEncriptada, role: 'USER' }
	})

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