import { useEffect, useRef } from 'react';
import styles from './Divide.module.scss';
import clsx from 'clsx';
type Props = {
    value: number;
    marginOnly?: boolean;
    margin?: string;
    isVertical?: {
        margin: string;
    };
};
function Divide({ value, marginOnly = false, isVertical, margin = '0' }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const DivideInlineStyle = {
        height: `${value}px`,
        width: isVertical ? '1px' : '100%',
        margin: isVertical ? isVertical.margin : margin,
        'background-color': marginOnly ? 'inherit' : 'var(--grey100)',
    };

    useEffect(() => {
        if (ref.current) {
            Object.entries(DivideInlineStyle).forEach(([key, value]) => {
                value && ref.current && ref.current.style.setProperty(key, value || '');
            });
        }
    }, [DivideInlineStyle]);

    return (
        <div className={clsx(styles.wrap)}>
            <div ref={ref} />
        </div>
    );
}

export default Divide;
