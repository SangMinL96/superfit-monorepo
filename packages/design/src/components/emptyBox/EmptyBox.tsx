import cx from 'clsx';
import styles from './EmptyBox.module.scss';
type Props = {
    children: React.ReactNode;
}
function EmptyBox({ children }: Props) {
    return (
        <p className={cx(styles.wrap)}>
            <span className={cx(styles.icon)}>
                {emptySvg}
            </span>
            {children}
        </p>
    )
}

export default EmptyBox

const emptySvg = <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="30" width="100" height="60" rx="8" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2" />
    <line x1="30" y1="50" x2="90" y2="50" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" />
    <line x1="30" y1="65" x2="70" y2="65" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" />
    <circle cx="60" cy="100" r="10" fill="#3B82F6" />
    <line x1="60" y1="95" x2="60" y2="105" stroke="white" stroke-width="2" stroke-linecap="round" />
    <line x1="55" y1="100" x2="65" y2="100" stroke="white" stroke-width="2" stroke-linecap="round" />
</svg>
