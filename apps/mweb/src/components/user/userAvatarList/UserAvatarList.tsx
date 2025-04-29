import React from 'react';
import styles from './UserAvatarList.module.scss';
import cx from 'clsx';
import Icons from '../../../../../../packages/design/src/components/iconCom/Icons';
import Link from 'next/link';
function UserAvatarList() {
    return (
        <li className={cx(styles.avatar_list)}>
            <Link href={'/user/123'} className={cx(styles.detail_btn)}>
                <span className={cx(styles.row_left)}>
                    <Icons name='남자캐릭터' size={35} />
                    <span className={cx(styles.class_info)}>
                        <em className={cx(styles.tit_list)}>이상민 트레이너</em>
                        <span className={cx(styles.desc)}>96년 12월5일, 010-3794-3814</span>
                    </span>
                </span>
                <span>
                    <Icons name='arrow_right' size={25} />
                </span>
            </Link>
        </li>
    );
}

export default UserAvatarList;
