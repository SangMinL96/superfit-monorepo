import fetcher from '@src/common/fetcher/fetcher';
import { getClassItf } from '@superfit/types/class';
import useSWR from 'swr';

export const useClassList = () => {
    const { data } = useSWR('/class/list', url => fetcher<getClassItf[]>(url));

    return { data };
};
