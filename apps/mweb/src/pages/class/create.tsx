import React, { useState } from 'react';
import DetailYearMonthPicker from '@src/components/common/detailYearMonthPicker/DetailYearMonthPicker';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { useClientSideCheck } from '@src/hooks/useClientSideCheck';
import calendarStyles from '@src/styles/layout/calendar.module.scss';
import cx from 'clsx'

function Index() {
    const isClient = useClientSideCheck()
    const curDate = dayjs(new Date()).format('YYYY-MM-DD');
    const [value, onChange] = useState<any>(curDate);
    if (!isClient) return null;
    return (
        <div>
            <div className={cx(calendarStyles.fc_calencar)}>
                <DetailYearMonthPicker onChange={(e: any) => console.log(e)} />
                <Calendar
                    value={new Date(value)}
                    formatDay={(locale, date) => dayjs(date).format('D')}
                    minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
                    calendarType='gregory'
                    maxDetail='month'
                //   onActiveStartDateChange={onViewChange}
                />
            </div>
        </div>
    )
}

export default Index