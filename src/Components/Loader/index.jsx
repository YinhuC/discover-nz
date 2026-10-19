/* Third Party */
import React, { useContext, useEffect } from "react";

/* Components */
import { LoaderContainer, LoaderTitle, LoaderSubtitle } from "./style";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function Loader() {
  const { setType } = useContext(CursorContext);

  useEffect(() => {
    setType("expand");
    return function cleanup() {
      setType("default");
    };
  });

  return (
    <>
      <LoaderContainer className="d-none d-md-flex">
        <LoaderTitle>Promote Tourism New Zealand</LoaderTitle>
        <LoaderSubtitle>Travel . Explore . Experience</LoaderSubtitle>
      </LoaderContainer>

      <LoaderContainer className="d-flex d-md-none">
        <LoaderTitle>Promote</LoaderTitle>
        <LoaderTitle>Tourism</LoaderTitle>
        <LoaderTitle>New Zealand</LoaderTitle>
        <hr />
        <LoaderSubtitle>Travel</LoaderSubtitle>
        <LoaderSubtitle>-</LoaderSubtitle>
        <LoaderSubtitle>Explore</LoaderSubtitle>
        <LoaderSubtitle>-</LoaderSubtitle>
        <LoaderSubtitle>Experience</LoaderSubtitle>
      </LoaderContainer>
    </>
  );
}

export default Loader;
