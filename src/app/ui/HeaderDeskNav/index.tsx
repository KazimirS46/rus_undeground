import { NavItemType } from '@/app/lib/defining-types';
import HeaderDeskNavLinks from '../HeaderDeskNavLinks';
import MainLogoLink from '../MainLogoLink';
import LoginButton from '../LoginButton';
import styles from './index.module.css';

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

      <LoginButton />
    </div>
  );
};
