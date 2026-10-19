import React, { useContext } from "react";
import { FiArrowDown } from "react-icons/fi";
import { CursorContext } from "../../Cursor/Context/CursorContext";
import { Main } from "./style";

export const DownArrow = ({ targetId }) => {
  const { setType } = useContext(CursorContext);

  return (
    <Main
      href={`#${targetId}`}
      aria-label="Scroll to the next section"
      onMouseEnter={() => setType("expand")}
      onMouseLeave={() => setType("default")}
    >
      <FiArrowDown aria-hidden="true" />
    </Main>
  );
};
