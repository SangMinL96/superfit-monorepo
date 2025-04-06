import getKakaoTokenApi, { getKakaoUserInfoApi, oAuthLoginApi } from '@src/api/auth/api';
import { setAccessToken, setRefreshToken } from '@src/common/webStorage/storage';
import Spinner from '@src/components/common/spinner/Spinner';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function KakaoOauthCallbackPage({ code }: { code: string }) {
    const router = useRouter();
    const getToken = async () => {
        try {
            const token = await getKakaoTokenApi(String(code));
            const { data } = await getKakaoUserInfoApi(token.data.access_token);

            const result = await oAuthLoginApi({ snsId: data?.id, loginType: 'kakao' });
            if (result.result === 'notFound_user') {
                const postData = {
                    snsId: data?.id,
                    loginType: 'kakao',
                    type: 'gotoSignup',
                };
                window.ReactNativeWebView.postMessage(JSON.stringify(postData));
            }
            if (result.result === 'success') {
                setAccessToken(result.data?.access_token);
                setRefreshToken(result.data?.refresh_token);
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (code) {
            getToken();
        }
    }, [code]);
    return (
        <div>
            <Spinner />
        </div>
    );
}

export default KakaoOauthCallbackPage;
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    return {
        props: { code: query.code },
    };
}
