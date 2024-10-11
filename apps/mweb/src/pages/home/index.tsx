import dynamic from 'next/dynamic';
const TodayClass = dynamic(() => import('@src/components/home/_user/todayClass/TodayClass'), { ssr: false });
import 'react-calendar/dist/Calendar.css';
import React from 'react';

function IndexPage() {
  return (
    <div>
      <TodayClass />
    </div>
  );
}

export default IndexPage;
