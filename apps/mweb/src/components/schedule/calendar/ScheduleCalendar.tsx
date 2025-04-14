import React, { useState } from 'react';
import DetailYearMonthPicker from '@src/components/common/detailYearMonthPicker/DetailYearMonthPicker';
import Calendar, { OnArgs, TileArgs } from 'react-calendar';
import dayjs from 'dayjs';
import calendarStyles from '@src/styles/layout/calendar.module.scss';
import cx from 'clsx';
import styles from './ScheduleCalendar.module.scss';

const randomColor = [
  '#FF6B6B',
  '#FFA94D',
  '#FFD43B',
  '#51CF66',
  '#38D9A9',
  '#4DABF7',
  '#748FFC',
  '#DA77F2',
  '#F783AC',
  '#868E96',
]
function ScheduleCalendar() {
  const [수업강사컬러, set수업강사컬러] = useState({
    이상민강사: randomColor[3],
    이다슬강사: randomColor[6],
    이상민강사1: randomColor[3],
    이다슬강사2: randomColor[6],
    이상민강사3: randomColor[3],
    이다슬강사4: randomColor[6],
    이상민강사5: randomColor[3],
    이다슬강사6: randomColor[6],
    이상민강사7: randomColor[3],
    이다슬강사8: randomColor[6],
  })
  const curDate = dayjs(new Date()).format('YYYY-MM-DD');
  const [선택날짜, set선택날짜] = useState<string>(curDate);
  const [viewValue, onViewValue] = useState<any>(curDate);
  const onViewChange = (e: OnArgs) => {
    onViewValue(dayjs(e.activeStartDate).format('YYYY-MM-DD'));
  };
  const onClickDay = (date: Date) => {
    set선택날짜(dayjs(date).format("YYYY-MM-DD"));
  };
  const renderTileContent = (e: TileArgs) => {
    return (
      <>
        <div className={cx(styles.tile_select)}>
          {Object.entries(수업강사컬러).map(([_, value]) => {
            return <span className={cx(styles.oblong_color)} style={{ backgroundColor: value }} />
          })}
        </div>
      </>
    );
  };

  return (
    <div className={cx(styles.wrap)}>
      <div className={cx(calendarStyles.fc_calencar)}>
        <DetailYearMonthPicker value={viewValue} onChange={(e: any) => {
          onViewValue(dayjs(e.activeStartDate).format('YYYY-MM-DD'));
        }} />
        <Calendar
          onClickDay={onClickDay}
          activeStartDate={new Date(viewValue)}
          tileContent={renderTileContent}
          value={new Date(선택날짜)}
          formatDay={(locale, date) => dayjs(date).format('D')}
          minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
          calendarType='gregory'
          maxDetail='month'
          onActiveStartDateChange={onViewChange}
        />
      </div>
      <div className={cx(styles.list_wrap)}>
        <ul className={cx(styles.list)}>
          <li>
            <button type='button' className={cx(styles.list_btn)} >
              <span className={cx(styles.list_color)} style={{ backgroundColor: 수업강사컬러['이상민강사'] }} />
              <span>
                <em className={cx(styles.tit)}>그룹수업<span>(이상민강사)</span></em>
                <em className={cx(styles.time)}>10:00 ~ 11:00</em>
              </span>
              <span className={cx(styles.count)}>
                <em>6</em> / 30
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ScheduleCalendar;