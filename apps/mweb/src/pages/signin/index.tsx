import React, { FormEvent, useState } from 'react';
import styles from '@src/styles/signin/Signin.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import Divide from '@superfit/design/Divide';
import logo from '@public/main_logo.png';
import OblongInput from '@superfit/design/OblongInput';
import { Button } from '@superfit/design/button';
import Link from 'next/link';
import { postNomalLogin } from '@src/api/auth/api';
import axios from 'axios';
import { setAccessToken, setRefreshToken } from '@src/common/webStorage/storage';

function SigninPage() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await postNomalLogin({ userId, userPw });
            if (result.result === 'success') {
                setAccessToken(result.data?.access_token);
                setRefreshToken(result.data?.refresh_token);
                if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
            }
        } catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                const { data } = e.response;
                alert(data.message);
            }
        }
    };
    return (
        <div className={clsx(styles.wrap)}>
            <div className={clsx(styles.image_box)}>
                <Image src={logo} alt='슈퍼핏 로고' width={250} />
            </div>
            <form onSubmit={onSubmit} className={clsx(styles.form_box)}>
                <OblongInput
                    height='64px'
                    name='id'
                    type='text'
                    placeholder={{ text: '아이디' }}
                    value={userId}
                    onChange={ev => setUserId(ev.target.value)}
                />
                <Divide value={10} marginOnly />
                <OblongInput
                    height='64px'
                    name='pw'
                    type='password'
                    placeholder={{ text: '비밀번호' }}
                    value={userPw}
                    onChange={ev => setUserPw(ev.target.value)}
                />
                <Divide value={25} marginOnly />
                <Button type='submit' size={64} disabled={!userId || !userPw}>
                    로그인
                </Button>
            </form>
            <div className={clsx(styles.link_box)}>
                <a href='#' className={clsx(styles.link)}>
                    아이디찾기
                </a>
                <Divide isVertical={{ margin: '0 15px' }} value={14} />
                <a href='#' className={clsx(styles.link)}>
                    비밀번호찾기
                </a>
                <Divide isVertical={{ margin: '0 15px' }} value={14} />
                <Link href={'/signup'} className={clsx(styles.link)}>
                    회원가입
                </Link>
            </div>
        </div>
    );
}

export default SigninPage;
