import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Card.module.scss';
type Props = {
    children: ReactNode;
    onClick?: () => void;
    title?: string;
};
function Card({ children, onClick, title }: Props) {
    const Tag = onClick ? 'button' : 'div';
    return (
        <Tag className={clsx(styles.wrap)} {...(Tag === 'button' && { type: 'button' })} onClick={onClick}>
            {title && <strong className={clsx(styles.tit)}>{title}</strong>}
            {children}
        </Tag>
    );
}

export default Card;
