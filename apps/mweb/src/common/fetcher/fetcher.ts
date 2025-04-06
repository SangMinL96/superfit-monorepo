import { ExecResultItf } from "@superfit/types/fetcher";
import { getAccessToken } from "../webStorage/storage";

async function fetcher<T>(url: string, option?: RequestInit): Promise<T | undefined> {
  const domain =
    process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_API_HOST_DEV}/api/v1`
      : `${process.env.NEXT_PUBLIC_API_HOST_DEV}/api/v1`;
  const token = getAccessToken();
  const res = await fetch(`${domain}${url}`, {
    ...option,
    headers: { ...option?.headers, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error(String('Fetcher Error'));
  }
  const data = await res.json();
  return data as T;
}

async function execFetcher<T>(url: string, option?: RequestInit) {
  const domain =
    process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_API_HOST_DEV}/api/v1`
      : `${process.env.NEXT_PUBLIC_API_HOST_DEV}/api/v1`;
  const token = getAccessToken();
  const res = await fetch(`${domain}${url}`, {
    ...option,
    headers: {
      ...option?.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(String('Fetcher Error'));
  }
  const result = (await res.json()) as ExecResultItf;
  const data = result.data as T;
  return { ...result, data };
}

export default fetcher;
export { fetcher, execFetcher };
