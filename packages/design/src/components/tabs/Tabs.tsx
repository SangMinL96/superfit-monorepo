import clsx from 'clsx';
import { motion } from "framer-motion";
import styles from './Tabs.module.scss';
type SimpleTab = string;
type ComplexTab = { value: string; name: string | React.ReactNode };
type TabsType = SimpleTab[] | ComplexTab[];
type Props = {
    data: TabsType;
    value: string;
    onChange: (_tab: string) => void
    layoutId: string;
}

function Tabs({ data, value, onChange, layoutId }: Props) {

    return (
        <div className={clsx(styles.tabs)}>
            {data.map((tab) => {
                let tabValue: string;
                let name: string | React.ReactNode;
                if (typeof tab === 'string') {
                    tabValue = tab;
                } else {
                    const testTab = tab as ComplexTab;
                    tabValue = testTab.value;
                    name = testTab.name;
                }
                return (
                    <button
                        key={tabValue}
                        onClick={() => onChange(tabValue)}
                        className={clsx(styles.tab_button, { [styles.active]: value === tabValue })}
                    >
                        <strong>
                            {name || tabValue}
                        </strong>
                        {value === tabValue && (
                            <motion.div
                                layoutId={layoutId}
                                className={clsx(styles.tab_indicator)}
                            />
                        )}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs