import React, { useState } from 'react';
import styles from './NoticeList.module.scss';
import cx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import Tabs from '@superfit/design/Tabs';
import MotionWrap from '@superfit/design/MotionWrap';
import Card from '@superfit/design/Card';
import Wrap from '@superfit/design/wrap';
import Icons from '@superfit/design/Icons';

function NoticeList() {
    const [tab, setTab] = useState('전체');
    return (
        <Wrap padding='0 20px'>
            <Tabs layoutId='notice_list' value={tab} onChange={e => setTab(e)} data={['전체', '읽음', '안읽음']} />
            <AnimatePresence mode='wait'>
                <MotionWrap key={tab} styles={{ marginTop: 30 }}>
                    <Wrap gap='15px'>
                        <h3 className={cx(styles.date_tit)}>
                            <Icons margin='0 10px 0 2px' name='이모지_달력' size={20} />
                            2024년 4월
                        </h3>
                        <Card title='2025년 새로운 수업개시!' onClick={() => console.log('e')}>
                            <p className={cx(styles.date)}>2024.05.10</p>
                        </Card>
                        <Card title='2025년 새로운 수업개시!' onClick={() => console.log('e')}>
                            <p className={cx(styles.date)}>2024.05.10</p>
                        </Card>
                        <Card title='2025년 새로운 수업개시!' onClick={() => console.log('e')}>
                            <p className={cx(styles.date)}>2024.05.10</p>
                        </Card>
                    </Wrap>
                </MotionWrap>
            </AnimatePresence>
        </Wrap>
    );
}

export default NoticeList;
