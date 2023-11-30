import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '@/app/lib/prisma';

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },

      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials!.email,
          },
        });

        if (!userFound) throw new Error('Пользователь не найден');

        const matchPassword = await bcrypt.compare(
          credentials!.password,
          userFound.password,
        );

        if (!matchPassword) throw new Error('Введен неправильный пароль');

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
};
