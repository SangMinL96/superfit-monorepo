import React, { useState } from 'react';
import cx from 'clsx';
import styles from './TimeSelectBottom.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Svgs from '@superfit/design/Svgs';
import { Button } from '@superfit/design/button';
import Wrap from '@superfit/design/wrap';

type Props = {
    value: string;
    onResult: (date: string) => void;
};
function StaffSelectBottom({ value, onResult }: Props) {
    const router = useRouter();
    const [시, set시] = useState(value.split(':')[0] || '');
    const [분, set분] = useState(value.split(':')[1] || '');
    const time = Array.from({ length: 24 - 9 + 1 }, (_, i) => String(i + 9).padStart(2, '0'));
    const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));
    if (!router.isReady) return null;
    return (
        <>
            <div className={cx(styles.wrap)}>
                <div className={cx(styles.box)}>
                    <Swiper slidesPerView={7} direction={'vertical'}>
                        {time.map(item => {
                            return (
                                <SwiperSlide key={`time_${item}`} className={cx(styles.item)}>
                                    <button type='button' onClick={() => set시(item)}>
                                        {item}시{시 === item && <Svgs name='checkFillActive' size={16} />}
                                    </button>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className={cx(styles.box)}>
                    <Swiper slidesPerView={6} direction={'vertical'}>
                        {minutes.map(item => {
                            return (
                                <SwiperSlide key={`minutes_${item}`} className={cx(styles.item)}>
                                    <button type='button' onClick={() => set분(item)}>
                                        {item}분{분 === item && <Svgs name='checkFillActive' size={16} />}
                                    </button>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <Wrap margin='20px 0 0'>
                <Button
                    type='button'
                    onClick={() => {
                        onResult(`${시}:${분}`);
                    }}
                >
                    {`${시}:${분} 선택하기`}
                </Button>
            </Wrap>
        </>
    );
}

export default StaffSelectBottom;
