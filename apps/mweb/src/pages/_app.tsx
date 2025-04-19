import GlobalLayout from '@src/layout/GlobalLayout';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'swiper/css';
import Head from 'next/head';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
dayjs.locale('ko');
export default function App({ Component, pageProps }: AppProps) {
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
        window.routerBack = onRouterBack;
    }, [router]);
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
                <GlobalLayout>
                    <Component {...pageProps} />
                </GlobalLayout>
            </SWRConfig>
        </>
    );
}
