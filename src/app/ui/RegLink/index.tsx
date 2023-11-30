import Image from 'next/image';
import styles from './index.module.css';
import Link from 'next/link';

function RegLink() {
  return (
    <Link
      href={'/auth/registration'}
      type='button'
      className={styles.regBtn}>
      <Image
        alt='Registration Button'
        src={'/regIcon.svg'}
        width={25}
        height={25}
      />

      <span>Registration</span>
    </Link>
  );
}

export default RegLink;
