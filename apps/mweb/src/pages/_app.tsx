import GlobalLayout from '@src/layout/GlobalLayout';
import '@src/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { useEffect } from 'react';
import 'swiper/css';
import Head from 'next/head';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { parseJwt } from '@src/common/webStorage/storage';
import nookies from 'nookies';
import { UserInfoItf } from '@superfit/types/user';
import PartnerCheck from '@src/components/common/partnerCheck/PartnerCheck';
import { useUserInfoState } from '@src/hooks/state/useUserInfoState';
dayjs.locale('ko');

type Props = {
    userInfo?: UserInfoItf;
};
export default function App({ Component, pageProps }: AppProps) {
    const { userInfo } = pageProps as Props;
    const { setUserInfo } = useUserInfoState();
    const router = useRouter();
    useEffect(() => {
        const onRouterBack = (url: string) => {
            if (typeof window !== 'undefined' && window.ReactNativeWebView) {
                if (url !== router.asPath) {
                    return router.back();
                } else {
                    return window.ReactNativeWebView.postMessage('stackBack');
                }
            }
        };
        const isPartner = ['business', 'staff'].includes(userInfo?.login_type || '');
        setUserInfo({ ...userInfo, isPartner } as UserInfoItf);
        window.routerBack = onRouterBack;
    }, [router, setUserInfo, userInfo]);

    return (
        <>
            <Head>
                <meta name='viewport' content='user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width' />
                <style>
                    {`
                    html.noscroll,
                    body.noscroll {
                        position: fixed;
                        overflow: hidden;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        touch-action: none;
                    }
                    `}
                </style>
            </Head>
            <SWRConfig>
                {false && userInfo?.login_type === 'business' && !userInfo?.center_id && <PartnerCheck />}
                <GlobalLayout>
                    <Component {...pageProps} />
                </GlobalLayout>
            </SWRConfig>
        </>
    );
}

App.getInitialProps = async (appContext: AppContext) => {
    const { ctx } = appContext;
    const cookies = nookies.get(ctx);
    const token = cookies.access_token;
    console.log(parseJwt(token));
    return {
        pageProps: {
            userInfo: token && token.length > 10 ? (parseJwt(token) as UserInfoItf) : ({} as UserInfoItf),
        },
    };
};
