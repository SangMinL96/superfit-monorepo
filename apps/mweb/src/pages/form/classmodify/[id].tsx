import StaffSelectBottom from '@src/components/bottomSheet/staffSelectBottom/StaffSelectBottom';
import styles from '@src/styles/form/ClassModify.module.scss';
import BottomSheet from '@superfit/design/BottomSheet';
import { Button } from '@superfit/design/button';
import Input from '@superfit/design/Input';
import { getParticle } from '@superfit/shared';
import cx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Index() {
    const router = useRouter();
    const { id } = router.query;
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
            <Button type='submit'>수정하기</Button>
            <BottomSheet title={`${getParticle(String(sheetType))} 선택해주세요`} open={!!sheetType} onClose={() => setSheetType(null)}>
                {sheetType === '강사' && <StaffSelectBottom />}
            </BottomSheet>
        </form>
    );
}

export default Index;
