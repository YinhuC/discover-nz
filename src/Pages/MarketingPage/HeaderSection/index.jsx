/* Third Party */
import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { gsap } from "gsap";

/* Components */
import {
  BackgroundContainer,
  HeaderContainer,
  BackgroundVideo,
  VideoContainer,
  MainContainer,
} from "./style";
import video from "../../../Videos/dark.mp4";
import { DownArrow } from "../../../Components/Icons/DownArrow";

/* Functions */
/* need to actually wrap the icon AND cursor for it to change, also need 
the cursor to be a direct child of cursor manager */

function HeaderSection() {
  const backgroundColor = "transparent";

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(["#discover-hero", "#begin-journey-hero"], {
        delay: 0.8,
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section>
      <VideoContainer>
        <BackgroundVideo autoPlay playsInline muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <BackgroundContainer style={{ backgroundColor: backgroundColor }}>
          <MainContainer>
            <Row></Row>
            <Row>
              <Col className="col-lg-7">
                <HeaderContainer className="d-flex d-lg-none justify-content-center flex-column text-center">
                  <div id="discover-hero">
                    Discover <br />
                    New Zealand
                  </div>
                  <div id="begin-journey-hero" style={{ fontSize: "2rem" }}>
                    Begin Your Journey
                  </div>
                </HeaderContainer>
                <HeaderContainer className="d-none d-lg-flex flex-column">
                  <div id="discover-hero">Discover New Zealand</div>
                  <div id="begin-journey-hero" style={{ fontSize: "2rem" }}>
                    Begin Your Journey
                  </div>
                </HeaderContainer>
              </Col>
              <Col
                id="discover-hero"
                className="col-lg-5 d-none d-lg-flex justify-content-end mt-2 "
              >
                <DownArrow />
              </Col>
            </Row>
          </MainContainer>
        </BackgroundContainer>
      </VideoContainer>
      <BackgroundContainer />
    </section>
  );
}

export default HeaderSection;
