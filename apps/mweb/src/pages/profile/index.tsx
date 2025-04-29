import ProfileHeader from '@src/components/profile/profileHeader/ProfileHeader';
import ProfileInfo from '@src/components/profile/ProfileInfo/ProfileInfo';
import ProfileNav from '@src/components/profile/ProfileNav/ProfileNav';
import ProfileTicket from '@src/components/profile/ProfileTicket/ProfileTicket';
import MotionWrap from '@superfit/design/MotionWrap';
function ProfileIndex() {
    return (
        <MotionWrap>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileTicket />
            <ProfileNav />
        </MotionWrap>
    );
}

export default ProfileIndex;
