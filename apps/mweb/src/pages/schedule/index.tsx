import dynamic from 'next/dynamic';
import Wrap from '@superfit/design/wrap';
import React, { useState } from 'react';
import styles from '@src/styles/schedule/Schedulepage.module.scss';
import clsx from 'clsx';
import Icons from '../../../../../packages/design/src/components/iconCom/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
const ScheduleCalendar = dynamic(() => import('@src/components/schedule/calendar/ScheduleCalendar'), { ssr: false });
function Index() {
    const [onSwiper, setOnSwiper] = useState<SwiperType>();
    const [swiperIndex, setSwiperIndex] = useState(1);

    return (
        <div className={clsx(styles.wrap)}>
            <Wrap direction='row' gap='6px' padding='0 20px'>
                <button type='button' className={clsx(styles.tab_btn, swiperIndex === 1 ? styles.active : '')} onClick={() => onSwiper?.slideTo(0)}>
                    <Icons size={14} name='이모지_달력' />
                    달력
                </button>
                <button type='button' className={clsx(styles.tab_btn, swiperIndex === 2 ? styles.active : '')} onClick={() => onSwiper?.slideTo(1)}>
                    <Icons size={14} name='이모지_책' />
                    리스트
                </button>
            </Wrap>
            {typeof window !== undefined && (
                <Swiper
                    onSwiper={swiper => setOnSwiper(swiper)}
                    onSlideChangeTransitionEnd={swiper => {
                        if (swiper) {
                            const index = swiper.realIndex + 1;
                            setSwiperIndex(index);
                        }
                    }}
                >
                    <SwiperSlide>
                        <ScheduleCalendar />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ScheduleCalendar />
                    </SwiperSlide>
                </Swiper>
            )}
        </div>
    );
}

export default Index;
