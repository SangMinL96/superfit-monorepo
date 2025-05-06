import { useEffect, useRef, useState } from "react";
import Icons from "../iconCom/Icons";
import styles from "./Header.module.scss";
import cx from "clsx";

const useScrollToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false); // 외부로 전달되는 상태
  const prevScrolledRef = useRef<boolean>(false); // 내부 상태 추적
  useEffect(() => {
    const handleScroll = () => {
      const currentScrolled = window.scrollY !== 0;
      if (prevScrolledRef.current !== currentScrolled) {
        prevScrolledRef.current = currentScrolled;
        setToggle(currentScrolled); // true: 스크롤됨, false: 다시 0으로
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return toggle;
};

function Header() {
  const scrolled = useScrollToggle();
  return (
    <div className={cx(styles.wrap, { [styles.scrolled]: scrolled })}>
      <button type="button">
        <Icons size={90} name="폰트로고" />
      </button>
      <span className={cx(styles.icon_box)}>
        <button type="button">
          <Icons size={23} name="알림" />
        </button>
        <button type="button">
          <Icons size={23} name="메뉴" />
        </button>
      </span>
    </div>
  );
}

export default Header;
