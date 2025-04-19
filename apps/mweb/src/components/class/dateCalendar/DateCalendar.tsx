import React, { useState } from 'react';
import DetailYearMonthPicker from '@src/components/common/detailYearMonthPicker/DetailYearMonthPicker';
import Calendar, { OnArgs, TileArgs } from 'react-calendar';
import dayjs from 'dayjs';
import calendarStyles from '@src/styles/layout/calendar.module.scss';
import cx from 'clsx';
import { Button } from '@superfit/design/button';
import Wrap from '@superfit/design/wrap';
import BottomSheet from '@superfit/design/BottomSheet';
import styles from './dateCalendar.module.scss';
import { useClassCreateState } from '@src/hooks/state/useClassCreateState';
import { useRouter } from 'next/router';

function DateCalendar() {
    const router = useRouter();
    const [view일정, setView일정] = useState(false);
    const curDate = dayjs(new Date()).format('YYYY-MM-DD');
    const { 선택날짜, set선택날짜 } = useClassCreateState();

    const [value, onChange] = useState<any>(curDate);
    const onViewChange = (e: OnArgs) => {
        onChange(dayjs(e.activeStartDate).format('YYYY-MM-DD'));
    };

    const onClickDay = (date: Date) => {
        if (!dayjs(new Date()).subtract(1, 'day').isBefore(dayjs(date))) {
            if (!confirm('오늘보다 이전 날짜를 선택하시겠습니까?')) {
                return;
            }
        }
        const result = () => {
            if (선택날짜.includes(dayjs(date).format('YYYY-MM-DD'))) {
                return 선택날짜.filter(f => f !== dayjs(date).format('YYYY-MM-DD'));
            }
            return 선택날짜.concat(dayjs(date).format('YYYY-MM-DD'));
        };
        set선택날짜(result());
    };
    const renderTileContent = (e: TileArgs) => {
        if (선택날짜.includes(dayjs(e.date).format('YYYY-MM-DD'))) {
            return <div className={cx('tile_select')}>{checkSvg}</div>;
        }
        return null;
    };

    const groupDatesByMonth = () => {
        return 선택날짜
            .sort((a, b) => {
                return Number(a.replace(/-/gi, '')) - Number(b.replace(/-/gi, ''));
            })
            .reduce(
                (acc, date) => {
                    const monthKey = dayjs(date).format('YYYY-MM') as string; // "YYYY-MM" 형식으로 그룹화
                    if (!acc[monthKey]) {
                        acc[monthKey] = [];
                    }
                    acc[monthKey].push(dayjs(date).format('DD일 ddd요일'));
                    return acc;
                },
                {} as { [key: string]: string[] },
            );
    };

    return (
        <>
            <div className={cx(calendarStyles.fc_calencar)}>
                <DetailYearMonthPicker
                    value={value}
                    onChange={(e: any) => {
                        onViewChange(e);
                        onChange(dayjs(e.activeStartDate).format('YYYY-MM-DD'));
                    }}
                />
                <Calendar
                    onClickDay={onClickDay}
                    activeStartDate={new Date(value)}
                    tileContent={renderTileContent}
                    value={new Date()}
                    formatDay={(locale, date) => dayjs(date).format('D')}
                    minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
                    calendarType='gregory'
                    maxDetail='month'
                    onActiveStartDateChange={onViewChange}
                />
                <Wrap padding='0px 20px' margin='10px 0 0'>
                    <Button
                        type='button'
                        size={40}
                        color='grey'
                        name='date_˝list'
                        onClick={() => {
                            if (선택날짜.length < 1) return alert('선택한 날짜가 없습니다.');
                            setView일정(true);
                        }}
                    >
                        선택한 일정 모아보기
                    </Button>
                </Wrap>
                <Wrap padding='0px 20px' margin='10px 0 0'>
                    <Button
                        type='button'
                        disabled={선택날짜.length === 0}
                        onClick={() => router.push({ query: { step: 2 } }, undefined, { shallow: true })}
                    >
                        {선택날짜.length === 0 ? '날짜 선택해주세요' : '다음'}
                    </Button>
                </Wrap>
            </div>
            {view일정 && (
                <BottomSheet onClose={() => setView일정(false)} open={view일정} title='선택한 일정'>
                    <div className={cx(styles.date_wrap)}>
                        {Object.entries(groupDatesByMonth()).map(([month, days]) => {
                            return (
                                <div key={month} className={cx(styles.month_group)}>
                                    <strong className={cx(styles.tit_month)}>{month}월</strong>
                                    <ul className={cx(styles.day_box)}>
                                        {days
                                            .sort((a, b) => {
                                                return Number(a.split('일')[0]) - Number(b.split('일')[0]);
                                            })
                                            .map(item => {
                                                return (
                                                    <span key={item} className={cx(styles.day)}>
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </BottomSheet>
            )}
        </>
    );
}

export default DateCalendar;

const checkSvg = (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M8.00943 1.33261C4.32744 1.33261 1.34277 4.31727 1.34277 7.99927C1.34277 11.6813 4.32744 14.6659 8.00943 14.6659C11.3961 14.6659 14.2388 12.1273 14.6348 8.79126C14.6774 8.42526 14.4168 8.08461 14.0508 8.04061C13.6854 7.99794 13.3441 8.25859 13.3014 8.62459C12.9848 11.2913 10.7188 13.3326 8.00943 13.3326C5.0641 13.3326 2.67611 10.9446 2.67611 7.99927C2.67611 5.05394 5.0641 2.66594 8.00943 2.66594C8.62477 2.66594 9.2341 2.77727 9.80143 2.9786C10.1481 3.10127 10.5114 2.9086 10.6348 2.56194C10.7574 2.21461 10.5854 1.83062 10.2388 1.70729C9.52943 1.45595 8.77677 1.33261 8.00943 1.33261ZM14.0094 2.66594C13.8388 2.66594 13.6601 2.72595 13.5301 2.85328L7.71743 8.5826C7.5461 8.75127 7.37343 8.7186 7.23876 8.51994L6.5721 7.54061C6.3681 7.23994 5.9401 7.15261 5.63477 7.35327C5.32877 7.55394 5.24277 7.96927 5.44677 8.26994L6.11344 9.24927C6.71411 10.1353 7.88943 10.2526 8.65543 9.49927L14.4888 3.79127C14.7488 3.53527 14.7488 3.10928 14.4888 2.85328C14.3588 2.72528 14.1801 2.66594 14.0094 2.66594Z'
            fill='#0028ef'
        />
    </svg>
);
