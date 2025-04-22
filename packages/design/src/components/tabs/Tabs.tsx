import clsx from 'clsx';
import { motion } from "framer-motion";
import styles from './Tabs.module.scss';

type Props = {
    data: string[];
    value: string;
    onChange: (_tab: string) => void
}

function Tabs({ data, value, onChange }: Props) {
    return (
        <div className={clsx(styles.tabs)}>
            {data.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={clsx(styles.tab_button, { [styles.active]: value === tab })}
                >
                    <strong>
                        {tab}
                    </strong>
                    {value === tab && (
                        <motion.div
                            layoutId={clsx(styles.tab_indicator)}
                            className={clsx(styles.tab_indicator)}
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

export default Tabs