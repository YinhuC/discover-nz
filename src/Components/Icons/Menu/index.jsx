/* Third Party */
import React, { useContext } from "react";
import { CursorContext } from "../../Cursor/Context/CursorContext";

/* Components */

/* Functions */

export const MenuIcon = ({ color }) => {
  const { setType } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={() => setType("expand")}
      onMouseLeave={() => setType("default")}
      className="menu"
    >
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
    </div>
  );
};
