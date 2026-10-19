/* Third Party */
import React, { useContext } from "react";
import { FiArrowRight } from "react-icons/fi";

/* Components */
import {
  CardImage,
  ImageContainer,
  Overlay,
  Header,
  Credit,
  Explore,
} from "./style";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function CustomCard({ image, header, credit, url }) {
  const { setType } = useContext(CursorContext);

  return (
    <ImageContainer
      className="image-container"
      onMouseEnter={() => setType("expand")}
      onMouseLeave={() => setType("default")}
      onClick={() => setType("default")}
      to={url}
    >
      <CardImage style={{ backgroundImage: `url(${image})` }} />
      <Overlay>
        <div>
          <Header>{header}</Header>
          <Credit>Photo: {credit}</Credit>
        </div>
        <Explore>
          Explore
          <FiArrowRight aria-hidden="true" />
        </Explore>
      </Overlay>
    </ImageContainer>
  );
}

export default CustomCard;
