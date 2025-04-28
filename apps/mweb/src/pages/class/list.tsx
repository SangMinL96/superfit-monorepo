import React from 'react';
import cx from 'clsx';
import styles from '@src/styles/class/list.module.scss';
import Icons from '@superfit/design/Icons';
import { Button } from '@superfit/design/button';
import Wrap from '@superfit/design/wrap';
import Divide from '@superfit/design/Divide';
import { useRouter } from 'next/router';

function Index() {
    const router = useRouter();
    return (
        <div className={cx(styles.wrap)}>
            <h3 className={cx(styles.tit)}>수업 관리</h3>
            <Wrap padding='0 20px' direction='row' justify='space-between' align='flex-end'>
                <p className={cx(styles.desc)}>
                    - 수업이름,수업장소,층수 포함하여 생성 해주세요
                    <br />- 2명 이상의 선생님 수업이 있을 경우 그룹 관리 됩니다
                </p>
                <Button type='button' width='50px' fontSize='1.2rem' size={50} onClick={() => router.push('/form/classcreate')}>
                    수업생성
                </Button>
            </Wrap>
            <Divide value={10} margin='30px 0 0' />
            <Wrap margin='10px 0 0' padding='0 20px'>
                <h5 className={cx(styles.group_tit)}>이상민 강사</h5>
                <ul className={cx(styles.class_list)}>
                    <li>
                        <button type='button' className={cx(styles.btn)} onClick={() => router.push(`/form/classmodify/${123}`)}>
                            <span className={cx(styles.txt_box)}>
                                <Icons name='message_edit' />
                                <em className={cx(styles.txt)}>그룹수업</em>
                            </span>
                            <Icons name='arrow_right' />
                        </button>
                    </li>
                    <li>
                        <button type='button' className={cx(styles.btn)} onClick={() => router.push(`/form/classmodify/${123}`)}>
                            <span className={cx(styles.txt_box)}>
                                <Icons name='message_edit' />
                                <em className={cx(styles.txt)}>그룹수업</em>
                            </span>
                            <Icons name='arrow_right' />
                        </button>
                    </li>
                </ul>
                <h5 className={cx(styles.group_tit)}>이다슬 강사</h5>
                <ul className={cx(styles.class_list)}>
                    <li>
                        <button type='button' className={cx(styles.btn)} onClick={() => router.push(`/form/classmodify/${123}`)}>
                            <span className={cx(styles.txt_box)}>
                                <Icons name='message_edit' />
                                <em className={cx(styles.txt)}>그룹수업</em>
                            </span>
                            <Icons name='arrow_right' />
                        </button>
                    </li>
                    <li>
                        <button type='button' className={cx(styles.btn)} onClick={() => router.push(`/form/classmodify/${123}`)}>
                            <span className={cx(styles.txt_box)}>
                                <Icons name='message_edit' />
                                <em className={cx(styles.txt)}>그룹수업</em>
                            </span>
                            <Icons name='arrow_right' />
                        </button>
                    </li>
                </ul>
            </Wrap>
        </div>
    );
}

export default Index;
