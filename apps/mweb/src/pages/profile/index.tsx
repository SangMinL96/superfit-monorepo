import ProfileHeader from '@src/components/profile/profileHeader/ProfileHeader';
import ProfileInfo from '@src/components/profile/ProfileInfo/ProfileInfo';
import ProfilePartnerNav from '@src/components/profile/ProfilePartnerNav/ProfilePartnerNav';
import ProfileUserNav from '@src/components/profile/ProfileUserNav/ProfileUserNav';
import ProfileTicket from '@src/components/profile/ProfileTicket/ProfileTicket';
import { useUserInfoState } from '@src/hooks/state/useUserInfoState';
import MotionWrap from '@superfit/design/MotionWrap';

function ProfileIndex() {
    const { userInfo } = useUserInfoState();
    console.log(userInfo);
    return (
        <MotionWrap>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileTicket />
            {userInfo.isPartner ? <ProfilePartnerNav /> : <ProfileUserNav />}
        </MotionWrap>
    );
}

export default ProfileIndex;
