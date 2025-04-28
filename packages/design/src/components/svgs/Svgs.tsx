import { useRef } from 'react';
import styles from './Svgs.module.scss';
import cx from 'clsx';
import * as svgList from '../../utils/base64';

type Props = {
    name: keyof typeof svgList;
    cxStyles?: string;
    size?: number;
    margin?: string;
};

function Svgs({ name, cxStyles, size = 20, margin }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const targetSvg = svgList[name] as any;
    return (
        <span style={{ width: size, height: size, margin }} ref={ref} className={`${cx(styles.wrap)} ${cxStyles || ''}`.trim()}>
            <img src={targetSvg} alt={`${name}_icon`} />
        </span>
    );
}

export default Svgs;
