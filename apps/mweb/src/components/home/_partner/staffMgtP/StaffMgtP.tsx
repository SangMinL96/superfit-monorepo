import React from 'react';
import styles from './StaffMgtP.module.scss';
import cx from 'clsx';
import Svgs from '@superfit/design/Svgs';
import Link from 'next/link';

function StaffMgtP() {
    return (
        <div className={cx(styles.wrap)}>
            <ul className={cx(styles.list)}>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='avatarMan' />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>이상민 트레이너</em>
                            <div className={cx(styles.status)}>
                                <span className={cx(styles.tag)}>1대1 PT</span>
                            </div>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        수정
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='avatarGirl' />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>이상민 트레이너</em>
                            <div className={cx(styles.status)}>
                                <span className={cx(styles.tag)}>1대1 PT</span>
                            </div>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        수정
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='avatarMan' />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>이다슬 트레이너</em>
                            <div className={cx(styles.status)}>
                                <span className={cx(styles.tag)}>1대1 PT</span>
                            </div>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        수정
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='avatarGirl' />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>이다슬 트레이너</em>
                            <div className={cx(styles.status)}>
                                <span className={cx(styles.tag)}>1대1 PT</span>
                            </div>
                        </div>
                    </div>
                    <Link href={'/'} className={cx(styles.detail_btn)}>
                        수정
                    </Link>
                </li>
            </ul>
            <button type='button' className={cx(styles.bottom_btn)}>
                직원 추가/수정하기
            </button>
        </div>
    );
}

export default StaffMgtP;
