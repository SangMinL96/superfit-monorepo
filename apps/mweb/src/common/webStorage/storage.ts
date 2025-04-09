import { parseJson } from '@superfit/shared';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

export const getStorage = (key: string) => {
  return global.window ? parseJson(localStorage.getItem(key) as any) : '';
};
export const setStorage = (key: string, value: any) => {
  return global.window && localStorage.setItem(key, JSON.stringify(value));
};

export const setSessionStorage = (key: string, value: any) => {
  return global.window && sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string) => {
  return global.window ? parseJson(sessionStorage.getItem(key) as any) : '';
};

export const setAccessToken = (token?: string) => {
  return setCookie(null, 'access_token', `${token}`, {
    path: '/',
  });
};
export const setRefreshToken = (token?: string) => {
  return setCookie(null, 'refresh_token', `${token}`, {
    path: '/',
  });
};
export const destroyAccessToken = () => {
  destroyCookie(null, 'access_token', { path: '/' });
};
export const getAccessToken = (): string => {
  const cookies = parseCookies();
  return cookies.access_token;
};

export const getRefreshToken = (): string => {
  const cookies = parseCookies();
  return cookies.refresh_token;
};
