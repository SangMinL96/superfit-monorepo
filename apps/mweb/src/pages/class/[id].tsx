import React, { useState } from 'react';
import styles from '@src/styles/class/classId.module.scss';
import cx from 'clsx';
import Divide from '@superfit/design/Divide';
import Svgs from '@superfit/design/Svgs';
import { Button } from '@superfit/design/button';
import BottomSheet from '@superfit/design/BottomSheet';
import Link from 'next/link';
function ClassIdPage() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h3 className={cx(styles.tit)}>그룹수업</h3>
            <p className={cx(styles.desc)}>2024.08.20 (목요일) / 10:00 ~ 11:00</p>
            <Divide value={10} margin='40px 0 30px' />
            <h5 className={cx(styles.sub_tit)}>회원</h5>
            <ul className={cx(styles.list)}>
                <li>
                    <Link href={'/user/123'} className={cx(styles.flex_left)}>
                        <div className={cx(styles.avatar)}>
                            <Svgs name='avatarMan' />
                        </div>
                        <div className={cx(styles.info)}>
                            <strong className={cx(styles.info_name)}>이상민 회원</strong>
                            <p className={cx(styles.info_etc)}>96년12월6일 | 010-3794-3914</p>
                        </div>
                    </Link>
                    <div className={cx(styles.flex_right)}>
                        <button type='button' className={cx(styles.btn)}>
                            출석하기
                        </button>
                    </div>
                </li>
                <li>
                    <Link href={'/user/123'} className={cx(styles.flex_left)}>
                        <div className={cx(styles.avatar)}>
                            <Svgs name='avatarMan' />
                        </div>
                        <div className={cx(styles.info)}>
                            <strong className={cx(styles.info_name)}>이상민 회원</strong>
                            <p className={cx(styles.info_etc)}>96년12월6일 | 010-3794-3914</p>
                        </div>
                    </Link>
                    <div className={cx(styles.flex_right)}>
                        <span className={cx(styles.txt)}>수동</span>
                        <em className={cx(styles.status)}>출석완료</em>
                    </div>
                </li>
                <li>
                    <Link href={'/user/123'} className={cx(styles.flex_left)}>
                        <div className={cx(styles.avatar)}>
                            <Svgs name='avatarMan' />
                        </div>
                        <div className={cx(styles.info)}>
                            <strong className={cx(styles.info_name)}>이상민 회원</strong>
                            <p className={cx(styles.info_etc)}>96년12월6일 | 010-3794-3914</p>
                        </div>
                    </Link>
                    <div className={cx(styles.flex_right)}>
                        <button type='button' className={cx(styles.btn, styles.status)}>
                            출석하기
                        </button>
                    </div>
                </li>
            </ul>
            {open && (
                <BottomSheet open={open} onClose={() => setOpen(false)} title='수동출석하기'>
                    <ul className={cx(styles.desc_list)}>
                        <li>회원이 QR코드 인식이 어려운 경우</li>
                        <li>이미 지난 수업을 출석하고 싶은 경우</li>
                        <li>
                            출석을 취소하고 싶은 경우{' '}
                            <Link href={'/'} className={cx(styles.link)}>
                                여기
                            </Link>
                            를 클릭하여 취소 하세요
                        </li>
                    </ul>
                    <Button name='' type='button'>출석하기</Button>
                </BottomSheet>
            )}
        </div>
    );
}

export default ClassIdPage;
