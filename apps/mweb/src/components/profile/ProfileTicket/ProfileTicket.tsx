import React, { useState } from 'react';
import Wrap from '@superfit/design/wrap';
import Card from '@superfit/design/Card';
import Tabs from '@superfit/design/Tabs';
import cx from 'clsx';
import styles from './ProfileTicket.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@superfit/design/button';
function ProfileTicket() {
    const [activeTab, setActiveTab] = useState<string>('내 수강권');
    return (
        <Wrap padding='0 20px 20px'>
            <Card>
                <Tabs layoutId='profile_ticket' data={['내 수강권', "이용 내역"]} value={activeTab} onChange={tab => setActiveTab(tab)} />
                <AnimatePresence mode="wait" propagate >
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Card margin='20px 0 0'>
                            <Wrap direction='row' justify='space-between'>
                                <strong className={cx(styles.class_name)}>요가 기초클래스</strong>
                                <em className={cx(styles.class_date)}>~2024년 12월 31일</em>
                            </Wrap>
                            <p className={cx(styles.staff)}>강사: 이상민 트레이너</p>
                            <Wrap margin='6px 0 0' direction='row' justify='space-between'>
                                <strong className={cx(styles.remain_class)}>남은 수업</strong>
                                <em className={cx(styles.remain_count)}>8/10회</em>
                            </Wrap>
                            <Wrap >
                                <div className={cx(styles.progress_bar_background)}>
                                    <motion.div
                                        className={cx(styles.progress_bar_fill)}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(8 / 10) * 100}%` }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                    />
                                </div>
                            </Wrap>
                        </Card>
                        <Card margin='20px 0 0'>
                            <Wrap direction='row' justify='space-between'>
                                <strong className={cx(styles.class_name)}>요가 기초클래스</strong>
                                <em className={cx(styles.class_date)}>~2024년 12월 31일</em>
                            </Wrap>
                            <p className={cx(styles.staff)}>강사: 이상민 트레이너</p>
                            <Wrap margin='6px 0 0' direction='row' justify='space-between'>
                                <strong className={cx(styles.remain_class)}>남은 수업</strong>
                                <em className={cx(styles.remain_count)}>8/10회</em>
                            </Wrap>
                            <Wrap >
                                <div className={cx(styles.progress_bar_background)}>
                                    <motion.div
                                        className={cx(styles.progress_bar_fill)}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(8 / 10) * 100}%` }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                    />
                                </div>
                            </Wrap>
                        </Card>
                        <Button type='button' size={36} margin='20px 0 0' color='grey'>모든 수강권 보기</Button>
                    </motion.div>
                </AnimatePresence>
            </Card>
        </Wrap>
    );
}

export default ProfileTicket;