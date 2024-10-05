import cx from 'clsx';
import { useEffect, useRef } from 'react';
import styles from './CheckBox.module.scss';

type Props = {
  id: string;
  size?: 30 | 24 | 20 | 16 | 12;
  label?: string;
  labelWeight?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
};
export const CheckBox = ({
  id,
  size = 16,
  disabled = false,
  labelWeight,
  label = '라벨을 입력해주세요',
  onClick,
  onChange,
  checked = false,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const inlineStyle = {
    'font-weight': labelWeight,
  };
  useEffect(() => {
    if (ref.current) {
      Object.entries(inlineStyle).forEach(([key, value]) => {
        value && ref.current && ref.current.style.setProperty(key, value || '');
      });
    }
  }, [inlineStyle]);
  return (
    <div ref={ref} className={cx(styles.wrap, styles[`size_${size}`])}>
      <input type='checkbox' checked={checked} disabled={disabled} id={id} onClick={onClick} onChange={onChange} />
      <label htmlFor={id} className={cx(styles.label)}>
        {label}
      </label>
    </div>
  );
};
