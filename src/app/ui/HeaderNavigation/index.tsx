'use client';

import { useState } from 'react';
import { HeaderNavMobile } from '../HeaderNavMobile';
import { HeaderDeskNav } from '../HeaderDeskNav';
import { HeaderOverlay } from '../HeaderOverlay';
import { NavItemType } from '@/app/lib/defining-types';

interface IProps {
  props: NavItemType[];
}

export const HeaderNavigation = ({ props }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderNavMobile
        props={props}
        overOpen={() => setOpen(true)}
        overClose={() => setOpen(false)}
      />

      <HeaderDeskNav props={props} />

      {open && (
        <HeaderOverlay
          overOpen={() => setOpen(true)}
          overClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
