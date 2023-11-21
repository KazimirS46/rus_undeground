import Image from 'next/image';
import styles from './index.module.css';

export const LogIn = () => {
  return (
    <div className={styles.logContainer}>
      <button type='button' className={styles.logInBtn}>
        <span>logIn</span>

        <Image
          src={'/icons/loginIcon.svg'}
          alt='Log In Icon'
          width={25}
          height={25}
        />
      </button>

      {/* Будущий переключатель языка интерфейса */}

      {/* <span className={styles.ru}>RU</span>
      <span className={styles.en}>EN</span> */}
    </div>
  );
};
