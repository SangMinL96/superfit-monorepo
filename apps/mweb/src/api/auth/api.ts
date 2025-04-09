import { execFetcher } from '@src/common/fetcher/fetcher';
import { naverOauthInfoItf, signupParamsItf } from '@superfit/types/auth';
import { ExecResultItf } from '@superfit/types/fetcher';
import { LoginParamsItf, LoginResultItf, oAuthLoginParamsItf } from '@superfit/types/login';
import axios from 'axios';

const getKakaoTokenApi = async (code: string): Promise<any> => {
  const result = axios.post(
    'https://kauth.kakao.com/oauth/token',
    {
      client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
      grant_type: 'authorization_code',
      client_secret: process.env.NEXT_PUBLIC_KAKAO_KEY,
      code,
    },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return result;
};

const getKakaoUserInfoApi = async (token: string): Promise<any> => {
  const result = axios.get('https://kapi.kakao.com//v2/user/me', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  return result;
};

const getNaverUserCheckApi = async (code: string, state: string) => {
  const result = await execFetcher<naverOauthInfoItf>(`/auth/naver-userinfo`, {
    method: 'POST',
    body: JSON.stringify({ code, state }),
  });
  return result;
};

const phoneLoginApi = async (params: LoginParamsItf): Promise<LoginResultItf> => {
  const result = await execFetcher<{
    access_token: string;
    refresh_token: string;
    oAuthType?: 'business' | 'nomal' | 'naver' | 'kakao' | 'apple';
  }>('/login/phoneLogin', {
    method: 'post',
    body: JSON.stringify(params),
  });
  return result;
};

const oAuthLoginApi = async (params: oAuthLoginParamsItf): Promise<LoginResultItf> => {
  const result = await execFetcher<{ access_token: string; refresh_token: string }>(
    '/login/oAuthLogin',
    {
      method: 'post',
      body: JSON.stringify(params),
    },
  );
  console.log(result)
  return result;
};

const userSignUpApi = async (params: signupParamsItf): Promise<ExecResultItf> => {
  const result = await execFetcher('/auth/user-signup', {
    method: 'post',
    body: JSON.stringify(params),
  });
  return result;
};

const postHpAuthNumSend = async (hp: string): Promise<ExecResultItf> => {
  const result = await execFetcher('/auth/hpAuthNum-send', {
    method: 'POST',
    body: JSON.stringify({ hp }),
  });
  return result;
};

const postAuthCheckApi = async (hp: string, authNum: string): Promise<ExecResultItf> => {
  const result = await execFetcher('/auth/authNum-check', {
    method: 'POST',
    body: JSON.stringify({ hp, authNum }),
  });
  return result;
};

export default getKakaoTokenApi;
export {
  getKakaoTokenApi,
  getKakaoUserInfoApi,
  oAuthLoginApi,
  getNaverUserCheckApi,
  userSignUpApi,
  postHpAuthNumSend,
  postAuthCheckApi,
  phoneLoginApi,
};
