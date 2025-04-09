import fetcher from '@common/fetcher/fetcher';
import { CenterItf, UserInfoItf } from '@eight-workspace/shared';
import useSWR from 'swr';

const useUserCenterList = () => {
  const { data, isValidating, mutate } = useSWR(`/center/userCenterList`, url =>
    fetcher<any[]>(url),
  );

  return { data, isValidating, mutate };
};

const useCenterUserList = () => {
  const { data, isValidating, mutate } = useSWR(`/center/userList`, url =>
    fetcher<UserInfoItf[]>(url),
  );

  return { data, isValidating, mutate };
};

const useCenterList = () => {
  const { data, isValidating, mutate } = useSWR(`/center/centerList`, url =>
    fetcher<CenterItf[]>(url),
  );
  return { data, isValidating, mutate };
};

const useCenterApplyList = () => {
  const { data, isValidating, mutate } = useSWR(`/center/applyList`, url =>
    fetcher<UserInfoItf[]>(url),
  );
  return { data, isValidating, mutate };
};

export { useUserCenterList, useCenterList, useCenterApplyList, useCenterUserList };
