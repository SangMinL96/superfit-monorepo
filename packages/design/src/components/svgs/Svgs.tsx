import { useRef } from 'react';
import styles from './Svgs.module.scss';
import cx from 'clsx';
import { svgList } from '../../utils';
type Props = {
    name: keyof typeof svgList;
    cxStyles?: string;
    size?: number;
};

function Svgs({ name, cxStyles, size }: Props) {
    const ref = useRef<HTMLSpanElement>(null);

    const targetSvg = svgList[name] as any;
    return (
        <span ref={ref} className={`${cx(styles.wrap)} ${cxStyles || ''}`.trim()}>
            <img width={size} src={targetSvg.src} alt={`${name}_icon`} />
        </span>
    );
}

export default Svgs;
