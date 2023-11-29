import { NavItemType } from '@/app/lib/defining-types';
import { HeaderNavLink } from '../HeaderNavLink';
import { HeaderDeskNavSubMenu } from '../HeaderDeskNavSubMenu';
import { sedgwick } from '@/app/lib/defining-fonts';
import styles from './index.module.css';

interface IProps {
  props: NavItemType[] | [];
}

function HeaderDeskNavLinks({ props }: IProps) {
  return (
    <>
      {props.length !== 0 ? (
        <nav>
          <ul className={styles.navList}>
            {props.map(item => (
              <li
                key={item.id}
                className={styles.navItem}>
                {item.path ? (
                  <HeaderNavLink props={item} />
                ) : (
                  <HeaderDeskNavSubMenu props={item} />
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className={`${sedgwick.variable}`}>
          <h1 className={styles.mainTitle}>Russian Underground</h1>
        </div>
      )}
    </>
  );
}

export default HeaderDeskNavLinks;
