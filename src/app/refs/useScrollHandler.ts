'use client';

import { useEffect } from 'react';

type ScrollHandler = (event: Event) => void;

export function useScrollHandler(callback: EventListener): void {
  useEffect(() => {
    document.addEventListener('scroll', callback);
    return () => document.removeEventListener('scroll', callback);
  }, [callback]);
}
