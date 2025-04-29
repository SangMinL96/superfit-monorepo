import { useNativeRouter } from '@src/hooks/useNativeRouter';
import cx from 'clsx';
import styles from './ClassMgtP.module.scss';
import Icons from '../../../../../../../packages/design/src/components/iconCom/Icons';
function ClassMgtP() {
    const nativeRouter = useNativeRouter();
    return (
        <div className={cx(styles.wrap)}>
            <ul className={cx(styles.list)}>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='message_edit' size={32} />
                        <em className={cx(styles.tit_list)}>그룹수업</em>
                    </div>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='message_edit' size={32} />
                        <em className={cx(styles.tit_list)}>1대1 PT</em>
                    </div>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='message_edit' size={32} />
                        <em className={cx(styles.tit_list)}>빈야사요가</em>
                    </div>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='message_edit' size={32} />
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
