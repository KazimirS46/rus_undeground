import React from 'react';
import LoginForm from '@/app/ui/LoginForm';
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
