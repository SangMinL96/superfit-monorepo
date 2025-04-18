import { useNativeRouter } from '@src/hooks/useNativeRouter';
import Svgs from '@superfit/design/Svgs';
import cx from 'clsx';
import styles from './ClassMgtP.module.scss';
function ClassMgtP() {
    const nativeRouter = useNativeRouter();
    return (
        <div className={cx(styles.wrap)}>
            <ul className={cx(styles.list)}>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='messageEdit' size={30} />
                        <em className={cx(styles.tit_list)}>그룹수업</em>
                    </div>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='messageEdit' size={30} />
                        <em className={cx(styles.tit_list)}>1대1 PT</em>
                    </div>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='messageEdit' size={30} />
                        <em className={cx(styles.tit_list)}>빈야사요가</em>
                    </div>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='messageEdit' size={30} />
                        <em className={cx(styles.tit_list)}>키즈필라테스</em>
                    </div>
                </li>
            </ul>
            <button type='button' className={cx(styles.bottom_btn)} onClick={() => nativeRouter.push('/class/list')}>
                수업 전체보기
            </button>
        </div>
    );
}

export default ClassMgtP;
