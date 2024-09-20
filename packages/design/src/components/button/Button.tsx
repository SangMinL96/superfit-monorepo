import { clsx } from 'clsx';
import styles from './Button.module.scss';
import { ReactNode } from 'react';
type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  name: string;
  size?: 64 | 56 | 50 | 44 | 32;
  width?: string;
  type: 'button' | 'reset' | 'submit';
  children: ReactNode;
  color?: 'primary' | 'outlined' | 'light' | 'grey';
};
export const Button = ({ width, name, type, children, color = 'primary', disabled, onClick, size = 50 }: Props) => {
  return (
    <button
      style={{ width }}
      type={type}
      name={name}
      className={clsx(styles.wrap, styles[`size_${size}`], styles[color])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
