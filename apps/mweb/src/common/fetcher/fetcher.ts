import { ExecResultItf } from '@superfit/types/fetcher';
import { AxiosRequestConfig } from 'axios';
import myAxios from './myAxios';

async function fetcher<T>(url: string, option?: AxiosRequestConfig): Promise<T | undefined> {
    const response = await myAxios<T>(`${url}`, {
        ...option,
        headers: {
            ...option?.headers,
            'Content-Type': 'application/json',
        },
    });
    const data = response.data as T;
    return data as T;
}

async function execFetcher<T>(url: string, option?: AxiosRequestConfig) {
    const response = await myAxios<T>(`${url}`, {
        ...option,
        headers: {
            ...option?.headers,
            'Content-Type': 'application/json',
        },
    });

    const result = response.data as ExecResultItf;
    const data = result.data as T;
    return { ...result, data };
}

export default fetcher;
export { fetcher, execFetcher };
