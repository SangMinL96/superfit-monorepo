import React from 'react';
import cx from 'clsx'
import styles from './TimeSelectBottom.module.scss';
import { Button } from '@superfit/design/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Svgs from '@superfit/design/Svgs';
function TeacherSelectBottom() {
     const router = useRouter()
     const time = Array.from({ length: 24 - 9 + 1 }, (_, i) => String(i + 9).padStart(2, '0'));
     const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));
     if (!router.isReady) return null
     return (
          <div className={cx(styles.wrap)}>

               <div className={cx(styles.box)}>
                    <Swiper
                         slidesPerView={6}
                         direction={'vertical'}
                         onSlideChange={() => console.log('slide change')}
                         onSwiper={swiper => console.log(swiper)}
                    >
                         {time.map(item => {
                              return <SwiperSlide key={`time_${item}`} className={cx(styles.item)} onClick={() => console.log("Test")}>
                                   {item}시
                                   {true && <Svgs name='circleCheck' size={13} />}
                              </SwiperSlide>
                         })}
                    </Swiper>
               </div>
               <div className={cx(styles.box)}>
                    <Swiper
                         slidesPerView={6}
                         direction={'vertical'}
                         onSlideChange={() => console.log('slide change')}
                         onSwiper={swiper => console.log(swiper)}
                    >
                         {minutes.map(item => {
                              return <SwiperSlide key={`minutes_${item}`} className={cx(styles.item)} onClick={() => console.log("Test")}>{item}분</SwiperSlide>
                         })}
                    </Swiper>
               </div>
          </div>
     )
}

export default TeacherSelectBottom;