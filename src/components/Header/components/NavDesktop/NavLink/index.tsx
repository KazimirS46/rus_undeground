import Link from 'next/link';
import styles from './index.module.css';
import { NavItemType } from '@/types';

interface IProps {
  props: NavItemType;
}

export const NavLink = ({ props }: IProps) => {
  return (
    <Link
      href={props.path!}
      className={styles.navLink}>
      {props.title}
    </Link>
  );
};
