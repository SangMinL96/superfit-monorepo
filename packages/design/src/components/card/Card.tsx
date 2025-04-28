import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Card.module.scss";
import Icons from "../Icons/Icons";
type Props = {
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  margin?: string;
};
function Card({ children, onClick, title, margin }: Props) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      className={clsx(styles.wrap)}
      {...(Tag === "button" && { type: "button" })}
      style={{ margin }}
      onClick={onClick}
    >
      {title && <strong className={clsx(styles.tit)}>{title}</strong>}
      {children}
      {Tag === "button" && (
        <span className={clsx(styles.onclick_icon)}>
          <Icons name="arrow_right" />
        </span>
      )}
    </Tag>
  );
}

export default Card;
