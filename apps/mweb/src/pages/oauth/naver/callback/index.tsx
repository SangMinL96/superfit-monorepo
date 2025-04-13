import { getNaverUserCheckApi, oAuthLoginApi } from '@src/api/auth/api';
import { setAccessToken, setRefreshToken } from '@src/common/webStorage/storage';
import Spinner from '@src/components/common/spinner/Spinner';
import { GetServerSidePropsContext } from 'next';
import { useCallback, useEffect } from 'react';

function NaverOauthCallbackPage({ code, state }: { code: string; state: string }) {
    const getToken = useCallback(async () => {
        try {
            const { data } = await getNaverUserCheckApi(String(code), String(state));
            const result = await oAuthLoginApi({ snsId: data.id, loginType: 'naver' });
            const infoData = {
                email: data?.email || '',
                gender: data?.gender || '',
                nickname: data?.name || '',
                hp: data?.mobile.replace(/-/g, "")
            };
            if (result.result === 'notFound_user') {
                const postData = {
                    snsId: data?.id,
                    loginType: 'naver',
                    type: 'gotoSignup',
                    infoData,
                };
                window.ReactNativeWebView.postMessage(JSON.stringify(postData));
            }
            if (result.result === 'success') {
                setAccessToken(result.data?.access_token);
                setRefreshToken(result.data?.refresh_token);
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoMain' }));
            }
        } catch (err) {
            // alert(JSON.stringify(err));
            console.log(err);
        }
    }, [code, state]);
    useEffect(() => {
        getToken();
    }, [getToken]);
    return (
        <section>
            <Spinner />
        </section>
    );
}

export default NaverOauthCallbackPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    return {
        props: { code: query.code, state: query.state }, // will be passed to the page component as props
    };
}
