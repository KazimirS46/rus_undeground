import Link from 'next/link';
import Image from 'next/image';
import { Sedgwick_Ave_Display } from 'next/font/google';
import { NavLink } from './NavLink';
import { NavSubMenu } from './NavSubMenu';
import { NavItemType } from '@/types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType[] | [];
}

const sedgwick = Sedgwick_Ave_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sedgwick',
});

export const NavDesktop = ({ props }: IProps) => {
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
                  <NavLink props={item} />
                ) : (
                  <NavSubMenu props={item} />
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
