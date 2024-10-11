import React, { useState } from 'react';
import styles from './TodayClass.module.scss';
import cx from 'clsx';
import DetailYearMonthPicker from '@src/components/common/detailYearMonthPicker/DetailYearMonthPicker';
import Calendar from 'react-calendar';
import calendarStyles from '@src/styles/layout/calendar.module.scss';
import dayjs from 'dayjs';
function TodayClass() {
  const curDate = dayjs(new Date()).format('YYYY-MM-DD');
  const [value, onChange] = useState<any>(curDate);
  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(styles.calendar_wrap, calendarStyles.fc_calencar)}>
        <DetailYearMonthPicker />
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
  );
}

export default TodayClass;
