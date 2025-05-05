import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from '@superfit/design/Card';
import Wrap from '@superfit/design/wrap';
import Tabs from '@superfit/design/Tabs';
import styles from '@src/styles/manage/manage.module.scss';
import cx from 'clsx';
import Icons from '../../../../../packages/design/src/components/iconCom/Icons';
import QRCode from 'react-qr-code';
import { Button } from '@superfit/design/button';
import MotionWrap from '@superfit/design/MotionWrap';
import { useCenterEnterCode } from '@src/api/center/hooks';
function Index() {
    const { data } = useCenterEnterCode();
    const [tab, setTab] = useState('QR코드');
    const tabData = [
        {
            name: (
                <span className={cx(styles.tab_name)}>
                    <Icons name='qr코드' size={16} />
                    QR 코드
                </span>
            ),
            value: 'QR코드',
        },
        {
            name: (
                <span className={cx(styles.tab_name)}>
                    <Icons name='텍스트표시' size={16} />
                    텍스트 코드
                </span>
            ),
            value: '텍스트코드',
        },
    ];
    return (
        <MotionWrap styleClass={cx(styles.code_wrap)}>
            <Wrap padding='20px'>
                <Card title='위드필라테스 입장'>
                    <Wrap margin='20px 0 0'>
                        <Tabs data={tabData} value={tab} onChange={e => setTab(e)} layoutId='manage_code' />
                    </Wrap>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 10 }}
                            key={tab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                        >
                            {tab === 'QR코드' && (
                                <Card margin='20px 0 0'>
                                    <QRCode
                                        size={200}
                                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                                        value={'http://10.18.1.38:3000/home/partner'}
                                        viewBox={`0 0 200 200`}
                                    />
                                </Card>
                            )}
                            {tab === '텍스트코드' && (
                                <Wrap margin='20px 0 0'>
                                    <Wrap width='250px' direction='row' justify='space-between'>
                                        <span className={cx(styles.num_box)}>{data?.[0]}</span>
                                        <span className={cx(styles.num_box)}>{data?.[1]}</span>
                                        <span className={cx(styles.num_box)}>{data?.[2]}</span>
                                        <span className={cx(styles.num_box)}>{data?.[3]}</span>
                                    </Wrap>
                                </Wrap>
                            )}
                            <p className={cx(styles.desc)}>이 코드는 위드필라테스 입장 시 필요합니다</p>
                        </motion.div>
                    </AnimatePresence>
                </Card>
            </Wrap>
            <Wrap>
                <Button type='button' width='150px' borderRadius={'30px'} size={36}>
                    <Icons name='공유_화이트' margin='0 5px 0 0' />
                    코드 공유하기
                </Button>
            </Wrap>
        </MotionWrap>
    );
}

export default Index;
