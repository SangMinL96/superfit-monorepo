import GlobalLayout from '@src/layout/GlobalLayout';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'swiper/css';
import Head from 'next/head';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { SWRConfig } from 'swr';
dayjs.locale('ko');
export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const body = document.body;
        // body.style.setProperty('--grey100', 'red');
    }, []);
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width'
                />
            </Head>
            <SWRConfig
                value={{
                    suspense: true,
                }}
            >
                <GlobalLayout>
                    <Component {...pageProps} />
                </GlobalLayout>
            </SWRConfig>
        </>
    );
}
