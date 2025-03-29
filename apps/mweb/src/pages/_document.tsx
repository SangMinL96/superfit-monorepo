import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='ko'>
            <Head>
                <link
                    href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
                    rel='stylesheet'
                />
                <meta
                    name='viewport'
                    content='user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
                <div id='potal-modal'></div>
            </body>
        </Html>
    );
}
