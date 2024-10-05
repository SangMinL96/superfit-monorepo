import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Card.module.scss';
type Props = {
  children: ReactNode;
  onClick?: () => void;
};
function Card({ children, onClick }: Props) {
  return (
    <button type='button' className={clsx(styles.wrap)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Card;
