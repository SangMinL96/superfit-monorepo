import React from 'react';
import cx from 'clsx';
import Input from '@superfit/design/Input';
import styles from './SignupForm.module.scss';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
function SignupForm() {
  return (
    <div className={cx(styles.wrap)}>
      <h5 className={cx(styles.tit)}>회원정보입력</h5>
      <Divide marginOnly value={40} />
      <Input name='name' type='text' placeholder={{ text: '실명 입력' }} label='이름' required />
      <Divide marginOnly value={30} />
      <Input name='age' type='text' placeholder={{ text: '예)20020108' }} label='생년월일' required />
      <p className={styles.label}>
        성별<span className={styles.required}>*</span>
      </p>
      <div className={styles.btn_box}>
        <Button disabled type='button' name='m'>
          남자
        </Button>
        <Button type='button' name='g'>
          여자
        </Button>
      </div>
    </div>
  );
}

export default SignupForm;
