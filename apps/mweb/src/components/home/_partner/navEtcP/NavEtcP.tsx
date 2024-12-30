import React from 'react';
import styles from './NavEtcP.module.scss';
import cx from 'clsx';
import Svgs from '@superfit/design/Svgs';
import Link from 'next/link';
function NavEtcP() {
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
                    <Link href={'/user/list?category=all'} className={cx(styles.detail_btn)}>
                        전체보기
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='profileAdd' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>최근 가입한 회원</em>
                            <p className={cx(styles.info_list)}>8명</p>
                        </div>
                    </div>
                    <Link href={'/user/list?category=signup'} className={cx(styles.detail_btn)}>
                        전체보기
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='clipboardClose' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>곧, 만료되는 회원</em>
                            <p className={cx(styles.info_list)}>8명</p>
                        </div>
                    </div>
                    <Link href={'/user/list?category=done'} className={cx(styles.detail_btn)}>
                        전체보기
                    </Link>
                </li>
                <li>
                    <div className={cx(styles.row_left)}>
                        <Svgs name='profileDelete' size={24} cxStyles={cx(styles.icon)} />
                        <div className={cx(styles.class_info)}>
                            <em className={cx(styles.tit_list)}>최근 탈퇴한 회원</em>
                            <p className={cx(styles.info_list)}>8명</p>
                        </div>
                    </div>
                    <Link href={'/user/list?category=leave'} className={cx(styles.detail_btn)}>
                        전체보기
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavEtcP;
