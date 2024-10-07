import GlobalLayout from '@src/layout/GlobalLayout';
import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const body = document.body;
    body.style.setProperty('--grey100', 'red');
  }, []);
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
