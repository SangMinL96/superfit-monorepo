import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Stepper from '@src/components/signup/stepper/Stepper';
import styles from '@src/styles/signup/Signup.module.scss';
import cx from 'clsx';
import SelectUserType from '@src/components/signup/selectUserType/SelectUserType';
function SignupPage() {
  const router = useRouter();
  const { step = '1' } = router.query;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h3 className={cx(styles.tit)}>회원가입</h3>
      <Stepper />
      {step === '1' && <SelectUserType />}
    </motion.div>
  );
}

export default SignupPage;
