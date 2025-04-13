import { execFetcher } from '@src/common/fetcher/fetcher';
import { naverOauthInfoItf, oAuthSignupParamsItf, signupParamsItf } from '@superfit/types/auth';
import { ExecResultItf } from '@superfit/types/fetcher';
import { LoginResultItf, oAuthLoginParamsItf } from '@superfit/types/login';
import axios from 'axios';

export const getKakaoUserInfoApi = async (token: string): Promise<any> => {
    const result = axios.get('https://kapi.kakao.com//v2/user/me', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    });
    return result;
};

export const getNaverUserCheckApi = async (code: string, state: string) => {
    const result = await execFetcher<naverOauthInfoItf>(`/auth/naver-userinfo`, {
        method: 'POST',
        data: { code, state },
    });
    return result;
};

export const postNomalLogin = async (params: { userId: string; userPw: string }): Promise<LoginResultItf> => {
    const result = await execFetcher<{ access_token: string; refresh_token: string }>('/login/nomalLogin', {
        method: 'post',
        data: params,
    });
    return result;
};
export const oAuthLoginApi = async (params: oAuthLoginParamsItf): Promise<LoginResultItf> => {
    const result = await execFetcher<{ access_token: string; refresh_token: string }>('/login/oAuthLogin', {
        method: 'post',
        data: params,
    });
    return result;
};

export const userSignUpApi = async (params: signupParamsItf): Promise<ExecResultItf> => {
    const result = await execFetcher('/auth/user-signup', {
        method: 'post',
        data: params,
    });
    return result;
};
export const userOauthSignUpApi = async (params: oAuthSignupParamsItf): Promise<ExecResultItf> => {
    const result = await execFetcher('/auth/oauth/user-signup', {
        method: 'post',
        data: params,
    });
    return result;
};

export const postHpAuthNumSend = async (hp: string): Promise<ExecResultItf> => {
    const result = await execFetcher('/auth/hpAuthNum-send', {
        method: 'POST',
        data: { hp },
    });
    return result;
};

export const postAuthCheckApi = async (hp: string, authNum: string): Promise<ExecResultItf> => {
    const result = await execFetcher('/auth/authNum-check', {
        method: 'POST',
        data: { hp, authNum },
    });
    return result;
};

export const postUserIdDup = async (userId: string): Promise<ExecResultItf> => {
    const result = await execFetcher('/auth/user-id/dup-check', {
        method: 'POST',
        data: { userId },
    });
    return result;
};

export const postUserHpDupCheck = async (userHp: string): Promise<ExecResultItf> => {
    const result = await execFetcher('/auth/user-hp/dup-check', {
        method: 'POST',
        data: { userHp },
    });
    return result;
};
