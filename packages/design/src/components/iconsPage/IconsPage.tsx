import * as svgList from "../../utils/icons";
import cx from "clsx";
import styles from "./iconsPage.module.scss";
function iconsPage() {
  return (
    <div className={cx(styles.wrap)}>
      {Object.entries(svgList).map(([name, value]: any) => {
        return (
          <div key={name} className={cx(styles.box)}>
            <p>{name}</p>
            <img width={30} src={value.src || value} alt={`${String(name)}`} />
          </div>
        );
      })}
      ;
    </div>
  );
}

export default iconsPage;
