import React from 'react';
import styles from './UserEtc.module.scss';
import cx from 'clsx';
function UserEtc() {
    return (
        <div className={cx(styles.wrap)}>
            <div className={cx(styles.flex_box)}>
                <h3 className={cx(styles.tit)}>회원메모</h3>
                <button type='button' className={cx(styles.edit_btn)}>
                    수정
                </button>
            </div>
            <p className={cx(styles.txt)}>{`손목 수술로 인해 가동 범위가 좋지 않음\n블라블라블라`}</p>
            <div className={cx(styles.flex_box)}>
                <h3 className={cx(styles.tit)}>인바디</h3>
                <button type='button' className={cx(styles.edit_btn)}>
                    수정
                </button>
            </div>
            <p className={cx(styles.txt)}>{`손목 수술로 인해 가동 범위가 좋지 않음\n블라블라블라`}</p>
            <div className={cx(styles.flex_box)}>
                <h3 className={cx(styles.tit)}>식단</h3>
                <button type='button' className={cx(styles.edit_btn)}>
                    수정
                </button>
            </div>
            <p className={cx(styles.txt)}>{`손목 수술로 인해 가동 범위가 좋지 않음\n블라블라블라`}</p>
        </div>
    );
}

export default UserEtc;
