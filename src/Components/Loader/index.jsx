/* Third Party */
import React, { useContext, useEffect } from "react";

/* Components */
import { LoaderContainer, LoaderInner, LoaderTitle, LoaderSubtitle, Separator } from "./style";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function Loader({ isLeaving }) {
  const setType = useContext(CursorContext);

  useEffect(() => {
    setType("expand");
    return () => setType("default");
  }, [setType]);

  return (
    <LoaderContainer
      role="status"
      aria-label="Loading Discover New Zealand"
      $isLeaving={isLeaving}
    >
      <LoaderInner $isLeaving={isLeaving}>
        <LoaderTitle>Discover New Zealand</LoaderTitle>
        <LoaderSubtitle>
          Travel<Separator aria-hidden="true" />Explore
          <Separator aria-hidden="true" />Experience
        </LoaderSubtitle>
      </LoaderInner>
    </LoaderContainer>
  );
}

export default Loader;
