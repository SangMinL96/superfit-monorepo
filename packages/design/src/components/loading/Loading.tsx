
import cx from 'clsx'
import styles from './Loading.module.scss'
import pac from './pac_man.gif'

type Props = {
    size?: number;
    inline?: boolean;
}
function Loading({ size = 30, inline }: Props) {
    return (
        <div className={cx(styles.wrap, inline ? styles.inline : '')}>
            <img src={pac.src} alt="팩맨로딩" style={{ width: size }} className={cx(styles.icon)} />
        </div>
    )
}

export default Loading