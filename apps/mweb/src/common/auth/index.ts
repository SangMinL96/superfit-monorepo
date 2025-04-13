import { oAuthLoginApi, postNomalLogin } from '@src/api/auth/api';
import { setAccessToken, setRefreshToken } from '../webStorage/storage';

type signupSuccessParams = {
    loginType: string;
    snsId?: string;
    userId?: string;
    userPw?: string;
};
export const signupSuccess = async ({ loginType, snsId, userId = '', userPw = '' }: signupSuccessParams) => {
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
        try {
            const result = await postNomalLogin({ userId, userPw });
            if (result.result === 'success') {
                setAccessToken(result.data?.access_token);
                setRefreshToken(result.data?.refresh_token);
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
            }
        } catch (e) {
            alert('홈화면 이동 중 문제가 발생하였습니다.\n로그인 화면으로 이동합니다');
        }
    }
};
