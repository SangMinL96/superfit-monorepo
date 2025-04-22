import ProfileHeader from '@src/components/profile/profileHeader/ProfileHeader';
import ProfileInfo from '@src/components/profile/ProfileInfo/ProfileInfo';
import ProfileNav from '@src/components/profile/ProfileNav/ProfileNav';
import ProfileTicket from '@src/components/profile/ProfileTicket/ProfileTicket';

function ProfileIndex() {
  return (
    <div>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileTicket />
      <ProfileNav />
    </div>
  );
}

export default ProfileIndex;
