import React, { useState } from 'react';
import styles from '@src/styles/signin/Signin.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import Divide from '@superfit/design/Divide';
import logo from '@public/logo.png';
import OblongInput from '@superfit/design/OblongInput';
import { Button } from '@superfit/design/button';

function SigninPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.image_box)}>
        <Image src={logo} alt='슈퍼핏 로고' height={70} />
      </div>
      <form className={clsx(styles.form_box)}>
        <OblongInput
          height='64px'
          name='id'
          type='text'
          placeholder={{ text: '아이디' }}
          value={id}
          onChange={ev => setId(ev.target.value)}
        />
        <Divide value={10} marginOnly />
        <OblongInput
          height='64px'
          name='pw'
          type='password'
          placeholder={{ text: '비밀번호' }}
          value={pw}
          onChange={ev => setPw(ev.target.value)}
        />
      </form>
      <Divide value={25} marginOnly />
      <Button name='login' type='button' size={64} disabled={!id || !pw}>
        로그인
      </Button>
      <div className={clsx(styles.link_box)}>
        <a href='#' className={clsx(styles.link)}>
          아이디찾기
        </a>
        <Divide isVertical={{ margin: '0 15px' }} value={14} />
        <a href='#' className={clsx(styles.link)}>
          비밀번호찾기
        </a>
        <Divide isVertical={{ margin: '0 15px' }} value={14} />
        <a href='#' className={clsx(styles.link)}>
          회원가입
        </a>
      </div>
    </div>
  );
}

export default SigninPage;
