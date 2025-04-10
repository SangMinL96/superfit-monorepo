import React from 'react';
type Props = {
  children: React.ReactNode;
};

function GlobalLayout({ children }: Props) {
  // console.log("")
  return <div>{children}</div>;
}

export default GlobalLayout;
