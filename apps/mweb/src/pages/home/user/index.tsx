import React from 'react';
import styles from '@src/styles/home/partner/HomePartner.module.scss';
import cx from 'clsx';
import Card from '@superfit/design/Card';
import TodayClassP from '@src/components/home/_partner/todayClassP/TodayClassP';
import Divide from '@superfit/design/Divide';
import NavEtcP from '@src/components/home/_partner/navEtcP/NavEtcP';
import ClassMgtP from '@src/components/home/_partner/classMgtP/ClassMgtP';
import StaffMgtP from '@src/components/home/_partner/staffMgtP/StaffMgtP';
import MotionWrap from '@superfit/design/MotionWrap';
import Header from '@superfit/design/Header';
function Index() {
    return (
        <>
            <Header />
            <MotionWrap styleClass={cx(styles.wrap)}>
                <Card title='오늘의 수업'>
                    <TodayClassP />
                </Card>
                <Divide marginOnly value={15} />
                <Card>
                    <NavEtcP />
                </Card>
                <Divide marginOnly value={15} />
                <Card title='수업관리'>
                    <ClassMgtP />
                </Card>
                <Divide marginOnly value={15} />
                <Card title='직원관리'>
                    <StaffMgtP />
                </Card>
            </MotionWrap>
        </>
    );
}

export default Index;
