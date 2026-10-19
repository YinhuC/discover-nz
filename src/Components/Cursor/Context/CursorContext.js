import { createContext, useContext } from "react";

/** Holds only the cursor's setter, which never changes, so hovering re-renders nothing but the cursor. */
export const CursorContext = createContext(() => {});

/** Mouse handlers that grow the cursor while the pointer is over an element. */
export function useCursorHover() {
  const setType = useContext(CursorContext);
  return {
    onMouseEnter: () => setType("expand"),
    onMouseLeave: () => setType("default"),
  };
}
