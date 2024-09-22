import styles from './AgreeCheck.module.scss';
import cx from 'clsx';
import { CheckBox } from '@superfit/design/CheckBox';
function AgreeCheck() {
  return (
    <div className={cx(styles.wrap)}>
      <CheckBox id='all' size={24} label='전체 동의하기 (필수/선택항목)' labelWeight='700' />
      <ul className={cx(styles.check_list)}>
        <li>
          <div className={cx(styles.header_list)}>
            <CheckBox id='use' size={20} label='이용약관 필수' labelWeight='500' />
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
            <CheckBox id='userinfo' size={20} label='개인정보 수집/이용에 대한 안내(필수)' labelWeight='500' />
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
            <CheckBox id='marketing' size={20} label='마케팅 정보 수신 및 활용 동의' labelWeight='500' />
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
    </div>
  );
}

export default AgreeCheck;
