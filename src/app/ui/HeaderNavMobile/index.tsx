import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HeaderMobDropdownMenuButton } from '../HeaderMobDropdownMenuButton';
import { HeaderMobNavBar } from '../HeaderMobNavBar';
import { NavItemType } from '@/app/lib/defining-types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType[];
  overOpen: () => void;
  overClose: () => void;
}

export const HeaderNavMobile = ({ props, overClose, overOpen }: IProps) => {
  const [navIsOpen, setIsOpen] = useState<boolean>(false);
  const navItem = props;

  const navMenuToggle = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    navIsOpen && overOpen();
    !navIsOpen && overClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navIsOpen]);

  return (
    <>
      <div className={styles.mobile}>
        <Link
          href={'/'}
          className={styles.logoLink}>
          <Image
            alt=''
            src={'/headerLogo.svg'}
            priority={false}
            width={41}
            height={45}
            className={styles.mainLogo}
          />
        </Link>

        <HeaderMobDropdownMenuButton
          isOpen={navIsOpen}
          toggle={navMenuToggle}
        />
      </div>

      <div className={styles.dropdownMenu}>
        <HeaderMobNavBar props={{ navItem, navIsOpen, navMenuToggle }} />
      </div>
    </>
  );
};
