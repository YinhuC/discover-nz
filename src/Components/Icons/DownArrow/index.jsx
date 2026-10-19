import React, { useContext } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CursorContext } from "../../Cursor/Context/CursorContext";
import { Main } from "./style";

export const DownArrow = () => {
  const { setType } = useContext(CursorContext);

  return (
    <Main
      onMouseEnter={() => setType("expand")}
      onMouseLeave={() => setType("default")}
      smooth={true}
      duration={600}
      to="covid"
    >
      <IconContext.Provider value={{ color: "white", size: "40px" }}>
        <FaArrowDown />
      </IconContext.Provider>
    </Main>
  );
};
