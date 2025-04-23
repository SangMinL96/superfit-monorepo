import ProfileHeader from '@src/components/profile/profileHeader/ProfileHeader';
import ProfileInfo from '@src/components/profile/ProfileInfo/ProfileInfo';
import ProfileNav from '@src/components/profile/ProfileNav/ProfileNav';
import ProfileTicket from '@src/components/profile/ProfileTicket/ProfileTicket';
import { motion } from "framer-motion";
function ProfileIndex() {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <ProfileHeader />
      <ProfileInfo />
      <ProfileTicket />
      <ProfileNav />
    </motion.div>
  );
}

export default ProfileIndex;
