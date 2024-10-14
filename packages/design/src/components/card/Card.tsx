import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Card.module.scss';
type Props = {
    children: ReactNode;
    onClick?: () => void;
    title?: string;
};
function Card({ children, onClick, title }: Props) {
    return (
        <div className={clsx(styles.wrap)} onClick={onClick}>
            {title && <strong className={clsx(styles.tit)}>{title}</strong>}
            {children}
        </div>
    );
}

export default Card;
