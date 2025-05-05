import { postRefreshValidate } from '@src/api/auth/api';
import { centerCreateApi } from '@src/api/center/api';
import { setAccessToken } from '@src/common/webStorage/storage';
import DaumAdressBottom from '@src/components/bottomSheet/daumAdressBottom/DaumAdressBottom';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import BottomSheet from '@superfit/design/BottomSheet';
import { Button } from '@superfit/design/button';
import MotionWrap from '@superfit/design/MotionWrap';
import OblongInput from '@superfit/design/OblongInput';
import Wrap from '@superfit/design/wrap';
import { CenterCreateItf } from '@superfit/types/center';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';

function Index() {
    const nRouter = useNativeRouter();
    const [formData, setFormData] = useState({
        centerName: '',
        centerBusinessNum: '',
        address: '',
        subAddress: '',
    });
    const [open, setOpen] = useState(false);
    const onResult = (e: any) => {
        setFormData(prev => ({ ...prev, address: e }));
        setOpen(false);
    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const params = {
                centerAddress: `${formData.address}, ${formData.subAddress}`,
                centerName: formData.centerName,
                centerBusinessNum: formData.centerBusinessNum,
            } as CenterCreateItf;
            const { result } = await centerCreateApi(params);
            if (result === 'success') {
                alert('센터 등록 되었습니다.');
                const { result, data } = await postRefreshValidate();
                if (result === 'success') {
                    setAccessToken(data);
                    nRouter.back();
                }
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                const { data } = e.response;
                alert(data.message);
            }
        }
    };
    return (
        <>
            <MotionWrap styles={{ marginTop: 10 }}>
                <form onSubmit={onSubmit}>
                    <Wrap padding='0 20px' align='flex-start'>
                        <OblongInput
                            value={formData.centerName}
                            onChange={e => setFormData(prev => ({ ...prev, centerName: e.target.value }))}
                            label='센터명'
                            type='text'
                            placeholder={{ text: '센터명을 입력해주세요' }}
                        />
                        <OblongInput
                            value={formData.centerBusinessNum}
                            onChange={e => setFormData(prev => ({ ...prev, centerBusinessNum: e.target.value }))}
                            margin='30px 0 0'
                            label='사업자번호'
                            type='text'
                            placeholder={{ text: '사업자번호 입력해주세요' }}
                        />
                    </Wrap>
                    <Wrap padding='0 20px' direction='row' align='flex-end'>
                        <OblongInput
                            fontSize='1.4rem'
                            value={formData.address}
                            readOnly
                            margin='20px 0 0'
                            type='text'
                            height='44px'
                            label='주소'
                            placeholder={{ text: '주소를 입력해주세요' }}
                        />
                        <Button margin='20px 0 0 20px' type='button' width='100px' size={44} onClick={() => setOpen(true)}>
                            주소찾기
                        </Button>
                    </Wrap>
                    <Wrap padding='0 20px' margin='10px 0 0 ' align='flex-start'>
                        <OblongInput
                            fontSize='1.4rem'
                            type='text'
                            height='44px'
                            placeholder={{ text: '상세주소 입력해주세요.' }}
                            value={formData.subAddress}
                            onChange={e => setFormData(prev => ({ ...prev, subAddress: e.target.value }))}
                        />
                    </Wrap>
                    <Wrap margin='40px 0 0' padding='0 20px'>
                        <Button type='submit'>생성하기</Button>
                    </Wrap>
                </form>
            </MotionWrap>
            {open && (
                <BottomSheet position='top' title='주소 입력' open={open} onClose={() => setOpen(false)}>
                    <DaumAdressBottom onResult={onResult} />
                </BottomSheet>
            )}
        </>
    );
}

export default Index;
