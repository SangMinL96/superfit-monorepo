import { clsx } from 'clsx';
import styles from './Button.module.scss';
import { ReactNode } from 'react';
type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    name?: string;
    size?: 64 | 56 | 50 | 44 | 40 | 36 | 32;
    width?: string;
    type: 'button' | 'reset' | 'submit';
    children: ReactNode;
    color?: 'primary' | 'outlined' | 'light' | 'grey' | 'shadow';
    margin?: string;
    fontSize?: string;
    padding?: string;
    borderRadius?: string;
};
export const Button = ({
    width,
    name,
    type,
    children,
    fontSize,
    color = 'primary',
    disabled,
    onClick,
    size = 50,
    margin,
    padding,
    borderRadius,
}: Props) => {
    return (
        <button
            style={{ width, margin, padding, fontSize, borderRadius }}
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
