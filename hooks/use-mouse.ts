import React from 'react';

interface MouseState {
  x: number;
  y: number;
  elementX: number;
  elementY: number;
  elementPositionX: number;
  elementPositionY: number;
}

export function useMouse(): (
  | MouseState
  | React.MutableRefObject<HTMLElement | null>
)[] {
  const [state, setState] = React.useState<MouseState>({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const nodeType = Node.ELEMENT_NODE;

  const ref: React.MutableRefObject<HTMLElement | null> =
    React.useRef<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      let newState: MouseState = {
        x: event.pageX,
        y: event.pageY,
      } as MouseState;

      if (ref.current?.nodeType === nodeType) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => {
        return {
          ...s,
          ...newState,
        };
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [state, ref];
}
