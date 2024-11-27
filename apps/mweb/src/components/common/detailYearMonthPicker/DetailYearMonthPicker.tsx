import React from 'react';
import styles from './DetailYearMonthPicker.module.scss';
import cx from 'clsx';
import { ko } from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ReactDatePicker = DatePicker as any;

function DetailYearMonthPicker({ value = dayjs(new Date()).format('YYYY-MM-DD'), onChange }: any) {
    const onDateArrowClick = (type: any) => {
        if (type === 'prev') {
            const newDate = dayjs(value).subtract(1, 'months').toDate();
            onChange({ activeStartDate: newDate });
        }
        if (type === 'next') {
            const newDate = dayjs(value).add(1, 'months').toDate();
            onChange({ activeStartDate: newDate });
        }
    };
    return (
        <div className={cx(styles.wrap)}>
            <div onClick={() => onDateArrowClick('prev')} className={cx(styles.prev_icon)}>
                {prevIcon}
            </div>
            <ReactDatePicker
                locale={ko}
                disabledKeyboardNavigation
                placeholderText=''
                selected={value}
                onChange={(date: any) => onChange({ activeStartDate: date })}
                dateFormat='yyyy년 MM월'
                minDate={new Date()}
                showMonthYearPicker
                onFocus={(e: any) => {
                    e.target.readOnly = true;
                    e.currentTarget.readOnly = true;
                    e.currentTarget.blur();
                }}
            />
            <div onClick={() => onDateArrowClick('next')} className={cx(styles.next_icon)}>
                {nextIcon}
            </div>
        </div>
    );
}

export default DetailYearMonthPicker;

const nextIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='8.414' height='14.828' viewBox='0 0 8.414 14.828'>
        <path
            id='chevron-right'
            d='M9,18l6-6L9,6'
            transform='translate(-7.586 -4.586)'
            fill='none'
            stroke='#ddd'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
        />
    </svg>
);

const prevIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' width='8.414' height='14.828' viewBox='0 0 8.414 14.828'>
        <path
            id='chevron-left'
            d='M15,18,9,12l6-6'
            transform='translate(-8 -4.586)'
            fill='none'
            stroke='#ddd'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
        />
    </svg>
);
