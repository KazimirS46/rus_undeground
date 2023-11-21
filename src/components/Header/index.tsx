import { Navigation } from './components/Navigation';
import styles from './index.module.css';
import navData from '@/components/Header/navlist.json';

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Navigation props={navData} />
      </div>
    </header>
  );
}
