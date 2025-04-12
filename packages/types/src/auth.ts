export interface signupParamsItf {
    userName: string;
    userHp: string;
    userBirth: string;
    userEmail: string;
    snsId?: string;
    loginType: 'business' | 'nomal' | 'kakao' | 'naver' | 'apple';
    centerAddress?: string;
    business_num?: string;
    centerName?: string;
    centerHp?: string;
}

export interface oAuthSignupParamsItf {
    userName: string;
    userNickname: string;
    userGender: string;
    userHp: string;
    userBirthday: string;
    userEmail: string;
    snsId?: string;
    loginType: 'kakao' | 'naver' | 'apple';
}

export interface naverOauthInfoItf {
    id: string;
    gender: string;
    email: string;
    mobile: string;
    mobile_e164: string;
    name: string;
    birthyear: string;
}
