import React from 'react';
import Wrap from '@superfit/design/wrap';
import Card from '@superfit/design/Card';
import Svgs from '@superfit/design/Svgs';
import cx from 'clsx';
import styles from './ProfileNav.module.scss';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
function ProfileNav() {
    const nRouter = useNativeRouter();
    return (
        <Wrap padding='0 20px 20px' gap='20px 0'>
            <Card title='관리메뉴'>
                <Wrap margin='20px 0 0' gap='10px'>
                    <button type='button' className={cx(styles.btn)}>
                        <span className={cx(styles.icon_box)}>
                            <Svgs cxStyles={cx(styles.icon_bg)} name='이모지_여러명' size={20} />회원관리
                        </span>
                        <Svgs name='arrowRight' />
                    </button>
                    <button type='button' className={cx(styles.btn)}>
                        <span className={cx(styles.icon_box)}>
                            <Svgs cxStyles={cx(styles.icon_bg)} name='이모지_책' size={20} />수업관리
                        </span>
                        <Svgs name='arrowRight' />
                    </button>
                    <button type='button' className={cx(styles.btn)}>
                        <span className={cx(styles.icon_box)}>
                            <Svgs cxStyles={cx(styles.icon_bg)} name='이모지_여자맥북' size={20} />직원관리
                        </span>
                        <Svgs name='arrowRight' />
                    </button>
                </Wrap>
            </Card>
            <Card title='센터입장관리'>
                <Wrap margin='20px 0 0' gap='10px'>
                    <button type='button' className={cx(styles.btn)} onClick={() => nRouter.push("/manage/enter")}>
                        <span className={cx(styles.icon_box)}>
                            <Svgs cxStyles={cx(styles.icon_bg)} name='이모지_입장관리' size={20} />입장관리
                        </span>
                        <Svgs name='arrowRight' />
                    </button>
                    <button type='button' className={cx(styles.btn)}>
                        <span className={cx(styles.icon_box)}>
                            <Svgs cxStyles={cx(styles.icon_bg)} name='이모지_편지하트' size={20} />입장코드
                        </span>
                        <Svgs name='arrowRight' />
                    </button>
                </Wrap>
            </Card>
        </Wrap>
    );
}

export default ProfileNav;