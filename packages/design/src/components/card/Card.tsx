import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Card.module.scss';
type Props = {
  children: ReactNode;
};
function Card({ children }: Props) {
  return <div className={clsx(styles.wrap)}>{children}</div>;
}

export default Card;
