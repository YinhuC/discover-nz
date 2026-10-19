/* Third Party */
import React, { useContext, useState } from "react";
import { CardBody, Button } from "reactstrap";
import { CursorContext } from "../Cursor/Context/CursorContext";
import { gsap } from "gsap";

/* Components */
import {
  Teaser,
  TextBody,
  CustomCardImg,
  CustomCardFooter,
  CustomCardHeader,
  CustomCardTitle,
} from "./style";
import {
  expandedLeft,
  expandedMiddle,
  expandedRight,
  shrunk,
} from "./constants";

/* Functions */

function CustomTeaser({ image, header, title, text, footer, url, imageId }) {
  const { setType } = useContext(CursorContext);
  const [state, setState] = useState(false);

  const modID = (parseInt(imageId.split("-")[1]) + 1) % 3;

  console.log();

  const handleExpand = () => {
    if (window.innerWidth >= 1200) {
      if (modID === 0) gsap.to(`#${imageId}`, expandedRight);
      else if (modID === 1) gsap.to(`#${imageId}`, expandedLeft);
      else gsap.to(`#${imageId}`, expandedMiddle);
      setState(true);
    }
  };

  const handleShrink = () => {
    if (window.innerWidth >= 1200) {
      if (modID === 0) gsap.to(`#${imageId}`, shrunk);
      else if (modID === 1) gsap.to(`#${imageId}`, shrunk);
      else gsap.to(`#${imageId}`, shrunk);
      setState(false);
    }
  };

  return (
    <Teaser>
      <CustomCardHeader>{header}</CustomCardHeader>
      <CustomCardImg
        onMouseEnter={() => setType("expand")}
        onMouseLeave={() => setType("default")}
        id={imageId}
        onClick={state !== true ? handleExpand : handleShrink}
        src={image}
      />
      <CardBody className="d-flex flex-column px-4">
        <CustomCardTitle>{title}</CustomCardTitle>
        <TextBody>{text}</TextBody>
        <Button
          onMouseEnter={() => setType("expand")}
          onMouseLeave={() => setType("default")}
          href={url}
          target="_blank"
          className="mt-auto mb-2"
          color="primary"
        >
          Read more &rarr;
        </Button>
      </CardBody>
      <CustomCardFooter>{footer}</CustomCardFooter>
    </Teaser>
  );
}

export default CustomTeaser;
