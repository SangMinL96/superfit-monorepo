import React from 'react';
import s from './ProfileHeader.module.scss';
import cx from 'clsx';
import Svgs from '@superfit/design/Svgs';
function ProfileHeader() {
    return (
        <div className={cx(s.wrap)}>
            <h1 className={cx(s.tit)}>마이페이지</h1>
            <div className={cx(s.icon_box)}>
                <button type='button' className={cx(s.btn)}>
                    <Svgs name='종' />
                </button>
                <button type='button' className={cx(s.btn)}>
                    <Svgs name='설정' />
                </button>
            </div>
        </div>
    );
}

export default ProfileHeader;