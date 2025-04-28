import * as svgList from '../../utils/base64';
import cx from 'clsx';
import styles from './SvgsPage.module.scss';
function SvgsPage() {
    console.log();
    return (
        <div className={cx(styles.wrap)}>
            {Object.entries(svgList).map(([name, value]) => {
                return (
                    <div key={name} className={cx(styles.box)}>
                        <p>{name}</p>
                        <img width={30} src={value} alt={`${String(name)}`} />
                    </div>
                );
            })}
            ;
        </div>
    );
}

export default SvgsPage;
