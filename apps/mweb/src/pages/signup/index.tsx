import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Stepper from '@src/components/signup/stepper/Stepper';
import SelectUserType from '@src/components/signup/selectUserType/SelectUserType';
import AgreeCheck from '@src/components/signup/AgreeCheck/AgreeCheck';
import SignupForm from '@src/components/signup/signupForm/SignupForm';

function SignupPage() {
  const router = useRouter();
  const { step = '1' } = router.query;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Stepper />
      {step === '1' && <SelectUserType />}
      {step === '2' && <AgreeCheck />}
      {step === '3' && <SignupForm />}
    </motion.div>
  );
}

export default SignupPage;
