import { motion } from 'framer-motion';
import React from 'react';

type Props = {
    children: React.ReactNode;
    styleClass?: string;
    styles?: React.CSSProperties;
    key?: string;
};

function MotionWrap({ children, styleClass, styles, key }: Props) {
    return (
        <motion.div
            {...(key && { key })}
            className={styleClass}
            style={{ width: '100%', ...styles }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
        >
            {children}
        </motion.div>
    );
}

export default MotionWrap;
