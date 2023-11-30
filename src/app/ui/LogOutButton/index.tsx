import Image from 'next/image';
import styles from './index.module.css';
import { signOut } from 'next-auth/react';

function LogOutBtn() {
  return (
    <button
      onClick={() => signOut()}
      type='button'
      className={styles.logOutBtn}>
      <Image
        src={'/logOutIcon.svg'}
        alt='LogIn Icon'
        width={25}
        height={25}
        className={styles.btnImg}
      />

      <span>Выход</span>
    </button>
  );
}

export default LogOutBtn;
