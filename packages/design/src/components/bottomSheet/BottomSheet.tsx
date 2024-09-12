import { clsx } from 'clsx';
import React, { TouchEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './BottomSheet.module.scss';

type Props = {
  open: boolean;
  setOpen?: () => void;
  children: React.ReactNode;
  onClose: () => void;
};

function BottomSheet({ open, onClose, children }: Props) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const startY = useRef<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const onTouchStart = (ev: TouchEvent<HTMLButtonElement>) => {
    const y = ev.targetTouches[0].pageY;
    if (ref.current) {
      ref.current.style.transition = 'none';
    }
    startY.current = y;
  };
  const onTouchEnd = (ev: TouchEvent<HTMLButtonElement>) => {
    const y = ev.changedTouches[0].pageY;
    if (!ref.current) return;
    ref.current.style.transition = 'all 0.2s ease';
    if (startY.current + 120 <= y) {
      const closeY = y + 100;
      ref.current.style.transform = `translate(-50%, ${closeY}px)`;
      setTimeout(() => onClose(), 200);
    } else {
      ref.current.style.transform = `translate(-50%,${0}px)`;
    }
  };
  const onTouchMove = (ev: TouchEvent<HTMLButtonElement>) => {
    const y = ev.changedTouches[0].pageY;
    if (ref && ref.current) {
      if (startY.current <= y) {
        ref.current.style.transform = `translate(-50%,${y - startY.current}px)`;
        ref.current.style.transition = 'none';
      }
    }
  };
  if (!hasMounted) return null;
  const potalEl = document.getElementById('potal-modal') as HTMLDivElement;
  return (
    <>
      {open &&
        createPortal(
          <div className={clsx(styles.wrap)}>
            <button
              className={clsx(styles.background)}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            />
            <div className={clsx(styles.sheet_wrap)} ref={ref}>
              <button
                className={clsx(styles.close_bar)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
              {children}
            </div>
          </div>,
          potalEl as Element | DocumentFragment,
        )}
    </>
  );
}

export default BottomSheet;