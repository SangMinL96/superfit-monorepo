import React, { useState } from 'react';
import Wrap from '@superfit/design/wrap';
import Card from '@superfit/design/Card';
import Tabs from '@superfit/design/Tabs';
import cx from 'clsx';
import styles from './ProfileTicket.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@superfit/design/button';
import Icons from '@superfit/design/Icons';
function ProfileTicket() {
    const [activeTab, setActiveTab] = useState<string>('내 수강권');
    return (
        <Wrap padding='0 20px 20px'>
            <Card>
                <Tabs layoutId='profile_ticket' data={['내 수강권', '연동센터']} value={activeTab} onChange={tab => setActiveTab(tab)} />
                <AnimatePresence mode='wait' propagate>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        {activeTab === '내 수강권' && (
                            <>
                                <Card margin='20px 0 0'>
                                    <Wrap direction='row' gap='5px' justify='flex-start'>
                                        <span className={cx(styles.tag)}>쿠피바라센터</span>
                                        <span className={cx(styles.tag)}>이상민 트레이너</span>
                                    </Wrap>
                                    <Wrap direction='row' margin='10px 0 0' justify='space-between'>
                                        <strong className={cx(styles.class_name)}>요가 기초클래스</strong>
                                        <em className={cx(styles.class_date)}>~2024년 12월 31일</em>
                                    </Wrap>

                                    <Wrap margin='6px 0 0' direction='row' justify='space-between'>
                                        <strong className={cx(styles.remain_class)}>남은 수업</strong>
                                        <em className={cx(styles.remain_count)}>8/10회</em>
                                    </Wrap>
                                    <div className={cx(styles.progress_bar_background)}>
                                        <motion.div
                                            className={cx(styles.progress_bar_fill)}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(8 / 10) * 100}%` }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                    </div>
                                </Card>
                                <Button type='button' size={36} margin='20px 0 0' color='grey'>
                                    모든 수강권 보기
                                </Button>
                            </>
                        )}
                        {activeTab === '연동센터' && (
                            <>
                                <Card margin='20px 0 0'>
                                    <Wrap direction='row' justify='space-between'>
                                        <strong className={cx(styles.class_name)}>쿠피바라센터</strong>
                                        <em className={cx(styles.class_date)}>2024년 12월 6일 입장</em>
                                    </Wrap>
                                    <Wrap margin='15px 0 0' position='relative' direction='row' justify='space-between'>
                                        <p className={cx(styles.current_ticket)}>(수강권: 1개 이용중)</p>
                                        <div className={cx(styles.main_mark)}>
                                            <Icons size={18} name='check_fill_active' margin='0 5px 0' />
                                            현재 연동된 센터
                                        </div>
                                    </Wrap>
                                </Card>
                                <Button type='button' size={36} margin='20px 0 0' color='grey'>
                                    센터 연동 관리
                                </Button>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </Card>
        </Wrap>
    );
}

export default ProfileTicket;
