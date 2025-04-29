import React from 'react';
import cx from 'clsx';
import styles from './ClassSelectBottom.module.scss';
import { Button } from '@superfit/design/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import { getClassItf } from '@superfit/types/class';
import { useClassCreateState } from '@src/hooks/state/useClassCreateState';
import Icons from '../../../../../../packages/design/src/components/iconCom/Icons';

type Props = {
    data?: getClassItf[];
    onSheetClose: () => void;
};

function ClassSelectBottom({ onSheetClose, data }: Props) {
    const router = useRouter();
    const nRouter = useNativeRouter();
    const { formData, setFormData } = useClassCreateState();

    const onClassClick = (id: number) => {
        setFormData({ ...formData, classId: id });
        onSheetClose();
    };

    if (!router.isReady) return null;
    return (
        <div className={cx(styles.wrap)}>
            {(data?.length || 0) < 1 && (
                <p className={cx(styles.empty)}>
                    <Icons name='이모지_전구' size={30} cxStyles={cx(styles.icon)} />
                    수업이 존재하지 않아요
                    <br />
                    생성하기 버튼을 눌러 생성해주세요
                </p>
            )}
            <Button
                margin='10px 0'
                name='create'
                type='button'
                width='100%'
                color='shadow'
                size={44}
                onClick={() => nRouter.push('/form/classcreate')}
            >
                생성하러가기
            </Button>
            <Swiper slidesPerView={4} direction={'vertical'}>
                {data?.map((item: getClassItf) => {
                    return (
                        <SwiperSlide key={`${item.classId}`} className={cx(styles.item)}>
                            <button type='button' onClick={() => onClassClick(item.classId)}>
                                {item.className}
                                {item.classId === formData.classId && <Icons name='check_fill_active' />}
                            </button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default ClassSelectBottom;
