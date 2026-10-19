/* Third Party */
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
import { useCursorHover } from "../Cursor/Context/CursorContext";

/* Functions */

function CustomCard({ image, header, credit, url }) {
  const cursorProps = useCursorHover();

  return (
    <ImageContainer
      className="image-container"
      {...cursorProps}
      onClick={cursorProps.onMouseLeave}
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
