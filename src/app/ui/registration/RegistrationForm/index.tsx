'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../Button';
import styles from './index.module.css';
import { createUser } from '@/app/lib/actions';

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegistrationForm() {
  const [pwdError, setPwdError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const formSubmit = handleSubmit(async fieldData => {
    if (fieldData.password !== fieldData.confirmPassword) {
      return setPwdError(true);
    } else {
      setPwdError(false);
    }

    const { email, password, username } = fieldData;

    const res = await createUser({
      name: username,
      email: email,
      password: password,
    });

    if (res.ok) {
      router.push('/auth/login');
    }
  });

  return (
    <form
      onSubmit={formSubmit}
      className={styles.form}>
      <h2>Регистрация</h2>

      <label htmlFor='username'>Имя:</label>
      <input
        type='text'
        {...register('username', {
          required: { value: true, message: 'Введите имя' },
        })}
        placeholder='Иванов Иван'
      />
      <div className={styles.errorMessage}>
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <label htmlFor='email'>Мыло:</label>
      <input
        type='email'
        {...register('email', {
          required: { value: true, message: 'Введите email' },
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

      <label htmlFor='confirmPassword'>Пароль:</label>
      <input
        type='password'
        {...register('confirmPassword', {
          required: { value: true, message: 'Подтвердите пароль' },
        })}
        placeholder='******'
      />
      <div className={styles.errorMessage}>
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        {pwdError && <p className={styles.errorMessage}>Пароли не совпадают</p>}
      </div>

      <Button props={{ name: 'Регистрация' }} />
    </form>
  );
}

export default RegistrationForm;
