import UserSearchInput from '@src/components/user/userSearchInput/UserSearchInput';
import React from 'react';
import styles from '@src/styles/user/userListAll.module.scss';
import cx from 'clsx';
import Icons from '@superfit/design/Icons';
import UserAvatarList from '@src/components/user/userAvatarList/UserAvatarList';
import { useRouter } from 'next/router';
import { Button } from '@superfit/design/button';
import Loading from '@superfit/design/Loading';
import Wrap from '@superfit/design/wrap';
function Page() {
    const router = useRouter();
    const { category } = router.query;
    const title = (() => {
        if (category === 'all') return '전체회원';
        if (category === 'signup') return '최근 가입한 회원';
        if (category === 'done') return '곧, 수강권 만료되는 회원';
        if (category === 'leave') return '최근 탈퇴한 회원';
        return '';
    })();
    return (
        <div>
            <Loading inline />
            <UserSearchInput />
            <Wrap margin='10px 0 0' padding='0 20px'>
                <Button type='button' name='all' size={36} padding='0 20px' color='light'>
                    전체회원 보기
                </Button>
            </Wrap>
            <Wrap direction='row' justify='space-between' padding='0 20px' margin='20px 0'>
                <h5 className={cx(styles.sec_tit)}>{title}</h5>
                <button type='button' className={cx(styles.order_by)}>
                    <em className={cx(styles.tit)}>이름 순</em>
                    <Icons name='arrow_bottom' />
                </button>
            </Wrap>
            <ul className={cx(styles.list_box)}>
                <UserAvatarList />
                <UserAvatarList />
                <UserAvatarList />
            </ul>
        </div>
    );
}

export default Page;
