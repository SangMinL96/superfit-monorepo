import React from 'react';
import styles from '@src/styles/form/TextArea.module.scss';
import cx from 'clsx';
import { Button } from '@superfit/design/button';
import { useRouter } from 'next/router';
function TextArea() {
    const router = useRouter()
    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        router.back();
    }
    return (
        <form className={cx(styles.wrap)} onSubmit={onSubmit}>
            <h3 className={cx(styles.tit)}>회원메모 입력하기</h3>
            <textarea rows={8} className={cx(styles.form_txt)} />
            <Button type='submit' name='save' >
                저장하기
            </Button>
        </form>
    );
}

export default TextArea;
