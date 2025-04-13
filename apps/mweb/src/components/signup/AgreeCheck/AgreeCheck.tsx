import styles from './AgreeCheck.module.scss';
import cx from 'clsx';
import { CheckBox } from '@superfit/design/CheckBox';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
import { useState } from 'react';
import { useShallowRouter } from '@src/hooks/useShallowRouter';
function AgreeCheck() {
    const router = useShallowRouter();
    const [state, setState] = useState({
        1: false,
        2: false,
        3: false,
    });

    return (
        <div className={cx(styles.wrap)}>
            <CheckBox
                id='all'
                size={24}
                label='전체 동의하기 (필수/선택항목)'
                labelWeight='700'
                checked={state[1] && state[2] && state[3]}
                onChange={() => {
                    if (state[1] && state[2] && state[3]) setState({ 1: false, 2: false, 3: false });
                    else setState({ 1: true, 2: true, 3: true });
                }}
            />
            <ul className={cx(styles.check_list)}>
                <li>
                    <div className={cx(styles.header_list)}>
                        <CheckBox
                            id='use'
                            checked={state[1]}
                            size={20}
                            label='이용약관 필수'
                            labelWeight='500'
                            onChange={() => (state[1] ? setState(prev => ({ ...prev, 1: false })) : setState(prev => ({ ...prev, 1: true })))}
                        />
                        <a href='#' className={cx(styles.content_link)}>
                            내용보기
                        </a>
                    </div>
                    <p className={cx(styles.content)}>
                        {` 제1조 (목적)이 약관은 엔카닷컴(주)가 운영하는 엔카 웹사이트 (http://www.encar.com, 이하 "엔카"라 한다)에서
            제공하는 인터넷 관련 서비스 및 기타 부대서비스를 이용함에 있어 엔카닷컴(주)와 이용자의 권리, 의무 및
            책임사항을 규정함을 목적으로 합니다. 제1조 (목적)이 약관은 엔카닷컴(주)가 운영하는 엔카 웹사이트 (http://www.encar.com, 이하 "엔카"라 한다)에서
            제공하는 인터넷 관련 서비스 및 기타 부대서비스를 이용함에 있어 엔카닷컴(주)와 이용자의 권리, 의무 및
            책임사항을 규정함을 목적으로 합니다.`}
                    </p>
                </li>
                <li>
                    <div className={cx(styles.header_list)}>
                        <CheckBox
                            id='userinfo'
                            size={20}
                            checked={state[2]}
                            label='개인정보 수집/이용에 대한 안내(필수)'
                            labelWeight='500'
                            onChange={() => (state[2] ? setState(prev => ({ ...prev, 2: false })) : setState(prev => ({ ...prev, 2: true })))}
                        />
                        <a href='#' className={cx(styles.content_link)}>
                            내용보기
                        </a>
                    </div>
                    <p className={cx(styles.content)}>
                        {` 제1조 (목적)이 약관은 엔카닷컴(주)가 운영하는 엔카 웹사이트 (http://www.encar.com, 이하 "엔카"라 한다)에서
            제공하는 인터넷 관련 서비스 및 기타 부대서비스를 이용함에 있어 엔카닷컴(주)와 이용자의 권리, 의무 및
            책임사항을 규정함을 목적으로 합니다.`}
                    </p>
                </li>
                <li>
                    <div className={cx(styles.header_list)}>
                        <CheckBox
                            id='marketing'
                            size={20}
                            checked={state[3]}
                            label='마케팅 정보 수신 및 활용 동의'
                            labelWeight='500'
                            onChange={() => (state[3] ? setState(prev => ({ ...prev, 3: false })) : setState(prev => ({ ...prev, 3: true })))}
                        />
                        <a href='#' className={cx(styles.content_link)}>
                            내용보기
                        </a>
                    </div>
                    <p className={cx(styles.content)}>
                        {` 제1조 (목적)이 약관은 엔카닷컴(주)가 운영하는 엔카 웹사이트 (http://www.encar.com, 이하 "엔카"라 한다)에서
            제공하는 인터넷 관련 서비스 및 기타 부대서비스를 이용함에 있어 엔카닷컴(주)와 이용자의 권리, 의무 및
            책임사항을 규정함을 목적으로 합니다.`}
                    </p>
                </li>
            </ul>
            <Divide marginOnly value={30} />
            <Button name='btn' type='submit' disabled={!(state[1] && state[2])} onClick={() => router.push({ step: 3 })}>
                다음단계로 이동
            </Button>
            <Divide marginOnly value={30} />
        </div>
    );
}

export default AgreeCheck;
