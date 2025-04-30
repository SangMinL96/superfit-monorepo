import cx from 'clsx';
import { useEffect, useRef } from 'react';
import styles from './TextArea.module.scss';
type Props = {
    value?: string | number;
    onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    defaultValue?: string | number;
    readOnly?: boolean;
    placeholder?: {
        text: string;
        fontSize?: string;
        fontWeight?: string;
        color?: string;
    };
    disabled?: boolean;
    name?: string;
    maxLength?: number;
    minLength?: number;
    width?: string;
    height?: string;
    fontSize?: string;
    margin?: string;
    padding?: string;
    rows?: number;
    wrapStyle?: React.CSSProperties;
    textareaStyle?: React.CSSProperties;
};
function TextArea({
    value,
    placeholder,
    disabled = false,
    name,
    maxLength,
    minLength,
    defaultValue,
    onClick,
    onChange,
    readOnly = false,
    wrapStyle,
    textareaStyle,
    rows = 5,
}: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const inlineStyle = {
        '--placeholder-color': placeholder?.color || '#B7B7B7',
        '--placeholder-fontSize': placeholder?.fontSize || '1.4rem',
        '--placeholder-fontWeight': placeholder?.fontWeight || '400',
    };

    useEffect(() => {
        if (textAreaRef.current) {
            Object.entries(inlineStyle).forEach(([key, value]) => {
                value && textAreaRef.current && textAreaRef.current.style.setProperty(key, value || '');
            });
        }
    }, [inlineStyle]);

    return (
        <div ref={wrapRef} className={cx(styles.textarea_wrap)} style={wrapStyle}>
            <textarea
                value={value}
                ref={textAreaRef}
                style={textareaStyle}
                defaultValue={defaultValue}
                className={cx(styles.textarea)}
                id='textarea'
                onClick={onClick}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={placeholder?.text}
                rows={rows}
                name={name}
                maxLength={maxLength}
                minLength={minLength}
            />
        </div>
    );
}

export default TextArea;
