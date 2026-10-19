/* Third Party */
import { useCursorHover } from "../../Cursor/Context/CursorContext";

/* Components */

/* Functions */

export const MenuIcon = ({ color }) => {
  const cursorProps = useCursorHover();

  return (
    <div {...cursorProps} className="menu">
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
    </div>
  );
};
