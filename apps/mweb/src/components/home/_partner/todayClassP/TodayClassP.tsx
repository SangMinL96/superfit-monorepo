import React from 'react';
import styles from './TodayClassP.module.scss';
import cx from 'clsx';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import Icons from '../../../../../../../packages/design/src/components/iconCom/Icons';

function TodayClassP() {
    const nativeRouter = useNativeRouter();
    return (
        <div className={cx(styles.wrap)}>
            <ul className={cx(styles.list)}>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='class_mark' size={26} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/class/123')}>
                        상세보기
                    </button>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='class_mark' size={26} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/class/123')}>
                        상세보기
                    </button>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='class_mark' size={26} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/class/123')}>
                        상세보기
                    </button>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Icons name='class_mark' size={26} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <button type='button' className={cx(styles.detail_btn)} onClick={() => nativeRouter.push('/class/123')}>
                        상세보기
                    </button>
                </li>
            </ul>
            <button type='button' className={cx(styles.bottom_btn)} onClick={() => nativeRouter.push('/class/create')}>
                달력/리스트로 전체보기
            </button>
        </div>
    );
}

export default TodayClassP;
