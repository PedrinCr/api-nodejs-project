import { createToken, validateToken } from '../utils/generateToken.js';
import prisma from '../utils/prisma.js';
import bcrypt from 'bcryptjs';

export async function createUsr(data) {
  const { name, email, password } = data;
  const exists = await prisma.users.findUnique({ where: { email: email } });

  if (exists) {
    throw new Error('Email has already been registered!');
  }

  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.users.create({
      data: { name: name, email: email, password: hash },
    });

    return user;
  } catch {
    throw new Error('Error to create user!');
  }
}

export async function loginUsr(data) {
  const { email, password } = data;
  const user = await prisma.users.findUnique({ where: { email: email } });

  if (!user) {
    throw new Error('Email or password are incorrect!');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Email or password are incorrect!');
  }

  return { token: createToken(user.id) };
}
