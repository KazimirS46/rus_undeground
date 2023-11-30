import Image from 'next/image';
import styles from './index.module.css';
import Link from 'next/link';

function LoginLink() {
  return (
    <Link
      href={'/auth/login'}
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
    </Link>
  );
}

export default LoginLink;
