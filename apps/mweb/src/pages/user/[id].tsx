import ClassTicketList from '@src/components/user/classTicketList/ClassTicketList';
import UserEtc from '@src/components/user/userEtc/UserEtc';
import styles from '@src/styles/user/userId.module.scss';
import Divide from '@superfit/design/Divide';
import { Button } from '@superfit/design/button';
import cx from 'clsx';
function userIdPage() {
    return (
        <div>
            <h3 className={cx(styles.tit)}>이상민 회원</h3>
            <p className={cx(styles.user_info)}>가입일: 2024.04.02</p>
            <div className={cx(styles.btn_box)}>
                <Button type='button' name='' size={44}>
                    수업일지보기
                </Button>
            </div>
            <Divide value={10} margin='30px 0' />
            <ClassTicketList />
            <UserEtc />
        </div>
    );
}

export default userIdPage;
