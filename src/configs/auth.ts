import type { AuthOptions, User } from 'next-auth';
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
          type: 'email',
          placeholder: 'Email',
          requred: true,
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
          requred: true,
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials!.email,
          },
        });

        if (!userFound) throw new Error('Пользователь не найден');

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password,
        );

        if (!matchPassword) throw new Error('Введен неправильный пароль');
        const { password, ...userWithoutPass } = userFound;

        return userWithoutPass as unknown as User;

        // return {
        //   id: userFound.id,
        //   name: userFound.username,
        //   email: userFound.email,
        // };
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
};
