// shared/src/user.ts
export interface LoginParamsItf {
    hp?: string;
}

export interface oAuthLoginParamsItf {
    loginType: string | 'kakao' | 'naver' | 'google' | 'apple';
    snsId?: string;
}

export interface LoginResultItf {
    data?: { access_token?: string; refresh_token?: string; oAuthType?: string };
    result: string;
}
