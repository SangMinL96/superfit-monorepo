import { oAuthLoginApi, phoneLoginApi } from "@src/api/auth/api";
import { setAccessToken, setRefreshToken } from "../webStorage/storage";

type signupSuccessParams = {
  userName?: string;
  userBirth?: string;
  userHp?: string;
  userEmail?: string;
  snsId?: string;
  loginType: string;
};
export const signupSuccess = async ({ loginType, snsId, userHp }: signupSuccessParams) => {
  try {
    if (loginType !== 'nomal') {
      const params = {
        loginType,
        snsId,
      };
      const result = await oAuthLoginApi(params);
      if (result.result === 'success') {
        setAccessToken(result.data?.access_token);
        setRefreshToken(result.data?.refresh_token);
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
      }
    } else {
      const result = await phoneLoginApi({ hp: userHp });
      if (result.result === 'success') {
        setAccessToken(result.data?.access_token);
        setRefreshToken(result.data?.refresh_token);
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
      }
    }
  } catch (err) {
    throw Error(JSON.stringify(err));
  }
};

export const phoneLoginStart = async (hp: string) => {
  try {
    const result = await phoneLoginApi({ hp });
    if (result.result === 'success') {
      setAccessToken(result.data?.access_token);
      setRefreshToken(result.data?.refresh_token);
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
    }
    if (result.result === 'isOauth') {
      if (result.data?.oAuthType === 'kakao') {
        alert('이미 카카오 계정으로 가입되어 있습니다.');
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'goBack' }));
      }
      if (result.data?.oAuthType === 'naver') {
        alert('이미 네이버 계정으로 가입되어 있습니다.');
      }
    }
    if (result.result === 'notFound_user') {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoSignup' }));
    }
  } catch (err) {
    throw Error(JSON.stringify(err));
  }
};
