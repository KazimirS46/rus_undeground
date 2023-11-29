import Image from 'next/image';
import styles from './index.module.css';

function RegButton() {
  return (
    <button
      type='button'
      className={styles.regBtn}>
      <Image
        alt='Registration Button'
        src={'/regIcon.svg'}
        width={25}
        height={25}
      />

      <span>Registration</span>
    </button>
  );
}

export default RegButton;
