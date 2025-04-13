import fetcher from '@src/common/fetcher/fetcher';
import { UserInfoItf } from '@superfit/types/user';
import useSWR from 'swr';

const useUserInfo = () => {
    const { data, isValidating, mutate } = useSWR(`/user/info`, url => fetcher<UserInfoItf>(url));

    return { data, isValidating, mutate };
};
export { useUserInfo };
