import React from 'react';
import styles from './UserAvatarList.module.scss';
import cx from 'clsx';
import Svgs from '@superfit/design/Svgs';
import Link from 'next/link';
function UserAvatarList() {
     return (
          <li className={cx(styles.avatar_list)}>
               <Link href={'/user/123'} className={cx(styles.detail_btn)}>
                    <span className={cx(styles.row_left)}>
                         <Svgs name='avatarMan' />
                         <span className={cx(styles.class_info)}>
                              <em className={cx(styles.tit_list)}>이상민 트레이너</em>
                              <span className={cx(styles.desc)}>
                                   96년 12월5일, 010-3794-3814
                              </span>
                         </span>
                    </span>
                    <span>
                         <Svgs name='arrowRight' />
                    </span>
               </Link>
          </li>
     );
}

export default UserAvatarList;