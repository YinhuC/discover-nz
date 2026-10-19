import { createContext } from "react";

/** Holds only the cursor's setter, which never changes, so hovering re-renders nothing but the cursor. */
export const CursorContext = createContext(() => {});
