import { useNativeRouter } from '@src/hooks/useNativeRouter';
import Svgs from '@superfit/design/Svgs';
import cx from 'clsx';
import styles from './NavEtcP.module.scss';
function NavEtcP() {
    const nativeRouter = useNativeRouter();
    return (
        <div className={cx(styles.wrap)}>
            <ul className={cx(styles.list)}>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='people' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>총 회원</em>
                            <p className={cx(styles.info_list)}>69명</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/user/list?category=all')}>
                        전체보기
                    </button>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='profileAdd' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>최근 가입한 회원</em>
                            <p className={cx(styles.info_list)}>8명</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/user/list?category=all')}>
                        전체보기
                    </button>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='clipboardClose' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>곧, 만료되는 회원</em>
                            <p className={cx(styles.info_list)}>8명</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/user/list?category=all')}>
                        전체보기
                    </button>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='profileDelete' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>최근 탈퇴한 회원</em>
                            <p className={cx(styles.info_list)}>8명</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/user/list?category=all')}>
                        전체보기
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavEtcP;
