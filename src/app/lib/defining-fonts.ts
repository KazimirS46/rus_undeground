import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google';
import { Sedgwick_Ave_Display } from 'next/font/google';

export const roboto: NextFontWithVariable = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

export const sedgwick: NextFontWithVariable = Sedgwick_Ave_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sedgwick',
});
