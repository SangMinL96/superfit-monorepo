import React from 'react';
import cx from 'clsx';
import styles from '@src/styles/create/CreateIndex.module.scss';
import Wrap from '@superfit/design/wrap';
import Icons from '@superfit/design/Icons';
import Loading from '@superfit/design/Loading';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
function Index() {
    const nRouter = useNativeRouter();
    return (
        <div className={cx(styles.wrap)}>
            <h3 className={cx(styles.tit)}>나만의 수업 생성하기</h3>
            <p className={cx(styles.sub_tit)}>나만의 수업을 생성하기 위한 필수 행동 2가지가 있어요</p>
            <p className={cx(styles.desc)}>1. 수업이 하나도 존재하지 않으면 먼저 수업 생성해야해요</p>
            <p className={cx(styles.desc)}>2. 본인이 대표여도 직원 등록을 해야해요</p>
            <Wrap margin='20px 0 0'>
                <button type='button' className={cx(styles.btn)} onClick={() => nRouter.push('/form/classcreate')}>
                    <Icons name='이모지_수업생성' size={40} />
                    <em>수업 생성하러가기</em>
                </button>
            </Wrap>
            <Wrap margin='20px 0 0'>
                <button type='button' className={cx(styles.btn)} onClick={() => nRouter.push('/form/staffcreate')}>
                    <Icons name='이모지_직원생성' size={40} />
                    <em>직원 생성하러가기</em>
                </button>
            </Wrap>
            <Wrap margin='20px 0 0'>
                <button type='button' className={cx(styles.my_btn)} onClick={() => nRouter.push('/class/create')}>
                    <Loading inline size={50} />
                    <em>나만의 수업 만들기</em>
                </button>
            </Wrap>
        </div>
    );
}

export default Index;
