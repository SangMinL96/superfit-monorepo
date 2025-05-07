import { UserInfoClientItf } from '@superfit/types/user';
import { create } from 'zustand';

export interface UserInfoStateItf {
    resetState: () => void;
    userInfo: UserInfoClientItf;
    setUserInfo: (value: UserInfoClientItf) => void;
}
const defaultState = {
    userInfo: {} as UserInfoClientItf,
};

export const useUserInfoState = create<UserInfoStateItf>(set => ({
    ...defaultState,
    setUserInfo: (value: UserInfoClientItf) => set({ userInfo: value }),
    resetState: () => set(defaultState),
}));
