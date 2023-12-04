import React from 'react';
import LoginForm from '@/app/ui/login/LoginForm';
import styles from './index.module.css';

function Login() {
  return (
    <main>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
