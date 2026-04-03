// server/utils/jwt.ts
import { SignJWT, jwtVerify } from 'jose'

const getSecret = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET no está definido en .env')
  return new TextEncoder().encode(secret)
}

export async function crearToken(datos: { userId: number; role: string }) {
  return await new SignJWT(datos)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(getSecret())
}

export async function verificarToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret())
  return payload as { userId: number; role: string }
}