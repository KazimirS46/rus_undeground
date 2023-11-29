import Image from 'next/image';
import styles from './index.module.css';

function LoginButton() {
  return (
    <button
      type='button'
      className={styles.logInBtn}>
      <Image
        src={'/loginIcon.svg'}
        alt='LogIn Icon'
        width={25}
        height={25}
        className={styles.btnImg}
      />

      <span>Войти</span>
    </button>
  );
}

export default LoginButton;
