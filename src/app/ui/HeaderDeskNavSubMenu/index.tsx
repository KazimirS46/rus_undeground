import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavItemType } from '@/app/lib/defining-types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType;
}

export const HeaderDeskNavSubMenu = ({ props }: IProps) => {
  const pathname = usePathname();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div
      className={styles.navLink}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
      onMouseLeave={() => setMenuIsOpen(false)}>
      <span>{props.title}</span>

      <Image
        alt='Open Menu'
        src={'/arrowIcon.svg'}
        width={20}
        height={20}
        className={styles.menuArrow}
      />

      {menuIsOpen && (
        <ul
          className={styles.subList}
          onMouseLeave={() => setMenuIsOpen(false)}>
          {props.submenu!.map(subItem => (
            <li
              key={subItem.id}
              className={styles.subItem}>
              <Link
                href={subItem.path}
                className={
                  pathname !== subItem.path ? styles.sublink : styles.activeLink
                }>
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
