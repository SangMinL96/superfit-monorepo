import React from 'react';
import styles from './ClassMgtP.module.scss';
import cx from 'clsx';
import Svgs from '@superfit/design/Svgs';
import Link from 'next/link';
import { useRouter } from 'next/router';
function ClassMgtP() {
    const router = useRouter();
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
            <button type='button' className={cx(styles.bottom_btn)} onClick={() => router.push('/class/list')}>
                수업 전체보기
            </button>
        </div>
    );
}

export default ClassMgtP;
