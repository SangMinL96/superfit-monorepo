import React from 'react';
import cx from 'clsx';
import styles from './StaffSelectBottom.module.scss';
import { Button } from '@superfit/design/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import { useClassCreateState } from '@src/hooks/state/useClassCreateState';
import { getStaffItf } from '@superfit/types/staff';
import Icons from '../../../../../../packages/design/src/components/iconCom/Icons';

type Props = {
    onSheetClose: () => void;
    data?: getStaffItf[];
};

function StaffSelectBottom({ onSheetClose, data }: Props) {
    const router = useRouter();
    const nRouter = useNativeRouter();
    const { formData, setFormData } = useClassCreateState();

    const onStaffClick = (id: number) => {
        setFormData({ ...formData, staffId: id });
        onSheetClose();
    };

    if (!router.isReady) return null;
    return (
        <div className={cx(styles.wrap)}>
            <Button margin='5px 0 10px' type='button' width='100%' color='shadow' size={44} onClick={() => nRouter.push('/form/staffcreate')}>
                생성하러가기
            </Button>
            <Swiper
                slidesPerView={4}
                direction={'vertical'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                {data?.map((item: getStaffItf) => {
                    return (
                        <SwiperSlide key={`${item.staffId}`} className={cx(styles.item)}>
                            <button type='button' onClick={() => onStaffClick(item.staffId)}>
                                {item.staffName}
                                {item.staffId === formData.classId && <Icons name='checkFillActive' />}
                            </button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default StaffSelectBottom;
