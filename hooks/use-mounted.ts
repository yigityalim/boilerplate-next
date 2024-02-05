import { useRef, useEffect, MutableRefObject } from 'react';

export function useMounted(): MutableRefObject<boolean> {
  const mounted: MutableRefObject<boolean> = useRef(false);
  useEffect((): (() => void) => {
    mounted.current = true;
    return (): void => {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
