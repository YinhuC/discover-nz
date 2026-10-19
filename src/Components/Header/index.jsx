/* Third Party */
import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Fade } from "reactstrap";

/* Components */
import { Center, TourismTextContainer, MenuButton, TourismText } from "./style";
import { MenuIcon } from "../Icons/Menu";
import DropdownMenu from "../DropdownMenu";
import "./style.scss";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function Header() {
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);
  const [color, setColor] = useState("white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setType } = useContext(CursorContext);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return function cleanup() {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  // Handle scroll event to hide or show header
  const handleScroll = () => {
    const menuOpen = document.getElementById("dropdown").style.height === "50%";
    const scrollingUp = window.scrollY > prevScroll && !menuOpen ? false : true;
    const getColor =
      window.scrollY > window.innerHeight - 80 && !menuOpen ? "black" : "white";

    setScrollUp(scrollingUp);
    setPrevScroll(window.scrollY);
    setColor(getColor);
  };

  // Update the state when the menu is clicked
  const handleMenuClick = () => {
    if (isMenuOpen === true) {
      document.activeElement.blur();
    } else {
      setColor("white");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <DropdownMenu menuHeight={isMenuOpen ? "50" : "0"} />
      <Fade in={scrollUp}>
        <Center>
          <Container id="promote-header">
            <Row className="d-flex justify-content-center mt-5">
              <Col className="col-11 d-none d-md-flex justify-content-start mt-3">
                <TourismTextContainer
                  onMouseEnter={() => setType("expand")}
                  onMouseLeave={() => setType("default")}
                  to="/"
                >
                  <TourismText style={{ color: color }}>
                    Promote Tourism NZ
                  </TourismText>
                </TourismTextContainer>
              </Col>
              <Col className="col-1 d-flex justify-content-center mt-3">
                <MenuButton
                  className={
                    isMenuOpen ? "Menu-toggle-open" : "Menu-toggle-closed"
                  }
                  onClick={handleMenuClick}
                >
                  <MenuIcon color={color} />
                </MenuButton>
              </Col>
            </Row>
          </Container>
        </Center>
      </Fade>
    </section>
  );
}

export default Header;
