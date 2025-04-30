import DaumAdressBottom from '@src/components/bottomSheet/daumAdressBottom/DaumAdressBottom';
import BottomSheet from '@superfit/design/BottomSheet';
import { Button } from '@superfit/design/button';
import MotionWrap from '@superfit/design/MotionWrap';
import OblongInput from '@superfit/design/OblongInput';
import Wrap from '@superfit/design/wrap';
import React, { useState } from 'react';

function Index() {
    const [formData, setFormData] = useState({
        address: '',
    });
    const [open, setOpen] = useState(false);
    const onResult = (e: any) => {
        setFormData(prev => ({ ...prev, address: e }));
        setOpen(false);
    };
    return (
        <>
            <MotionWrap styles={{ marginTop: 10 }}>
                <Wrap padding='0 20px' align='flex-start'>
                    <OblongInput label='센터이름' type='text' />
                    <OblongInput margin='30px 0 0' label='사업자번호' type='text' />
                </Wrap>
                <Wrap padding='0 20px' direction='row' align='flex-end'>
                    <OblongInput fontSize='1.4rem' value={formData.address} margin='20px 0 0' type='text' height='40px' label='주소' />
                    <Button margin='20px 0 0 20px' type='button' width='100px' size={40} onClick={() => setOpen(true)}>
                        주소찾기
                    </Button>
                </Wrap>
                <Wrap padding='0 20px' margin='10px 0 0 ' align='flex-start'>
                    <OblongInput fontSize='1.4rem' type='text' height='40px' placeholder={{ text: '상세주소 입력해주세요.' }} />
                </Wrap>
            </MotionWrap>
            {open && (
                <BottomSheet title='주소 입력' open={open} onClose={() => setOpen(false)}>
                    <DaumAdressBottom onResult={onResult} />
                </BottomSheet>
            )}
        </>
    );
}

export default Index;
