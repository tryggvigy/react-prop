'use client';

import { useRef } from 'react';
import styles from './refs.module.css';
import { useScrollHandler } from './useScrollHandler';

export default function Refs() {
  const mainRef = useRef<HTMLElement>(null);
  const handleScroll = (event: Event) => {
    if (!mainRef.current) {
      return;
    }
    const scrollTop = (event.target as Document).documentElement.scrollTop;
    const newHue = scrollTop % 360;
    mainRef.current!.style.setProperty('--hue', newHue.toString());
  };

  useScrollHandler(handleScroll);

  return (
    <main ref={mainRef} className={styles.main}>
      scroll me!
    </main>
  );
}
