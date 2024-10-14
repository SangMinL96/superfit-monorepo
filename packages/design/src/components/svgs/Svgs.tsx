import { useRef } from 'react';
import checkFill from '../../svgs/check_fill.svg';
import checkFillActive from '../../svgs/check_fill_active.svg';
import checkFillDisabled from '../../svgs/check_fill_disabled.svg';
import classMark from '../../svgs/class_mark.svg';
import profileDelete from '../../svgs/profile_delete.svg';
import profileAdd from '../../svgs/profile_add.svg';
import people from '../../svgs/people.svg';
import clipboardClose from '../../svgs/clipboard_close.svg';
import messageEdit from '../../svgs/message_edit.svg';
import avatarGirl from '../../svgs/avatar_girl.svg';
import avatarMan from '../../svgs/avatar_man.svg';
import styles from './Svgs.module.scss';
import cx from 'clsx';
type Props = {
    name:
        | 'checkFillActive'
        | 'checkFillDisabled'
        | 'checkFill'
        | 'classMark'
        | 'profileDelete'
        | 'profileAdd'
        | 'people'
        | 'avatarGirl'
        | 'avatarMan'
        | 'messageEdit'
        | 'clipboardClose';
    cxStyles?: string;
    size?: number;
};

function Svgs({ name, cxStyles, size }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const svg = {
        checkFill,
        checkFillActive,
        checkFillDisabled,
        classMark,
        profileDelete,
        avatarMan,
        avatarGirl,
        profileAdd,
        people,
        messageEdit,
        clipboardClose,
    };
    const targetSvg = svg[name] as any;
    return (
        <span ref={ref} className={`${cx(styles.wrap)} ${cxStyles || ''}`.trim()}>
            <img width={size} src={targetSvg.src} alt={`${name}_icon`} />
        </span>
    );
}

export default Svgs;
