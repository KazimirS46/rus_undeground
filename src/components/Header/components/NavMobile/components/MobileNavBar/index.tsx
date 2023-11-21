import { useState } from 'react';
import { SubLink } from '../SubLink';
import { SubMenu } from '../SubMenu';
import { LogIn } from '../LogIn';
import { NavItemType } from '@/types';
import styles from './index.module.css';

interface IProps {
  props: {
    navItem: NavItemType[];
    navIsOpen: boolean;
    navMenuToggle: () => void;
  };
}

export const MobileNavBar = ({ props }: IProps) => {
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
        <LogIn />

        <ul className={styles.navList}>
          {props.navItem.map((item, index) => (
            <li
              key={item.id}
              className={styles.navItem}>
              {item.path ? (
                <SubLink
                  props={item}
                  close={props.navMenuToggle}
                />
              ) : (
                <SubMenu
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
