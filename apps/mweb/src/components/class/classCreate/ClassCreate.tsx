import React, { useState } from 'react';
import styles from './ClassCreate.module.scss';
import cx from 'clsx';
import { Button } from '@superfit/design/button';
import { getParticle } from '@superfit/shared';
import Input from '@superfit/design/Input';
import BottomSheet from '@superfit/design/BottomSheet';
import TeacherSelectBottom from '@src/components/bottomSheet/teacherSelectBottom/TeacherSelectBottom';
import ClassSelectBottom from '@src/components/bottomSheet/classSelectBottom/ClassSelectBottom';
import TimeSelectBottom from '@src/components/bottomSheet/timeSelectBottom/TimeSelectBottom';
import Wrap from '@superfit/design/wrap';
function ClassCreate() {
    const [sheetType, setSheetType] = useState<"수업" | '강사' | '시작시간' | '종료시간' | null>(null);
    const onInputClick = () => {

    }
    // function getParticle(word) {
    //     if (typeof word !== "string" || word.length === 0) {
    //         throw new Error("단어를 입력하세요.");
    //     }

    //     const lastChar = word[word.length - 1];
    //     const lastCharCode = lastChar.charCodeAt(0);

    //     // 한글 범위 체크 (가 ~ 힣)
    //     if (lastCharCode < 0xAC00 || lastCharCode > 0xD7A3) {
    //         return word + "를"; // 한글이 아니면 기본적으로 '를'을 붙임
    //     }

    //     // 받침 있는지 확인 (한글 유니코드 계산)
    //     const hasFinalConsonant = (lastCharCode - 0xAC00) % 28 !== 0;
    //     return word + (hasFinalConsonant ? "을" : "를");
    // }
    return (
        <form className={cx(styles.wrap)}>
            <Input
                height='50px'
                margin='0 0 30px'
                name='class'
                type='text'
                readOnly
                placeholder={{ text: '수업 선택/직접입력' }}
                label='수업'
                required
                onClick={() => setSheetType("수업")}
            />
            <Input
                margin='0 0 30px'
                height='50px'
                name='teacher'
                type='text'
                placeholder={{ text: '강사 선택/직접입력' }}
                label='강사'
                required
                onClick={() => setSheetType("강사")}
            />
            <Input
                defaultValue={0}
                width='60px'
                height='50px'
                margin='0 0 30px'
                name='person'
                type='number'
                label='최대인원'
                required
                unit="명"
            />
            <Wrap direction='row' margin='0 0 60px' gap='10px'>
                <Input
                    width='100%'
                    name='class'
                    type='text'
                    readOnly
                    placeholder={{ text: '수업 선택/직접입력' }}
                    label='수업'
                    required
                    onClick={() => setSheetType("수업")}
                />
                <Input
                    width='100%'
                    name='class'
                    type='text'
                    readOnly
                    placeholder={{ text: '수업 선택/직접입력' }}
                    label='수업'
                    required
                    defaultValue={"이상민 강사"}
                    onClick={() => setSheetType("수업")}
                />
            </Wrap>
            <Button name='btn' type='submit'>
                수정하기
            </Button>
            <BottomSheet title={`${getParticle(String(sheetType))} 선택해주세요`} open={!!sheetType} onClose={() => setSheetType(null)}>
                {sheetType === '수업' && <ClassSelectBottom />}
                {sheetType === '강사' && <TeacherSelectBottom />}
                {sheetType === '시작시간' && <TimeSelectBottom />}
                {sheetType === '종료시간' && <TimeSelectBottom />}
            </BottomSheet>
        </form>
    )
}

export default ClassCreate