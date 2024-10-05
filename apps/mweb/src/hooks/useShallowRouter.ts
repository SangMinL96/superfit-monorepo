import { useRouter } from 'next/router';

export const useShallowRouter = () => {
  const router = useRouter();
  const push = (query: {}) => router.push({ query: { ...router.query, ...query } }, undefined, { shallow: true });
  const replace = (query: {}) => router.push({ query: { ...router.query, ...query } }, undefined, { shallow: true });
  return { push, replace };
};
