import fetcher from '@common/fetcher/fetcher';
import { UserInfoItf } from '@eight-workspace/shared';
import useSWR from 'swr';

const useUserInfo = () => {
  const { data, isValidating, mutate } = useSWR(`/user/info`, url => fetcher<UserInfoItf>(url));

  return { data, isValidating, mutate };
};
export { useUserInfo };
