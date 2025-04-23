import StaffForm from '@src/components/staff/staffForm/StaffForm';
import { motion } from "framer-motion";
function Index() {
    return (
        <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
        >
            <StaffForm />
        </motion.div>
    );
}

export default Index;
