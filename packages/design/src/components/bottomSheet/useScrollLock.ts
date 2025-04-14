/*eslint-disable */
import { useEffect } from "react";

let scrollY = 0;

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isLocked) {
      scrollY = window.scrollY;
      body.classList.add("noscroll");
      html.classList.add("noscroll");
      body.style.top = `-${scrollY}px`;
    } else {
      body.classList.remove("noscroll");
      html.classList.remove("noscroll");
      body.style.top = "";
      window.scrollTo(0, scrollY);
    }

    // 컴포넌트 언마운트 시 복구
    return () => {
      body.classList.remove("noscroll");
      html.classList.remove("noscroll");
      body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}
