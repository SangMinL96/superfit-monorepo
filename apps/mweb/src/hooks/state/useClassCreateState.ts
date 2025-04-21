import { create } from 'zustand';

type FormDataType = {
    classId: number;
    staffId: number;
    maxPerson: string;
    startTime: string;
    endTime: string;
};
export interface ClassCreateStateType {
    선택날짜: string[];
    formData: FormDataType;
    set선택날짜: (value: string[]) => void;
    setFormData: (value: FormDataType) => void;
    resetState: () => void;
}
const defaultState = {
    선택날짜: [],
    formData: {
        startTime: '',
        endTime: '',
    } as FormDataType,
};

export const useClassCreateState = create<ClassCreateStateType>(set => ({
    ...defaultState,
    set선택날짜: value => set({ 선택날짜: value }),
    setFormData: value => set({ formData: value }),
    resetState: () => set(defaultState),
}));
