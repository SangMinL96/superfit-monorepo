import React from 'react';
import styles from './PartnerCheck.module.scss';
import cx from 'clsx';
import Card from '@superfit/design/Card';
import Wrap from '@superfit/design/wrap';
import { postTempCenter } from '@src/api/user/api';
import { postRefreshValidate } from '@src/api/auth/api';
import { setAccessToken } from '@src/common/webStorage/storage';
import { useRouter } from 'next/router';
function PartnerCheck() {
    const router = useRouter();
    const tempCenterClick = async () => {
        try {
            const { result: tempResult } = await postTempCenter();
            if (tempResult === 'success') {
                const { result, data } = await postRefreshValidate();
                if (result === 'success') {
                    setAccessToken(data);
                    router.reload();
                }
            }
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className={cx(styles.wrap)}>
            <Card padding='30px 30px 0' title='중요! 센터등록'>
                <p className={cx(styles.txt)} style={{ marginTop: 20 }}>
                    - 센터 등록이 되어있지 않아요
                </p>
                <p className={cx(styles.txt)}>- 임시센터로 여러기능을 살펴 볼 수 있어요</p>
                <p className={cx(styles.txt)}>- 슈퍼핏이 센터관리에 적합하면 센터 정보를 등록해주세요!</p>
                <Wrap margin='50px 0 0' direction='row' justify='space-between'>
                    <button type='button' className={cx(styles.btn)}>
                        센터등록
                    </button>
                    <button type='button' className={cx(styles.btn)} onClick={tempCenterClick}>
                        임시센터사용
                    </button>
                </Wrap>
            </Card>
        </div>
    );
}

export default PartnerCheck;
