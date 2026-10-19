/* Third Party */
import React, { useContext } from "react";
import { Col, Row } from "reactstrap";

/* Components */
import {
  CardImage,
  ImageContainer,
  Overlay,
  TopContainer,
  Header,
  Subheader,
} from "./style";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function CustomCard({ image, header, subheader, url }) {
  const { setType } = useContext(CursorContext);

  return (
    <ImageContainer
      className="image-container"
      onMouseEnter={() => setType("expand")}
      onMouseLeave={() => setType("default")}
      onClick={() => setType("default")}
      to={url}
    >
      <Overlay>
        <TopContainer>
          <Row className="d-flex flex-column">
            <Col>
              <Header> {header}</Header>
            </Col>
            <Col className="d-flex justify-content-end">
              <Subheader>{subheader}</Subheader>
            </Col>
          </Row>
        </TopContainer>
      </Overlay>
      <CardImage style={{ backgroundImage: `url(${image})` }} />
    </ImageContainer>
  );
}

export default CustomCard;
