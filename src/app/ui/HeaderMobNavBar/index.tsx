import { useState } from 'react';
import { HeaderMobSubLink } from '../HeaderMobSubLink';
import { HeaderMobSubMenu } from '../HeaderMobSubMenu';
import { HeaderMobLogIn } from '../HeaderMobLogIn';
import { NavItemType } from '@/app/lib/defining-types';
import styles from './index.module.css';

interface IProps {
  props: {
    navItem: NavItemType[];
    navIsOpen: boolean;
    navMenuToggle: () => void;
  };
}

export const HeaderMobNavBar = ({ props }: IProps) => {
  let menuOpen = props.navIsOpen && styles.active;

  const [openState, setOpenState] = useState(
    new Array(props.navItem.length).fill(false),
  );

  const handleOnChange = (position: number) => {
    const updateOpenState = openState.map((item, index) =>
      index === position ? (item = !item) : (item = false),
    );

    setOpenState(updateOpenState);
  };

  return (
    <>
      <nav className={`${styles.menu} ${menuOpen}`}>
        <HeaderMobLogIn />

        <ul className={styles.navList}>
          {props.navItem.map((item, index) => (
            <li
              key={item.id}
              className={styles.navItem}>
              {item.path ? (
                <HeaderMobSubLink
                  props={item}
                  close={props.navMenuToggle}
                />
              ) : (
                <HeaderMobSubMenu
                  info={item}
                  idx={index}
                  openSubMenu={openState[index]}
                  close={props.navMenuToggle}
                  handle={handleOnChange}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
