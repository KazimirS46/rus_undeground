import Link from 'next/link';
import styles from './index.module.css';
import { NavItemType } from '@/app/lib/defining-types';

interface IProps {
  props: NavItemType;
  close: () => void;
}

export const HeaderMobSubLink = ({ props, close }: IProps) => {
  const onClickBtn = () => {
    close();
  };

  return (
    <Link
      href={props.path!}
      className={styles.navLink}
      onClick={onClickBtn}>
      {props.title}
    </Link>
  );
};
