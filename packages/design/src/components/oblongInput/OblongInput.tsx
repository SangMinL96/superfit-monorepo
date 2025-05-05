import { clsx } from "clsx";
import { HTMLInputTypeAttribute, useEffect, useRef } from "react";
import styles from "./OblongInput.module.scss";
import { motion } from "framer-motion";
import Icons from "../iconCom/Icons";

type Props = {
  label?: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: HTMLInputTypeAttribute;
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
  name?: string;
  max?: string | number;
  min?: string | number;
  maxLength?: number;
  minLength?: number;
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  isSearch?: boolean;
  inputClass?: string;
  margin?: string;
};
function OblongInput({
  label,
  type,
  value,
  placeholder,
  disabled = false,
  name,
  max,
  min,
  maxLength,
  minLength,
  margin,
  onClick,
  onChange,
  readOnly = false,
  width = "100%",
  height = "5.6rem",
  fontSize,
  color,
  fontWeight,
  isSearch,
  inputClass,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputInlineStyle = {
    "--placeholder-color": placeholder?.color || "#B7B7B7",
    "--placeholder-fontSize": placeholder?.fontSize || "1.5rem",
    "--placeholder-fontWeight": placeholder?.fontWeight || "600",
    "font-size": fontSize,
    width,
    height,
    color,
    "font-weight": fontWeight,
  };

  useEffect(() => {
    if (inputRef.current) {
      Object.entries(inputInlineStyle).forEach(([key, cssValue]) => {
        cssValue &&
          inputRef.current &&
          inputRef.current.style.setProperty(key, cssValue || "");
      });
    }
  }, [inputInlineStyle]);

  return (
    <motion.div
      className={clsx(styles.wrap, isSearch ? styles.search_type : "")}
      style={{ margin }}
    >
      {isSearch && <Icons name="search" cxStyles={clsx(styles.search)} />}
      <label
        style={{ margin: label ? " 0 0 8px 3px" : "0" }}
        className={clsx(styles.label)}
        htmlFor="oblong_input"
      >
        {label}
      </label>
      <input
        value={value}
        ref={inputRef}
        className={clsx([styles.input, inputClass])}
        id="oblong_input"
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
    </motion.div>
  );
}

export default OblongInput;
