import type { Metadata } from 'next';

import { Header } from '@/app/ui/Header';
import { Footer } from '@/app/ui/Footer';
import { roboto } from './lib/defining-fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Russian Underground',
  description: 'Опытный проэкт',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={`${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
