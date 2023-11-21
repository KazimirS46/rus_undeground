import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavItemType } from '@/types';
import styles from './index.module.css';

interface IProps {
  info: NavItemType;
  idx: number;
  openSubMenu: boolean;
  close: () => void;
  handle: (position: number) => void;
}

export const SubMenu = ({ info, openSubMenu, idx, handle, close }: IProps) => {
  const pathname = usePathname();

  const onClickBtn = () => {
    close();
  };

  return (
    <div
      className={styles.navLink}
      onClick={() => handle(idx)}>
      <div className={styles.title}>
        <span>{info.title}</span>

        <Image
          alt='Open Menu'
          src={'/icons/arrowIcon.svg'}
          width={20}
          height={20}
          className={styles.menuArrow}
        />
      </div>

      {openSubMenu && (
        <ul className={styles.subList}>
          {info.submenu!.map(subItem => (
            <li
              key={subItem.id}
              className={styles.subItem}>
              <Link
                href={subItem.path}
                className={`${styles.sublink} ${
                  pathname !== subItem.path ? null : styles.active
                }`}
                onClick={onClickBtn}>
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
