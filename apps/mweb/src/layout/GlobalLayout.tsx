import React from 'react';
import localFont from 'next/font/local';
import styles from '@src/styles/layout/basic.module.scss';
type Props = {
  children: React.ReactNode;
};

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
function GlobalLayout({ children }: Props) {
  return <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>{children}</div>;
}

export default GlobalLayout;
