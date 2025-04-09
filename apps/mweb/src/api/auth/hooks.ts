import fetcher from '@src/common/fetcher/fetcher';
import { setAccessToken } from '@src/common/webStorage/storage';
import useSWR from 'swr';

const useTestToken = () => {
    const isDev = process.env.NODE_ENV !== 'production';
    const { data } = useSWR(isDev && '/auth/testToken', url => fetcher<{ token: string }>(url));
    if (data) {
        setAccessToken(String(data?.token));
    }
};
export { useTestToken };
