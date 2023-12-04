'use client';

import { useForm } from 'react-hook-form';
import styles from './index.module.css';
import Button from '../../Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Inputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const formSubmit = handleSubmit(async formData => {
    const res = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    res!.error ? setError(res?.error) : router.push('/dashboard');
  });

  return (
    <form
      onSubmit={formSubmit}
      className={styles.form}>
      <h2>Вход</h2>

      <label htmlFor='username'>Логин:</label>
      <input
        type='email'
        {...register('email', {
          required: { value: true, message: 'Введите ваш логин' },
        })}
        placeholder='user@mail.com'
      />
      <div className={styles.errorMessage}>
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <label htmlFor='password'>Пароль:</label>
      <input
        type='password'
        {...register('password', {
          required: { value: true, message: 'Введите пароль' },
        })}
        placeholder='******'
      />
      <div className={styles.errorMessage}>
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <Button props={{ name: 'Вход' }} />

      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
