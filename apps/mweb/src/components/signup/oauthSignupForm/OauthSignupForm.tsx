import React, { ChangeEvent, FormEvent, useState } from 'react';
import cx from 'clsx';
import Input from '@superfit/design/Input';
import styles from './OauthSignupForm.module.scss';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
import { motion } from 'framer-motion';
import BottomSheet from '@superfit/design/BottomSheet';
import PhoneVerification from '@src/components/bottomSheet/phoneVerification/PhoneVerification';
import { useRouter } from 'next/router';
import { postUserHpDupCheck, userOauthSignUpApi } from '@src/api/auth/api';
import { oAuthSignupParamsItf } from '@superfit/types/auth';
import { signupSuccess } from '@src/common/auth';
import { mountFadeIn } from '@superfit/design/motion';

type FormStateType = {
    gender: 'M' | 'G';
    nickname: string;
    email: string;
    userHp: string;
    userBirthday: string;
    name: string;
};

function OauthSignupForm() {
    const router = useRouter();
    const { email, gender, nickname, sns_id, login_type, hp } = router.query;
    const [formState, setFormState] = useState<FormStateType>({ gender, email, nickname, userHp: String(hp) } as FormStateType);
    const [phoneAuth, setPhoneAuth] = useState(false);
    const [viewBottomHpCheck, setViewBottomHpCheck] = useState(false);
    const [userIdDup, setUserIdDup] = useState(false);
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
            if (result === 'success') {
                signupSuccess(params);
                alert('회원가입이 완료되었습니다\n홈 화면으로 이동합니다');
            }
        } catch (e) {
            console.error(e);
            alert('회원가입 실패했습니다\n관리자에게 문의해주세요');
        }
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        setFormState(prev => ({ ...prev, [id]: e.target.value }));
    };
    const onUserHpCheck = async (bottomResult: boolean) => {
        const { result, data } = await postUserHpDupCheck(formState.userHp);
        if (bottomResult) {
            if (result === 'success') {
                alert('휴대폰 인증 완료되었습니다.');
                setPhoneAuth(true);
                setViewBottomHpCheck(false);
                setUserIdDup(true);
            } else {
                alert(data);
                setViewBottomHpCheck(false);
                setPhoneAuth(false);
                setUserIdDup(false);
            }
        } else {
            alert('인증번호가 틀렸습니다.');
            setPhoneAuth(false);
            setViewBottomHpCheck(false);
        }
    };
    if (!router.isReady) return <div>test</div>;
    return (
        <>
            <form onSubmit={onSubmit} className={cx(styles.wrap)}>
                <motion.h5 {...mountFadeIn} className={cx(styles.tit)}>
                    당신을 파악하기 위해
                    <br />
                    간단한 정보를 받아둘게요!
                </motion.h5>
                <Divide marginOnly value={20} />
                <Input
                    id='name'
                    type='text'
                    height='35px'
                    defaultValue={formState.name}
                    onChange={onChange}
                    placeholder={{ text: '실명 입력' }}
                    label='이름'
                    required
                />
                <Divide marginOnly value={30} />
                <Input
                    id='nickname'
                    type='text'
                    height='35px'
                    defaultValue={formState.nickname}
                    onChange={onChange}
                    placeholder={{ text: '닉네임 입력' }}
                    label='닉네임'
                    required
                />
                <Divide marginOnly value={30} />
                <Input
                    id='userBirthday'
                    defaultValue={formState.userBirthday}
                    onChange={onChange}
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
                    <Button
                        type='button'
                        color={formState.gender === 'M' ? 'primary' : 'grey'}
                        onClick={() => setFormState(prev => ({ ...prev, gender: 'M' }))}
                    >
                        남자
                    </Button>
                    <Button
                        type='button'
                        color={formState.gender === 'G' ? 'primary' : 'grey'}
                        onClick={() => setFormState(prev => ({ ...prev, gender: 'G' }))}
                    >
                        여자
                    </Button>
                </div>
                <Divide marginOnly value={30} />
                <Input
                    id='email'
                    height='35px'
                    type='text'
                    placeholder={{ text: '예)hilsm3814@gmail.com' }}
                    label='이메일'
                    required
                    defaultValue={formState.email}
                    onChange={onChange}
                />
                <div className={cx(styles.input_box)}>
                    <Input
                        id='userHp'
                        type='text'
                        placeholder={{ text: '‘-’ 제외하고 숫자만 입력' }}
                        label='휴대폰번호'
                        required
                        height='35px'
                        defaultValue={formState.userHp}
                        onChange={onChange}
                    />
                    <button type='button' className={cx(styles.input_btn)} onClick={() => setViewBottomHpCheck(true)}>
                        인증번호 요청
                    </button>
                </div>
                <Divide marginOnly value={30} />
                <Button name='btn' type='submit'>
                    가입완료하기
                </Button>
                <Divide marginOnly value={30} />
            </form>
            {viewBottomHpCheck && (
                <BottomSheet title='휴대폰인증' open={viewBottomHpCheck} onClose={() => setViewBottomHpCheck(false)}>
                    <PhoneVerification onResult={onUserHpCheck} userHp={formState.userHp} timeover={() => setViewBottomHpCheck(false)} />
                </BottomSheet>
            )}
        </>
    );
}

export default OauthSignupForm;
