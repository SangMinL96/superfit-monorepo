import React from 'react';
import styles from './TodayClassP.module.scss';
import cx from 'clsx';
import Svgs from '@superfit/design/Svgs';
import Link from 'next/link';

function TodayClassP() {
    return (
        <div className={cx(styles.wrap)}>
            <ul className={cx(styles.list)}>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='classMark' size={24} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        상세보기
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='classMark' size={24} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        상세보기
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='classMark' size={24} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        상세보기
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='classMark' size={24} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>그룹수업 3/10</em>
                            <p className={cx(styles.info_list)}>10:00 ~ 11:00</p>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        상세보기
                    </Link>
                </li>
            </ul>
            <button type='button' className={cx(styles.bottom_btn)}>
                달력/리스트로 전체보기
            </button>
        </div>
    );
}

export default TodayClassP;
