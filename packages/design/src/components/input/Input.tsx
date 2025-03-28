import cx from 'clsx';
import { HTMLInputTypeAttribute, useEffect, useRef } from 'react';
import styles from './Input.module.scss';
import Svgs from '../svgs/Svgs';
type Props = {
    label?: string;
    value?: string | number;
    type: HTMLInputTypeAttribute;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    defaultValue?: string | number;
    readOnly?: boolean;
    placeholder?: {
        text: string;
        fontSize?: string;
        fontWeight?: string;
        color?: string;
    };
    disabled?: boolean;
    name: string;
    max?: string | number;
    min?: string | number;
    maxLength?: number;
    minLength?: number;
    width?: string;
    height?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    required?: boolean;
    margin?: string;
    padding?: string;
    unit?: React.ReactNode | string;
};
function Input({
    label,
    type,
    placeholder,
    disabled = false,
    name,
    max,
    min,
    maxLength,
    minLength,
    defaultValue,
    onClick,
    onChange,
    readOnly = false,
    width = '100%',
    height = '100%',
    padding = '',
    fontSize,
    color,
    fontWeight,
    required = false,
    margin = '',
    unit,
}: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inlineStyle = {
        '--placeholder-color': placeholder?.color || '#B7B7B7',
        '--placeholder-fontSize': placeholder?.fontSize || '1.5rem',
        '--placeholder-fontWeight': placeholder?.fontWeight || '600',
        'font-size': fontSize,
        width,
        height,
        padding,
        color,
        'font-weight': fontWeight,
    };

    useEffect(() => {
        if (inputRef.current) {
            Object.entries(inlineStyle).forEach(([key, value]) => {
                if (key === "width" || key === 'height') {
                    value && wrapRef.current && wrapRef.current.style.setProperty(key, value || '');
                    return;
                }
                value && inputRef.current && inputRef.current.style.setProperty(key, value || '');
            });
            inputRef.current.style.setProperty('opacity', '1');
        }
    }, [inlineStyle]);

    return (
        <div style={{ margin }}>
            <label style={{ marginLeft: label ? '2px' : '0' }} className={cx(styles.label)} htmlFor='oblong_input'>
                {label}
                {required && <span className={cx(styles.required)}>*</span>}
            </label>
            <div ref={wrapRef} className={cx(styles.input_wrap)}>
                <input
                    defaultValue={defaultValue}
                    ref={inputRef}
                    className={cx(styles.input)}
                    id='oblong_input'
                    onClick={onClick}
                    onChange={onChange}
                    disabled={disabled}
                    type={type}
                    readOnly={readOnly}
                    placeholder={placeholder?.text}
                    name={name}
                    max={max}
                    min={min}
                    maxLength={maxLength}
                    minLength={minLength}
                />
                {unit && <div className={cx(styles.unit)}>{unit}</div>}
                {onClick && <Svgs name='arrowRight' cxStyles={cx(styles.icon)} />}
            </div>
        </div>
    );
}

export default Input;
