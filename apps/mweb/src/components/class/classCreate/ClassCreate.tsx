import { postClassCreate } from '@src/api/class/api';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import styles from './ClassCreate.module.scss';
import { Button } from '@superfit/design/button';
import Input from '@superfit/design/Input';
import axios from 'axios';
import cx from 'clsx';
import { FormEvent, useState } from 'react';

function ClassCreate() {
    const router = useNativeRouter();
    const [className, setClassName] = useState('');
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { result } = await postClassCreate({ className });
            if (result === 'success') {
                alert('생성 되었습니다.');
            }
            return router.back();
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                const { data } = e.response;
                alert(data.message);
            }
        }
    };
    return (
        <form className={cx(styles.wrap)} onSubmit={onSubmit}>
            <Input
                onChange={e => setClassName(e.target.value)}
                margin='0 0 30px'
                name='name'
                height='40px'
                type='text'
                placeholder={{ text: '수업이름을 입력해주세요' }}
                label='수업이름'
                required
            />
            <Button type='submit'>생성하기</Button>
        </form>
    );
}

export default ClassCreate;
