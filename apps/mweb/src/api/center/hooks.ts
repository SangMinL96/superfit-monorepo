import fetcher from '@src/common/fetcher/fetcher';
import useSWR from 'swr';

export const useCenterEnterCode = () => {
    const { data, isValidating, mutate } = useSWR(`/center/enter/code`, url => fetcher<string>(url));

    return { data, isValidating, mutate };
};
