import React from 'react';
import styles from './Stepper.module.scss';
import cx from 'clsx';
function Stepper() {
  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.text_box, styles.active)}>
        <strong className={cx(styles.text)}>회원유형</strong>
      </div>
      <div className={cx(styles.text_box)}>
        <strong className={cx(styles.text)}>약관동의</strong>
      </div>
      <div className={cx(styles.text_box)}>
        <strong className={cx(styles.text)}>정보입력</strong>
      </div>
      <div className={cx(styles.text_box)}>
        <strong className={cx(styles.text)}>가입완료</strong>
      </div>
    </div>
  );
}

export default Stepper;
