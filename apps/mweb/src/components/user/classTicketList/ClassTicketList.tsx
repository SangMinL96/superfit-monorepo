import React from 'react';
import styles from './ClassTicketList.module.scss';
import cx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@superfit/design/Card';
import Icons from '@superfit/design/Icons';
import { useRouter } from 'next/router';
function ClassTicketList() {
    const router = useRouter();
    if (!router.isReady) return null;
    return (
        <div className={cx(styles.wrap)}>
            <h5 className={cx(styles.tit)}>수강권</h5>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                <SwiperSlide>
                    <Card>
                        <div className={cx(styles.card_wrap)}>
                            <div className={cx(styles.box)}>
                                <strong className={cx(styles.tit_card)}>1대1 기구 필라테스</strong>
                                <div className={cx(styles.flexBox)}>
                                    <Icons name='information' />
                                    <span className={cx(styles.status_card, styles.close)}>종료임박</span>
                                </div>
                            </div>
                            <div className={cx(styles.info_list)}>
                                <dl className={cx(styles.info)}>
                                    <dt>강사</dt>
                                    <dd>현재법</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>남은횟수</dt>
                                    <dd>1회</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>결제일</dt>
                                    <dd>2024.07.25</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>마감일</dt>
                                    <dd>2025.01.22</dd>
                                </dl>
                            </div>
                        </div>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <div className={cx(styles.card_wrap)}>
                            <div className={cx(styles.box)}>
                                <strong className={cx(styles.tit_card)}>1대1 기구 필라테스</strong>
                                <div className={cx(styles.flexBox)}>
                                    <Icons name='information' />
                                    <span className={cx(styles.status_card, styles.close)}>종료임박</span>
                                </div>
                            </div>
                            <div className={cx(styles.info_list)}>
                                <dl className={cx(styles.info)}>
                                    <dt>강사</dt>
                                    <dd>현재법</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>남은횟수</dt>
                                    <dd>1회</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>결제일</dt>
                                    <dd>2024.07.25</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>마감일</dt>
                                    <dd>2025.01.22</dd>
                                </dl>
                            </div>
                        </div>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <div className={cx(styles.card_wrap)}>
                            <div className={cx(styles.box)}>
                                <strong className={cx(styles.tit_card)}>1대1 기구 필라테스</strong>
                                <div className={cx(styles.flexBox)}>
                                    <Icons name='information' />
                                    <span className={cx(styles.status_card, styles.close)}>종료임박</span>
                                </div>
                            </div>
                            <div className={cx(styles.info_list)}>
                                <dl className={cx(styles.info)}>
                                    <dt>강사</dt>
                                    <dd>현재법</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>남은횟수</dt>
                                    <dd>1회</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>결제일</dt>
                                    <dd>2024.07.25</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>마감일</dt>
                                    <dd>2025.01.22</dd>
                                </dl>
                            </div>
                        </div>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <div className={cx(styles.card_wrap)}>
                            <div className={cx(styles.box)}>
                                <strong className={cx(styles.tit_card)}>1대1 기구 필라테스</strong>
                                <div className={cx(styles.flexBox)}>
                                    <Icons name='information' />
                                    <span className={cx(styles.status_card, styles.close)}>종료임박</span>
                                </div>
                            </div>
                            <div className={cx(styles.info_list)}>
                                <dl className={cx(styles.info)}>
                                    <dt>강사</dt>
                                    <dd>현재법</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>남은횟수</dt>
                                    <dd>1회</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>결제일</dt>
                                    <dd>2024.07.25</dd>
                                </dl>
                                <dl className={cx(styles.info)}>
                                    <dt>마감일</dt>
                                    <dd>2025.01.22</dd>
                                </dl>
                            </div>
                        </div>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ClassTicketList;
