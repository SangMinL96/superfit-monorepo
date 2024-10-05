import React from 'react';
import styles from './Stepper.module.scss';
import cx from 'clsx';
import { useRouter } from 'next/router';
function Stepper() {
  const router = useRouter();
  const { step = '1' } = router.query;
  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.text_box, step === '1' && styles.active)}>
        <strong className={cx(styles.text)}>회원유형</strong>
      </div>
      <div className={cx(styles.text_box, step === '2' && styles.active)}>
        <strong className={cx(styles.text)}>약관동의</strong>
      </div>
      <div className={cx(styles.text_box, step === '3' && styles.active)}>
        <strong className={cx(styles.text)}>정보입력</strong>
      </div>
      <div className={cx(styles.text_box)}>
        <strong className={cx(styles.text)}>가입완료</strong>
      </div>
    </div>
  );
}

export default Stepper;
