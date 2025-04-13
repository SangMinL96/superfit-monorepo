import Card from '@superfit/design/Card';
import styles from './SelectUserType.module.scss';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { useShallowRouter } from '@src/hooks/useShallowRouter';
import { mountFadeIn } from '@superfit/design/motion';
function SelectUserType() {
    const router = useShallowRouter();

    return (
        <div className={cx(styles.wrap)}>
            <motion.h5 {...mountFadeIn} className={cx(styles.tit)}>
                회원유형
            </motion.h5>
            <motion.p {...mountFadeIn} className={cx(styles.desc)}>
                일반 회원은 간편한 SNS계정 회원가입을 권장해요
            </motion.p>
            <div className={cx(styles.card_box)}>
                <Card onClick={() => router.push({ step: 2, loginType: 'basic' })}>
                    <strong className={cx(styles.tit_card)}>일반회원</strong>
                    <p className={cx(styles.desc_card)}>간단하게 회원가입하고 초대코드를 받아 입장하세요!</p>
                </Card>
                <Card onClick={() => router.push({ step: 2, loginType: 'business' })}>
                    <strong className={cx(styles.tit_card)}>제휴회원</strong>
                    <p className={cx(styles.desc_card)}>
                        회원가입하고 회원을 빠르게 모아
                        <br />
                        회원관리 * 수업관리 * 스케줄등 쉽게 관리하세요!
                    </p>
                </Card>
            </div>
        </div>
    );
}

export default SelectUserType;
