/* Third Party */
import React, { useEffect } from "react";
import { Row, Col, Container, Button, Alert } from "reactstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../../Utils/Split3.min.js";

/* Components */
import { CovidContainer, DisclaimerText, CovidHeader } from "./style";

/* Functions */
/* need to actually wrap the icon AND cursor for it to change, also need 
the cursor to be a direct child of cursor manager */

function CovidSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const split = new SplitText("#disclaimer", {
      type: "lines",
    });
    let ctx = gsap.context(() => {
      gsap.from(["#covid-title", split.lines, "#covid-button"], {
        delay: 0.3,
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2",

        scrollTrigger: {
          trigger: "#disclaimer",
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <CovidContainer className="covid">
      <Container>
        <Row className="d-flex flex-column">
          <Col id="covid-title" className="text-center">
            <CovidHeader style={{ userSelect: "none" }}>
              Before You Go
            </CovidHeader>
            <Alert
              color="warning"
              style={{ color: "black", fontWeight: "bold", marginTop: "30px" }}
            >
              Alert - Warning
            </Alert>
          </Col>
          <Col className="d-flex justify-content-center">
            <DisclaimerText id="disclaimer">
              The pandemic has caused many lockdowns with the country too afraid
              to explore again. There are businesses that will benefit from more
              tourism, plus you deserve to relax and travel. However, safety
              should always be put first. If you are sick, get tested and always
              practise social distancing. To learn more about COVID19 and how to
              stop the spread:
            </DisclaimerText>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button
              id="covid-button"
              href="https://covid19.govt.nz/"
              target="_blank"
              size="lg"
              color="warning"
              style={{
                fontWeight: "bold",
                boxShadow: "2px 2px 10px gray",
                margin: "0 0 250px 0",
              }}
            >
              Click Here
            </Button>
          </Col>
        </Row>
      </Container>
    </CovidContainer>
  );
}

export default CovidSection;
