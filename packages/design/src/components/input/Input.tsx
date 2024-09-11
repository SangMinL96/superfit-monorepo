import { clsx } from 'clsx';
import { HTMLInputTypeAttribute, useEffect, useRef } from 'react';
import styles from './Input.module.scss';
type Props = {
  label?: string;
  value?: string | number;
  type: HTMLInputTypeAttribute;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
  onClick,
  onChange,
  readOnly = false,
  width = '100%',
  height = '4.2rem',
  fontSize,
  color,
  fontWeight,
  required = false,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputInlineStyle = {
    '--placeholder-color': placeholder?.color || '#B7B7B7',
    '--placeholder-fontSize': placeholder?.fontSize || '1.5rem',
    '--placeholder-fontWeight': placeholder?.fontWeight || '600',
    'font-size': fontSize,
    width,
    height,
    color,
    'font-weight': fontWeight,
  };

  useEffect(() => {
    if (inputRef.current) {
      Object.entries(inputInlineStyle).forEach(([key, value]) => {
        value && inputRef.current && inputRef.current.style.setProperty(key, value || '');
      });
      inputRef.current.style.setProperty('opacity', '1');
    }
  }, [inputInlineStyle]);

  return (
    <div>
      <label style={{ marginLeft: label ? '2px' : '0' }} className={clsx(styles.label)} htmlFor='oblong_input'>
        {label}
        {required && <span className={clsx(styles.required)}>*</span>}
      </label>
      <input
        ref={inputRef}
        className={clsx(styles.input)}
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
    </div>
  );
}

export default Input;
