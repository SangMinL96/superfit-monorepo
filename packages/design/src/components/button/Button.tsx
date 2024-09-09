import { useState } from 'react';
import styles from './Button.module.scss';
import { clsx } from 'clsx';
export const Button = () => {
  const [test, setTest] = useState('test');
  return (
    <>
      <div>{test}</div>
      <button onClick={() => setTest('test22')} className={clsx(styles.test, false && styles.active)}>
        Boop
      </button>
      ;
    </>
  );
};
