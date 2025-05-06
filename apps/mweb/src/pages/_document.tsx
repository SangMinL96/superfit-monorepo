import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    if (process.env.NODE_ENV === 'development') {
        const originalError = console.error;
        console.error = (...args) => {
            if (typeof args[0] === 'string' && args[0].includes('Warning: Text content did not match')) {
                return;
            }
            originalError(...args);
        };
    }
    return (
        <Html lang='ko'>
            <Head>
                <link href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css' rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
                <div id='potal-modal'></div>
            </body>
        </Html>
    );
}
