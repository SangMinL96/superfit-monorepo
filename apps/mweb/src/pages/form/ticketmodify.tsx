import React from 'react';
import styles from '@src/styles/form/TicketModify.module.scss';
import cx from 'clsx';
import { Button } from '@superfit/design/button';
import Wrap from '@superfit/design/wrap';
import Input from '@superfit/design/Input';
import BottomSheet from '@superfit/design/BottomSheet';
import TimeSelectBottom from '@src/components/bottomSheet/timeSelectBottom/TimeSelectBottom';
function ticketmodify() {
    const onInputClick = () => {
    }
    return (
        <form className={cx(styles.wrap)}>
            <Input
                margin='0 0 30px'
                name='name'
                type='text'
                placeholder={{ text: '수업 선택/직접입력' }}
                label='수업'
                required
                onClick={onInputClick}
            />
            <Input
                margin='0 0 30px'
                name='age'
                type='text'
                placeholder={{ text: '강사 선택/직접입력' }}
                label='강사'
                required
                onClick={onInputClick}
            />
            <Input
                margin='0 0 30px'
                name='age'
                type='text'
                placeholder={{ text: '횟수/기간제 일 경우 999 입력해주세요' }}
                label='횟수'
                required
            />
            <Wrap direction='row' gap='20px' margin='30px 0'>
                <Button disabled type='button' name='m' size={44}>
                    2024-12-09
                </Button>
                <Button type='button' name='g' size={44}>
                    없음
                </Button>
            </Wrap>
            <Button name='btn' type='submit'>
                수정하기
            </Button>
            <BottomSheet title='시/분 선택해주세요' open onClose={() => false}>
                <TimeSelectBottom />
            </BottomSheet>
        </form>
    );
}

export default ticketmodify;
