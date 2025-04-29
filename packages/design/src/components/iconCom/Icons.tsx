import { useRef } from "react";
import styles from "./Icons.module.scss";
import cx from "clsx";
import * as svgList from "../../utils/icons";

type Props = {
  name: keyof typeof svgList;
  cxStyles?: string;
  size?: number;
  margin?: string;
};

function Icons({ name, cxStyles, size = 20, margin }: Props) {
  console.log(size)
  const ref = useRef<HTMLSpanElement>(null);
  const targetSvg = svgList[name] as any;
  return (
    <span
      style={{ width: `${size}px`, height: `${size}px`, margin }}
      ref={ref}
      className={`${cx(styles.wrap)} ${cxStyles || ""}`.trim()}
    >
      <img src={targetSvg?.src || targetSvg} alt={`${name}_icon`} />
    </span>
  );
}

export default Icons;
