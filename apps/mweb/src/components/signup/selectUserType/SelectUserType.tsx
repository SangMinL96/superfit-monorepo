import Card from '@superfit/design/Card';
import styles from './SelectUserType.module.scss';
import cx from 'clsx';
function SelectUserType() {
  return (
    <div className={cx(styles.wrap)}>
      <h5 className={cx(styles.tit)}>회원유형</h5>
      <p className={cx(styles.desc)}>일반 회원은 간편한 SNS계정 회원가입을 권장해요</p>
      <div className={cx(styles.card_box)}>
        <Card>
          <strong className={cx(styles.tit_card)}>일반회원</strong>
          <p className={cx(styles.desc_card)}>간단하게 회원가입하고 초대코드를 받아 입장하세요!</p>
        </Card>
        <Card>
          <strong className={cx(styles.tit_card)}>제휴회원</strong>
          <p className={cx(styles.desc_card)}>
            회원가입하고 회원을 빠르게 모아
            <br />
            회원관리 * 수업관리 * 스케줄등 쉽게 관리하세요!
          </p>
        </Card>
      </div>
    </div>
  );
}

export default SelectUserType;
