import React from 'react';
import styles from '@src/styles/form/TextArea.module.scss';
import cx from 'clsx';
import { Button } from '@superfit/design/button';
function TextArea() {
    return (
        <form className={cx(styles.wrap)}>
            <h3 className={cx(styles.tit)}>회원메모 입력하기</h3>
            <textarea rows={8} className={cx(styles.form_txt)} />
            <Button type='submit' name='save'>
                저장하기
            </Button>
        </form>
    );
}

export default TextArea;
