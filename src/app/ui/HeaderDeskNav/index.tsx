import Link from 'next/link';
import Image from 'next/image';
import { HeaderNavLink } from '../HeaderNavLink';
import { HeaderDeskNavSubMenu } from '../HeaderDeskNavSubMenu';
import { NavItemType } from '@/app/lib/defining-types';
import styles from './index.module.css';
import { sedgwick } from '@/app/lib/defining-fonts';

interface IProps {
  props: NavItemType[] | [];
}

export const HeaderNavDesktop = ({ props }: IProps) => {
  const navItem = props;

  return (
    <div className={styles.navDesktopWrapper}>
      <Link
        href={'/'}
        className={styles.logoLink}>
        <Image
          alt=''
          src={'/icons/mainLogo.svg'}
          width={41}
          height={45}
          className={styles.mainLogo}
        />
      </Link>

      {navItem.length !== 0 ? (
        <nav>
          <ul className={styles.navList}>
            {navItem.map(item => (
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

      <button
        type='button'
        className={styles.logInBtn}>
        <span>logIn</span>

        <Image
          src={'/icons/loginIcon.svg'}
          alt='LogIn Icon'
          width={25}
          height={25}
          className={styles.btnImg}
        />
      </button>
    </div>
  );
};
