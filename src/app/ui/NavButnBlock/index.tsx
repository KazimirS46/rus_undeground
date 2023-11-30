'use client';

import { useSession } from 'next-auth/react';
import LoginLink from '../LoginLink';
import RegLink from '../RegLink';
import styles from './index.module.css';
import LogOutBtn from '../LogOutButton';

function NavBtnBlock() {
  const session = useSession();

  return (
    <div className={styles.action}>
      {session.data ? (
        <>
          <LogOutBtn />
        </>
      ) : (
        <>
          <RegLink />
          <LoginLink />
        </>
      )}
    </div>
  );
}

export default NavBtnBlock;
