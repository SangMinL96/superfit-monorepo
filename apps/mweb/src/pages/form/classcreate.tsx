import TeacherSelectBottom from '@src/components/bottomSheet/teacherSelectBottom/TeacherSelectBottom';
import styles from '@src/styles/form/ClassCreate.module.scss';
import BottomSheet from '@superfit/design/BottomSheet';
import { Button } from '@superfit/design/button';
import Input from '@superfit/design/Input';
import { getParticle } from '@superfit/shared';
import cx from 'clsx';
import { useState } from 'react';

function ClassCreate() {
    const [sheetType, setSheetType] = useState<'강사' | null>(null);

    return (
        <form className={cx(styles.wrap)}>
            <Input
                margin='0 0 30px'
                name='name'
                height='40px'
                type='text'
                placeholder={{ text: '수업이름을 입력해주세요' }}
                label='수업이름'
                required
            />
            <Input
                height='40px'
                margin='0 0 30px'
                name='age'
                type='text'
                placeholder={{ text: '강사 선택/직접입력' }}
                label='강사'
                required
                onClick={() => setSheetType('강사')}
            />
            <Button type='submit'>생성하기</Button>
            <BottomSheet
                title={`${getParticle(String(sheetType))} 선택해주세요`}
                open={!!sheetType}
                onClose={() => setSheetType(null)}
            >
                {sheetType === '강사' && <TeacherSelectBottom />}
            </BottomSheet>
        </form>
    );
}

export default ClassCreate;
