import React from 'react';
import cx from 'clsx';
import styles from './ClassSelectBottom.module.scss';
import { Button } from '@superfit/design/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
function classSelectBottom() {
    const router = useRouter();
    if (!router.isReady) return null;
    return (
        <div className={cx(styles.wrap)}>
            <Button margin='5px 0 10px' name='create' type='button' width='100%' color='shadow' size={40}>
                생성하러가기
            </Button>
            <Swiper
                slidesPerView={4}
                direction={'vertical'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                <SwiperSlide className={cx(styles.item)} onClick={() => console.log('Test')}>
                    그룹 수업(기본유형)
                </SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>1대1 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>그룹 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>그룹 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>1대1 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>그룹 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>그룹 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>1대1 수업(기본유형)</SwiperSlide>
                <SwiperSlide className={cx(styles.item)}>그룹 수업(기본유형)</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default classSelectBottom;
