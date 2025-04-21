import ClassSelectBottom from '@src/components/bottomSheet/classSelectBottom/ClassSelectBottom';
import StaffSelectBottom from '@src/components/bottomSheet/staffSelectBottom/StaffSelectBottom';
import TimeSelectBottom from '@src/components/bottomSheet/timeSelectBottom/TimeSelectBottom';
import BottomSheet from '@superfit/design/BottomSheet';
import { Button } from '@superfit/design/button';
import Input from '@superfit/design/Input';
import Wrap from '@superfit/design/wrap';
import { getParticle, timeToMinutes } from '@superfit/shared';
import cx from 'clsx';
import { FormEvent, useState } from 'react';
import styles from './ClassCreate.module.scss';
import { useClassList } from '@src/api/class/hooks';
import { useClassCreateState } from '@src/hooks/state/useClassCreateState';
import { useStaffList } from '@src/api/staff/hooks';
import axios from 'axios';
function ClassCreate() {
    const [sheetType, setSheetType] = useState<'수업' | '강사' | '시작시간' | '종료시간' | null>(null);
    const { formData, setFormData } = useClassCreateState();
    const { data: classList } = useClassList();
    const { data: staffList } = useStaffList();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!formData.classId) return alert('수업을 선택해주세요');
            if (!formData.staffId) return alert('직원을 선택해주세요');
            if (!formData.maxPerson) return alert('최대인원을 선택해주세요');
            if (!formData.startTime) return alert('시작시간을 선택해주세요');
            if (!formData.endTime) return alert('죵료시간을 선택해주세요');
            if (timeToMinutes(formData.startTime) >= timeToMinutes(formData.endTime)) return alert('시작시간보다 종료시간이 같거나 빠릅니다');
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                const { data } = e.response;
                alert(data.message);
            }
        }
    };
    const onSheetClose = () => {
        setSheetType(null);
    };
    return (
        <form className={cx(styles.wrap)} onSubmit={onSubmit}>
            <Input
                height='50px'
                margin='0 0 30px'
                type='text'
                readOnly
                value={classList?.find(f => f.classId === formData.classId)?.className}
                placeholder={{ text: '수업 선택/직접입력' }}
                label='수업'
                required
                onClick={() => setSheetType('수업')}
            />
            <Input
                margin='0 0 30px'
                height='50px'
                type='text'
                value={staffList?.find(f => f.staffId === formData.staffId)?.staffName}
                placeholder={{ text: '강사 선택/직접입력' }}
                label='강사'
                required
                readOnly
                onClick={() => setSheetType('강사')}
            />
            <Input
                width='60px'
                height='50px'
                margin='0 0 30px'
                type='number'
                label='최대인원'
                required
                placeholder={{ text: '0', fontSize: '1.7rem' }}
                unit='명'
                value={formData.maxPerson}
                onChange={e => setFormData({ ...formData, maxPerson: e.target.value })}
            />
            <Wrap direction='row' margin='0 0 60px' gap='10px'>
                <Input
                    width='100%'
                    type='text'
                    readOnly
                    placeholder={{ text: '00:00' }}
                    label='시작시간'
                    required
                    value={formData.startTime}
                    onClick={() => setSheetType('시작시간')}
                />
                <Input
                    width='100%'
                    type='text'
                    readOnly
                    placeholder={{ text: '00:00' }}
                    label='종료시간'
                    required
                    value={formData.endTime}
                    onClick={() => setSheetType('종료시간')}
                />
            </Wrap>
            <Button name='btn' type='submit'>
                수정하기
            </Button>
            {!!sheetType && (
                <BottomSheet title={`${getParticle(String(sheetType))} 선택해주세요`} open={!!sheetType} onClose={() => setSheetType(null)}>
                    {sheetType === '수업' && <ClassSelectBottom onSheetClose={onSheetClose} data={classList} />}
                    {sheetType === '강사' && <StaffSelectBottom onSheetClose={onSheetClose} data={staffList} />}
                    {sheetType === '시작시간' && (
                        <TimeSelectBottom
                            value={formData.startTime}
                            onResult={value => {
                                setSheetType(null);
                                setFormData({ ...formData, startTime: value });
                            }}
                        />
                    )}
                    {sheetType === '종료시간' && (
                        <TimeSelectBottom
                            value={formData.endTime}
                            onResult={value => {
                                setSheetType(null);
                                setFormData({ ...formData, endTime: value });
                            }}
                        />
                    )}
                </BottomSheet>
            )}
        </form>
    );
}

export default ClassCreate;
