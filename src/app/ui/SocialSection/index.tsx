import { SocialLinkType } from '@/app/lib/defining-types';
import styles from './inde.module.css';

import { SocialLink } from '../SocialLink';

interface IProps {
  socialLinks: SocialLinkType[];
}

export const SocialSection = ({ socialLinks }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Наши Социальные Сети</h2>
        <ul className={styles.socialList}>
          {socialLinks.map(link => (
            <li
              key={link.id}
              className={styles.listItem}>
              <SocialLink props={link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
