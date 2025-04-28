import OblongInput from '@superfit/design/OblongInput';
import Wrap from '@superfit/design/wrap';
import React, { useState } from 'react';
import styles from '@src/styles/manage/manage.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import cx from 'clsx';
import Tabs from '@superfit/design/Tabs';
import Card from '@superfit/design/Card';
import Icons from '@superfit/design/Icons';
import Divide from '@superfit/design/Divide';
function Index() {
    const [tab, setTab] = useState('대기중');
    return (
        <Wrap padding='0 20px' wrapClassName={cx(styles.enter_wrap)}>
            <motion.div
                style={{ width: '100%' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
            >
                <OblongInput placeholder={{ text: '이름, 휴대폰번호로 검색' }} isSearch height='45px' inputClass={cx(styles.search_input)} />
                <Wrap margin='20px 0 0'>
                    <Tabs layoutId='manage_enter' data={['대기중', '수락됨', '거절됨', '전체']} value={tab} onChange={value => setTab(value)} />
                    <AnimatePresence mode='wait'>
                        <motion.div
                            style={{ width: '100%', marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}
                            key={tab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Card>
                                <Wrap direction='row' justify='space-between'>
                                    <Wrap direction='row'>
                                        <Icons name='남자캐릭터' size={50} />
                                        <Wrap align='flex-start' gap='5px' padding='0 0 0 4px'>
                                            <strong className={cx(styles.user_name)}>이상민</strong>
                                            <em className={cx(styles.hp)}>010-3794-3814</em>
                                        </Wrap>
                                    </Wrap>
                                    <Wrap direction='row' justify='flex-end' gap='0 8px'>
                                        <button type='button' className={cx(styles.result_btn, styles.reject)}>
                                            {rejectSvg}
                                        </button>
                                        <button type='button' className={cx(styles.result_btn, styles.accept)}>
                                            {acceptSvg}
                                        </button>
                                    </Wrap>
                                </Wrap>
                                <Divide value={1} margin='12px 0 10px' />
                                <Wrap position='relative' align='flex-start'>
                                    <p className={cx(styles.date)} style={{ position: true ? 'absolute' : 'relative' }}>
                                        2023년 5월 16일 요청
                                    </p>
                                    <p className={cx(styles.msg)}>저 탈퇴되어서 다시 신청했어요</p>
                                </Wrap>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </Wrap>
            </motion.div>
        </Wrap>
    );
}

export default Index;

const acceptSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='green' viewBox='0 0 24 24'>
        <path d='M20.285 6.709a1 1 0 00-1.414-1.418l-9.192 9.192-4.242-4.242a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l10-10z' />
    </svg>
);

const rejectSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='red' viewBox='0 0 24 24'>
        <path d='M18.364 5.636a1 1 0 00-1.414 0L12 10.586 7.05 5.636a1 1 0 00-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 101.414 1.414L12 13.414l4.95 4.95a1 1 0 001.414-1.414L13.414 12l4.95-4.95a1 1 0 000-1.414z' />
    </svg>
);
