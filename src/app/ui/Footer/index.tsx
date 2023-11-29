import Image from 'next/image';
import styles from './index.module.css';
import MainLogoLink from '../MainLogoLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.info}>
            <p className={styles.symbol}>©</p>
            <p className={styles.title}>Russian Underground</p>
            <p className={styles.date}>2023</p>
          </div>

          <div className={styles.logoBox}>
            <MainLogoLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
