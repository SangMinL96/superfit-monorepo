import { svgList } from '../../utils';
import cx from 'clsx';
import styles from './SvgsPage.module.scss';
function SvgsPage() {
    const svgArr = Object.values(svgList) as any[];
    return svgArr.map(item => {
        const name = item.src.split('media/')[1];
        return (
            <div key={name} className={cx(styles.box)}>
                <p>{name}</p>
                <img width={30} src={item.src} alt={`${String(name)}_icon`} />
            </div>
        );
    });
}

export default SvgsPage;
