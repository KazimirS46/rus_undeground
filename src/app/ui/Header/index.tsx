import { HeaderNavigation } from '../HeaderNavigation';
import styles from './index.module.css';
import navData from './navlist.json';

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <HeaderNavigation props={navData} />
      </div>
    </header>
  );
}
