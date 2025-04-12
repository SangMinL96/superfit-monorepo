import { getKakaoUserInfoApi, oAuthLoginApi } from '@src/api/auth/api';
import { setAccessToken, setRefreshToken } from '@src/common/webStorage/storage';
import Spinner from '@src/components/common/spinner/Spinner';
import { GetServerSidePropsContext } from 'next';
import { useCallback, useEffect } from 'react';


type Props = {
    access_token: string;
    refresh_token: string;
    isError?: boolean;
}
function KakaoOauthCallbackPage({ access_token, refresh_token, isError = false }: Props) {
    const getToken = useCallback(async () => {
        try {
            const { data } = await getKakaoUserInfoApi(access_token);
            const result = await oAuthLoginApi({ snsId: data?.id, loginType: 'kakao' });
            const infoData = {
                email: data.kakao_account?.email || '',
                gender: data.kakao_account?.gender || '',
                nickname: data.properties?.nickname || ''
            };
            if (result.result === 'notFound_user') {
                const postData = {
                    snsId: data?.id,
                    loginType: 'kakao',
                    type: 'gotoSignup',
                    infoData
                };
                window.ReactNativeWebView.postMessage(JSON.stringify(postData));
            }
            if (result.result === 'success') {
                setAccessToken(result.data?.access_token);
                setRefreshToken(result.data?.refresh_token);
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
            }
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }, [access_token]);
    useEffect(() => {
        if (!isError) {
            getToken();
        }
    }, [getToken, isError]);
    if (isError) return <div>에러발생 뒤로가기</div>;
    return (
        <div>
            <Spinner />
        </div>
    );
}

export default KakaoOauthCallbackPage;
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '',
        client_secret: process.env.NEXT_PUBLIC_KAKAO_KEY || '',
        code: query.code as string,
    });

    const response = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
    });
    if (!response.ok) {
        return { props: { isError: true } };
    }
    const result = await response.json();
    return {
        props: {
            access_token: result.access_token,
            refresh_token: result.refresh_token
        },
    };
}
