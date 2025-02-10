import React from 'react';
import styles from '@src/styles/layout/basic.module.scss';
type Props = {
  children: React.ReactNode;
};

function GlobalLayout({ children }: Props) {
  // console.log("")
  return <div>{children}</div>;
}

export default GlobalLayout;
