import React from 'react';
import cx from 'clsx';
import Input from '@superfit/design/Input';
import styles from './SignupForm.module.scss';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
import { motion } from 'framer-motion';
import { mountFadeIn } from '@src/styles/motion';
import BottomSheet from '@superfit/design/BottomSheet';
function SignupForm() {
    return (
        <div className={cx(styles.wrap)}>
            <motion.h5 {...mountFadeIn} className={cx(styles.tit)}>
                회원정보입력
            </motion.h5>
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
            <Divide marginOnly value={30} />
            <Input
                name='age'
                type='text'
                placeholder={{ text: '영문 소문자와 숫자 조합 4~12자리' }}
                label='아이디'
                required
            />
            <Divide marginOnly value={30} />
            <Input name='age' type='text' placeholder={{ text: '비밀번호 입력하세요' }} label='비밀번호' required />
            <Divide marginOnly value={30} />
            <Input
                name='age'
                type='text'
                placeholder={{ text: '설정한 비밀번호를 한번 더 입력하세요' }}
                label='비밀번호 확인'
                required
            />
            <p className={cx(styles.input_desc)}>
                영문 대/소문자, 숫자, 특수문자 (~!@#$%^&*()_+|) 중 2종류를 조합하여 10~16자 또는 3종류 이상을 조합하여
                8~16자로 입력해주세요.
            </p>
            <div className={cx(styles.input_box)}>
                <Input
                    name='age'
                    type='text'
                    placeholder={{ text: '‘-’ 제외하고 숫자만 입력' }}
                    label='휴대폰번호'
                    required
                />
                <button className={cx(styles.input_btn)}>인증번호 요청</button>
            </div>
            <Divide marginOnly value={30} />
            <Input name='age' type='text' placeholder={{ text: '예)hilsm3814@gmail.com' }} label='이메일' required />
            <Divide marginOnly value={30} />
            <Input name='age' type='text' placeholder={{ text: '사업자번호 입력하세요' }} label='사업자번호' required />
            <div className={cx(styles.input_box)}>
                <Input name='age' type='text' placeholder={{ text: '업장명을 입력하세요' }} label='업장명' required />
                <button className={cx(styles.input_btn)}>업장위치찾기</button>
            </div>
            <Divide marginOnly value={30} />
            <Button name='btn' type='submit' disabled>
                가입완료하기
            </Button>
            <Divide marginOnly value={30} />
            <BottomSheet title='휴대폰인증' open onClose={() => null}>
                <div>test</div>
            </BottomSheet>
        </div>
    );
}

export default SignupForm;
