import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/lib/prisma';

type FormData = {
  email: string;
  username: string;
  password: string;
};

export async function POST(req: Request) {
  try {
    const formData: FormData = await req.json();

    const emailFound = await prisma.user.findUnique({
      where: {
        email: formData.email,
      },
    });

    if (emailFound) {
      return NextResponse.json(
        {
          message: 'Пользователь с такими данными уже существует',
        },
        {
          status: 400,
        },
      );
    }

    const hashedPassword = await bcrypt.hash(formData.password, 4);
    const newUser = await prisma.user.create({
      data: {
        username: formData.username,
        email: formData.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 },
      );
    }
  }
}
