import React, { ChangeEvent, FormEvent, useState } from 'react';
import cx from 'clsx';
import Input from '@superfit/design/Input';
import styles from './SignupForm.module.scss';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
import { motion } from 'framer-motion';
import BottomSheet from '@superfit/design/BottomSheet';
import PhoneVerification from '@src/components/bottomSheet/phoneVerification/PhoneVerification';
import { signupParamsItf } from '@superfit/types/auth';
import { postUserHpDupCheck, postUserIdDup, userSignUpApi } from '@src/api/auth/api';
import { signupSuccess } from '@src/common/auth';
import { useRouter } from 'next/router';
import { mountFadeIn } from '@superfit/design/motion';
import Wrap from '@superfit/design/wrap';
import axios from 'axios';

function SignupForm() {
    const router = useRouter();
    const { loginType } = router.query;
    const [formState, setFormState] = useState<signupParamsItf>({} as signupParamsItf);
    const [userPwCheck, setUserPwCheck] = useState('');
    const [phoneAuth, setPhoneAuth] = useState(false);
    const [viewBottomHpCheck, setViewBottomHpCheck] = useState(false);
    const [userIdDup, setUserIdDup] = useState(false);
    const validatePassword = (password: string) => {
        const passwordRegex =
            /^(?:(?=(?:.*[A-Za-z])(?=.*\d)|(?=.*[A-Za-z])(?=.*[~!@#$%^&*()_+|])|(?=.*\d)(?=.*[~!@#$%^&*()_+|]))(?!.*[^A-Za-z\d~!@#$%^&*()_+|]).{10,16}|(?=(?:.*[A-Za-z]))(?=(?:.*\d))(?=(?:.*[~!@#$%^&*()_+|]))(?!.*[^A-Za-z\d~!@#$%^&*()_+|]).{8,16})$/;
        return passwordRegex.test(password);
    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!formState.userName) return alert('이름 입력해주세요.');
        // if (!formState.userNickname) return alert('닉네임 입력해주세요.');
        // if (!formState.userBirthday) return alert('생년월일 입력해주세요.');
        // if (!userIdDup) return alert('아이디 중복 확인해주세요');
        // if (!formState.userGender) return alert('성별 입력해주세요.');
        // if (!formState.userId) return alert('아이디 입력해주세요.');
        // if (!formState.userPw) return alert('비밀번호 입력해주세요.');
        // if (formState.userPw !== userPwCheck) return alert('기존 비밀번호와 비밀번호 확인이 일치하지 않았습니다');
        // if (!validatePassword(formState.userPw)) return alert('비밀번호 형식이 틀렸습니다\n다시 입력해주세요.');
        // if (!phoneAuth || !formState.userHp) return alert('휴대폰번호 인증해주세요.');
        // if (!formState.userEmail) return alert('이메일 입력해주세요.');
        try {
            const { result } = await userSignUpApi({ ...formState, loginType: loginType as 'basic' | 'business' });
            if (result === 'success') {
                alert('회원가입이 완료되었습니다\n홈 화면으로 이동합니다');
                signupSuccess({ loginType: 'nomal', userId: formState.userId, userPw: formState.userPw });
            }
        } catch (e) {
            console.log(e);
            alert('회원가입 실패했습니다\n관리자에게 문의해주세요');
        }
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        if (id === 'userId') {
            setUserIdDup(false);
        }
        setFormState(prev => ({ ...prev, [id]: e.target.value }));
    };

    const onUserIdDup = async () => {
        try {
            const { result } = await postUserIdDup(formState.userId);
            if (result === 'success') {
                alert('사용 가능한 아이디 입니다');
                setUserIdDup(true);
            } else {
                alert('중복된 아이디가 존재합니다');
                setUserIdDup(false);
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                const { data } = e.response;
                alert(data.message);
            }
        }
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

    return (
        <>
            <form onSubmit={onSubmit} className={cx(styles.wrap)}>
                <motion.h5 {...mountFadeIn} className={cx(styles.tit)}>
                    당신을 파악하기 위해
                    <br />
                    간단한 정보를 받아둘게요!
                </motion.h5>
                <div className={cx(styles.input_box)}>
                    <Input
                        id='userHp'
                        type='text'
                        placeholder={{ text: '‘-’ 제외하고 숫자만 입력' }}
                        label='휴대폰번호'
                        required
                        height='38px'
                        readOnly={phoneAuth}
                        onChange={onChange}
                    />
                    <button type='button' disabled={phoneAuth} className={cx(styles.input_btn)} onClick={() => setViewBottomHpCheck(true)}>
                        {phoneAuth ? '인증완료' : '인증번호 요청'}
                    </button>
                </div>
                <Divide marginOnly value={20} />
                <Input id='userName' type='text' height='38px' placeholder={{ text: '실명 입력' }} label='이름' required onChange={onChange} />
                <Divide marginOnly value={30} />
                <Input
                    id='userNickname'
                    type='text'
                    height='38px'
                    onChange={onChange}
                    placeholder={{ text: '닉네임 입력' }}
                    label='닉네임'
                    required
                />
                <Divide marginOnly value={30} />
                <Input
                    id='userBirthday'
                    type='text'
                    height='38px'
                    placeholder={{ text: '예)20020108' }}
                    label='생년월일'
                    required
                    onChange={onChange}
                />
                <p className={styles.label}>
                    성별<span className={styles.required}>*</span>
                </p>
                <div className={styles.btn_box}>
                    <Button
                        type='button'
                        color={formState.userGender === 'M' ? 'primary' : 'grey'}
                        onClick={() => setFormState(prev => ({ ...prev, userGender: 'M' }))}
                    >
                        남자
                    </Button>
                    <Button
                        type='button'
                        color={formState.userGender === 'G' ? 'primary' : 'grey'}
                        onClick={() => setFormState(prev => ({ ...prev, userGender: 'G' }))}
                    >
                        여자
                    </Button>
                </div>
                <Divide marginOnly value={30} />
                <Wrap position='relative'>
                    <Input
                        id='userId'
                        type='text'
                        placeholder={{ text: '영문 소문자와 숫자 조합 4~12자리' }}
                        label='아이디'
                        required
                        height='38px'
                        onChange={onChange}
                    />
                    <div className={cx(styles.dup_btn)}>
                        <Button type='button' width='60px' size={32} onClick={onUserIdDup}>
                            {userIdDup ? '확인완료' : '중복확인'}
                        </Button>
                    </div>
                </Wrap>
                <Divide marginOnly value={30} />
                <Input
                    id='userPw'
                    type='password'
                    placeholder={{ text: '비밀번호 입력하세요' }}
                    label='비밀번호'
                    required
                    height='38px'
                    onChange={onChange}
                />
                <p className={cx(styles.input_desc, !validatePassword(formState.userPw) && formState.userPw?.length > 1 ? styles.warning : '')}>
                    영문 대/소문자, 숫자, 특수문자 (~!@#$%^&*()_+|) 중 2종류를 조합하여 10~16자 또는 3종류 이상을 조합하여 8~16자로 입력해주세요.
                </p>
                <Divide marginOnly value={30} />
                <Input
                    type='password'
                    placeholder={{ text: '설정한 비밀번호를 한번 더 입력하세요' }}
                    label='비밀번호 확인'
                    required
                    height='38px'
                    onChange={e => setUserPwCheck(e.target.value)}
                />
                {formState.userPw !== userPwCheck && userPwCheck.length > 1 && (
                    <p className={cx(styles.input_desc, styles.warning)}>설정하신 비밀번호와 일치하지 않습니다</p>
                )}

                <Divide marginOnly value={30} />
                <Input
                    id='userEmail'
                    height='38px'
                    type='text'
                    placeholder={{ text: '예)hilsm3814@gmail.com' }}
                    label='이메일'
                    required
                    onChange={onChange}
                />
                {loginType === 'business' && (
                    <>
                        <Divide marginOnly value={30} />
                        <Input
                            id='businessNum'
                            height='38px'
                            type='text'
                            placeholder={{ text: '사업자번호 입력하세요' }}
                            label='사업자번호'
                            required
                            onChange={onChange}
                        />
                        <div className={cx(styles.input_box)}>
                            <Input
                                id='centerName'
                                type='text'
                                height='38px'
                                placeholder={{ text: '업장명을 입력하세요' }}
                                label='업장명'
                                required
                                onChange={onChange}
                            />
                            <button className={cx(styles.input_btn)}>업장위치찾기</button>
                        </div>
                    </>
                )}
                <Divide marginOnly value={30} />
                <Button type='submit'>가입완료하기</Button>
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

export default SignupForm;
