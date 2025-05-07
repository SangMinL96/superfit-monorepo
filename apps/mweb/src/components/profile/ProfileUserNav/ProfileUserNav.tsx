import React from 'react';
import Wrap from '@superfit/design/wrap';
import Card from '@superfit/design/Card';
import cx from 'clsx';
import styles from './ProfileUserNav.module.scss';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import Icons from '@superfit/design/Icons';
function ProfileUserNav() {
    const nRouter = useNativeRouter();
    return (
        <Wrap padding='0 20px 20px' gap='20px 0'>
            <Card title='메뉴'>
                <Wrap margin='20px 0 0' gap='10px'>
                    <button type='button' className={cx(styles.btn)} onClick={() => nRouter.push('/notice/list')}>
                        <span className={cx(styles.icon_box)}>
                            <Icons cxStyles={cx(styles.icon_bg)} name='이모지_우편있음' size={20} />
                            공지사항
                        </span>
                        <Icons name='arrow_right' />
                    </button>
                    <button type='button' className={cx(styles.btn)} onClick={() => nRouter.push('/manage/enter')}>
                        <span className={cx(styles.icon_box)}>
                            <Icons cxStyles={cx(styles.icon_bg)} name='이모지_헤드셋' size={20} />
                            문의사항
                        </span>
                        <Icons name='arrow_right' />
                    </button>
                    <button type='button' className={cx(styles.btn)} onClick={() => nRouter.push('/manage/enter')}>
                        <span className={cx(styles.icon_box)}>
                            <Icons cxStyles={cx(styles.icon_bg)} name='이모지_책' size={20} />
                            약관정책
                        </span>
                        <Icons name='arrow_right' />
                    </button>
                    <button
                        type='button'
                        className={cx(styles.btn)}
                        onClick={() => window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'logout' }))}
                    >
                        <span className={cx(styles.icon_box)}>
                            <Icons cxStyles={cx(styles.icon_bg)} name='이모지_편지하트' size={20} />
                            임시로그아웃
                        </span>
                        <Icons name='arrow_right' />
                    </button>
                </Wrap>
            </Card>
        </Wrap>
    );
}

export default ProfileUserNav;
