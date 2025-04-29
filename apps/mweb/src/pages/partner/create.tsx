import Input from '@superfit/design/Input';
import MotionWrap from '@superfit/design/MotionWrap';
import OblongInput from '@superfit/design/OblongInput';
import Wrap from '@superfit/design/wrap';
import React from 'react';

function Index() {
    return (
        <MotionWrap styles={{ marginTop: 10 }}>
            <Wrap padding='0 20px' align='flex-start'>
                <OblongInput label='센터이름' type='text' />
                <OblongInput margin='30px 0 0' label='사업자번호' type='text' />
                <Input height='40px' margin='30px 0 0' label='센터주소' required type='text' readOnly onClick={() => console.log('test')} />
            </Wrap>
        </MotionWrap>
    );
}

export default Index;
