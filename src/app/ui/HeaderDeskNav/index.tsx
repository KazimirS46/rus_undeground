import { NavItemType } from '@/app/lib/defining-types';
import HeaderDeskNavLinks from '../HeaderDeskNavLinks';
import MainLogoLink from '../MainLogoLink';
import LoginLink from '../LoginLink';
import styles from './index.module.css';
import RegLink from '../RegLink';

interface IProps {
  props: NavItemType[] | [];
}

export const HeaderDeskNav = ({ props }: IProps) => {
  return (
    <div className={styles.navDesktopWrapper}>
      <div className={styles.logoBox}>
        <MainLogoLink />
      </div>

      <HeaderDeskNavLinks props={props} />
      <div className={styles.action}>
        <RegLink />
        <LoginLink />
      </div>
    </div>
  );
};
