/* Third Party */
import React, { useContext } from "react";

/* Components */
import { ListItem, Link } from "./style";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function LinkListItem({ link, name }) {
  const { setType } = useContext(CursorContext);

  return (
    <Link
      onMouseEnter={() => setType("expand")}
      onMouseLeave={() => setType("default")}
      href={link}
      target="_blank"
    >
      <ListItem>{name}</ListItem>
    </Link>
  );
}

export default LinkListItem;
