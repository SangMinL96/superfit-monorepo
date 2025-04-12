import React, { ChangeEvent, FormEvent, useState } from 'react';
import cx from 'clsx';
import Input from '@superfit/design/Input';
import styles from './OauthSignupForm.module.scss';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
import { motion } from 'framer-motion';
import { mountFadeIn } from '@src/styles/motion';
import BottomSheet from '@superfit/design/BottomSheet';
import PhoneVerification from '@src/components/bottomSheet/phoneVerification/PhoneVerification';
import { useRouter } from 'next/router';
import { userOauthSignUpApi } from '@src/api/auth/api';
import { oAuthSignupParamsItf } from '@superfit/types/auth';
import { signupSuccess } from '@src/common/auth';

type FormStateType = {
    gender: 'male' | 'female'
    nickname: string;
    email: string;
    userHp: string;
    userBirthday: string;
    name: string;
}

function OauthSignupForm() {
    const router = useRouter();
    const { email, gender, nickname, sns_id, login_type } = router.query;
    const [formState, setFormState] = useState<FormStateType>({ gender, email, nickname } as FormStateType);
    const [hpCheck, setHpCheck] = useState(false);
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const params = {
                userId: formState.email,
                userEmail: formState.email,
                userNickname: formState.nickname,
                userName: formState.name,
                userHp: formState.userHp,
                userBirthday: formState.userBirthday,
                userGender: formState.gender,
                snsId: sns_id,
                loginType: login_type,
            } as oAuthSignupParamsItf;
            const { result } = await userOauthSignUpApi(params);
            alert(JSON.stringify(result));
            if (result === 'success') {
                signupSuccess(params);
            }
        } catch (e) {
            console.error(e);
        }
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        setFormState(prev => ({ ...prev, [id]: e.target.value }));
    };
    return (
        <form onSubmit={onSubmit} className={cx(styles.wrap)}>
            <motion.h5 {...mountFadeIn} className={cx(styles.tit)}>
                당신을 파악하기 위해
                <br />
                간단한 정보를 받아둘게요!
            </motion.h5>
            <Divide marginOnly value={20} />
            <Input id='name' type='text' height='35px' value={formState.name} onChange={onChange} placeholder={{ text: '실명 입력' }} label='이름' required />
            <Divide marginOnly value={30} />
            <Input id='nickname' type='text' height='35px' value={formState.nickname} onChange={onChange} placeholder={{ text: '닉네임 입력' }} label='닉네임' required defaultValue={nickname as string} />
            <Divide marginOnly value={30} />
            <Input
                id="userBirthday"
                value={formState.userBirthday} onChange={onChange}
                type='text'
                height='35px'
                placeholder={{ text: '예)20020108' }}
                label='생년월일'
                required
            />
            <p className={styles.label}>
                성별<span className={styles.required}>*</span>
            </p>
            <div className={styles.btn_box}>
                <Button type='button' color={formState.gender === 'male' ? 'primary' : 'grey'} onClick={() => setFormState(prev => ({ ...prev, gender: 'male' }))}>
                    남자
                </Button>
                <Button type='button' color={formState.gender === 'female' ? 'primary' : 'grey'} onClick={() => setFormState(prev => ({ ...prev, gender: 'female' }))}>
                    여자
                </Button>
            </div>
            <Divide marginOnly value={30} />
            <Input
                id='email'
                name='age'
                height='35px'
                type='text'
                defaultValue={email as string}
                placeholder={{ text: '예)hilsm3814@gmail.com' }}
                label='이메일'
                required
                value={formState.email} onChange={onChange}
            />
            <div className={cx(styles.input_box)}>
                <Input
                    id='userHp'
                    name='age'
                    type='text'
                    placeholder={{ text: '‘-’ 제외하고 숫자만 입력' }}
                    label='휴대폰번호'
                    required
                    height='35px'
                    value={formState.userHp} onChange={onChange}
                />
                <button className={cx(styles.input_btn)} onClick={() => setHpCheck(true)}>
                    인증번호 요청
                </button>
            </div>
            <Divide marginOnly value={30} />
            <Button name='btn' type='submit'>
                가입완료하기
            </Button>
            <Divide marginOnly value={30} />
            {hpCheck && (
                <BottomSheet title='휴대폰인증' open={hpCheck} onClose={() => setHpCheck(false)}>
                    <PhoneVerification timeover={() => setHpCheck(false)} />
                </BottomSheet>
            )}
        </form>
    );
}

export default OauthSignupForm;
