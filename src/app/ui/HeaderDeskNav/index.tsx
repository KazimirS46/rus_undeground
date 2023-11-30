import { NavItemType } from '@/app/lib/defining-types';
import HeaderDeskNavLinks from '../HeaderDeskNavLinks';
import MainLogoLink from '../MainLogoLink';
import styles from './index.module.css';
import NavBtnBlock from '../NavButnBlock';

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
      <NavBtnBlock />
    </div>
  );
};
