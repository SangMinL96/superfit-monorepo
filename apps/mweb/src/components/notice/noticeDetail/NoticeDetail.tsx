import React from 'react';
import Card from '@superfit/design/Card';
import Wrap from '@superfit/design/wrap';
import styles from './NoticeDetail.module.scss';
import cx from 'clsx';
import Icons from '@superfit/design/Icons';
function NoticeDetail() {
    return (
        <Wrap margin='10px 0 0' padding='0 20px'>
            <Card title='안녕하세요 여러분안녕하세요 여러분안녕하세요 여러분안녕하세요 여러분안녕하세요 여러분안녕하세요 여러분'>
                <Wrap margin='15px 0 0' direction='row' justify='flex-start'>
                    <em className={cx(styles.etc_txt)}>
                        <Icons name='이모지_달력' size={14} />
                        2024.05.02
                    </em>
                    <em className={cx(styles.etc_txt)}>
                        <Icons name='지구본' size={14} /> 조회수 125
                    </em>
                </Wrap>
            </Card>
        </Wrap>
    );
}

export default NoticeDetail;
