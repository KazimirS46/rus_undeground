import Link from 'next/link';
import { SocialLinkType } from '@/app/lib/defining-types';
import styles from './index.module.css';

interface IProps {
  props: SocialLinkType;
}

export const SocialLink = ({ props }: IProps) => {
  const color: any = {
    vk: styles.linkVk,
    tg: styles.linkTg,
    ok: styles.linkOk,
    yt: styles.linkYt,
  };

  return (
    <Link
      target='_blank'
      href={props.url}
      className={`${styles.link} ${color[props.network]}`}>
      {props.title}
    </Link>
  );
};
