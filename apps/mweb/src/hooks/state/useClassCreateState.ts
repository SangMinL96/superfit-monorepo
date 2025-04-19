import { create } from 'zustand';

const defaultState = {
    선택날짜: [],
};
export interface ClassCreateStateType {
    선택날짜: string[];
    set선택날짜: (value: string[]) => void;
    resetState: () => void;
}
export const useClassCreateState = create<ClassCreateStateType>(set => ({
    ...defaultState,
    set선택날짜: value => set({ 선택날짜: value }),
    resetState: () => set(defaultState),
}));
