import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Card.module.scss';
import Svgs from '../svgs/Svgs';
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
            {Tag === 'button' && (
                <span className={clsx(styles.onclick_icon)}>
                    <Svgs name='arrowRight'/>
                </span>
            )}
        </Tag>
    );
}

export default Card;
