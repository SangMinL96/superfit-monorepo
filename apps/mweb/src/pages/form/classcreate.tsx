import ClassCreate from '@src/components/class/classCreate/ClassCreate';
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
            <ClassCreate />
        </motion.div>
    );
}

export default Index;
