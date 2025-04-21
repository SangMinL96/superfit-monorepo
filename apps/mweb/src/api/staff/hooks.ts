import fetcher from '@src/common/fetcher/fetcher';
import { getStaffItf } from '@superfit/types/staff';
import useSWR from 'swr';

export const useStaffList = () => {
    const { data } = useSWR('/staff/list', url => fetcher<getStaffItf[]>(url));

    return { data };
};
