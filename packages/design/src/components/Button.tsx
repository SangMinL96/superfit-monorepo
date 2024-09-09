import styles from '../styles/Button.module.scss';
import { clsx } from 'clsx';
export const Button = () => {
  return (
    <>
      <button className={clsx(styles.test, false && styles.active)}>Boop</button>;
    </>
  );
};
