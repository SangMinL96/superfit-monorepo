import styles from '@src/styles/class/journal.module.scss';
import { Button } from '@superfit/design/button';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
function Index() {
    const [isOpen, setIsOpen] = useState<string[]>([]);

    const onClick = (index: string) => {
        setIsOpen((prev) => {
            if (prev.find(f => f === index)) {
                return prev.filter(f => f !== index);
            }
            return prev.concat(index);
        });
    };
    const maps = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className={cx(styles.wrap)}>
            <h3 className={cx(styles.tit)}>수업일지</h3>
            <Button margin='20px 0 0' type='button' name='white' color='light' size={40}>작성하기</Button>
            <ul className={cx(styles.list)}>
                {maps.map((item, index) => {
                    const key = `item_${item}_${index}`;
                    return (
                        <motion.li key={key} animate={isOpen.includes(`${index}`) ? "open" : "closed"}>
                            <motion.button type='button' className={cx(styles.accordion_btn)} onClick={() => onClick(`${index}`)}
                                variants={{
                                    open: {
                                        borderBottom: '1px solid #eee',
                                        paddingBottom: '15px',
                                        marginBottom: '10px'
                                    },
                                    closed: { borderBottom: 'none', marginBottom: '0px' }
                                }}
                            >
                                2024.12.24 1:1 수업
                            </motion.button>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                variants={{
                                    open: {
                                        opacity: 1,
                                        height: 'auto',
                                    },
                                    closed: { opacity: 0, height: 0, padding: 0, margin: 0 }
                                }}
                                className={cx(styles.content)}>
                                평소처럼 진행함
                            </motion.p>
                        </motion.li>);
                })}
            </ul>
        </div >
    );
}

export default Index;
