import React from 'react';
import s from './ProfileInfo.module.scss';
import cx from 'clsx';
import Wrap from '@superfit/design/wrap';
import Card from '@superfit/design/Card';
import { Button } from '@superfit/design/button';
import Icons from '../../../../../../packages/design/src/components/iconCom/Icons';
function ProfileInfo() {
    return (
        <Wrap padding='0 20px 20px'>
            <Card>
                <Wrap direction='row'>
                    <div className={cx(s.avartar)}>
                        <Icons name='여자캐릭터' size={70} />
                    </div>
                    <Wrap align='flex-start' margin='0 0 0 15px' gap='5px'>
                        <strong className={cx(s.name)}>김민수</strong>
                        <em className={cx(s.txt)}>hwon3794@gmail.com</em>
                        <em className={cx(s.txt)}>010-3794-3814</em>
                    </Wrap>
                </Wrap>
                <Button type='button' margin='20px 0 0' size={40}>
                    프로필 수정
                </Button>
            </Card>
        </Wrap>
    );
}

export default ProfileInfo;
