/* Third Party */
import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

/* Components */
import { FooterContainer, Copyright, FooterText, FooterLinks } from './style';
import { CursorContext } from '../Cursor/Context/CursorContext';

/* Functions */

function Footer() {
  const { setType } = useContext(CursorContext);

  return (
    <FooterContainer>
      <Container style={{ marginBottom: '150px' }}>
        <Row>
          <Col className="col-12 col-lg-3 d-flex flex-column">
            <FooterText>Useful Links</FooterText>
            <FooterLinks
              href="https://www.tourismnewzealand.com/"
              target="_blank"
            >
              Tourism New Zealand
            </FooterLinks>
            <FooterLinks href="https://visuals.newzealand.com/" target="_blank">
              Visual Library
            </FooterLinks>
            <FooterLinks href="mailto: yinhucui@gmail.com" target="_blank">
              Contact Us
            </FooterLinks>
            <FooterLinks
              href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus"
              target="_blank"
            >
              COVID-19 NZ Situtation
            </FooterLinks>
            <FooterLinks href="https://shotcut.org/" target="_blank">
              Shotcut Video Editor
            </FooterLinks>
            <FooterLinks href="https://icons8.com/" target="_blank">
              Icons From Icons8
            </FooterLinks>
          </Col>

          <Col className="col-12 col-lg-9 pl-3 pl-lg-5 mt-5 mt-lg-0 d-flex flex-column">
            <FooterText>
              This web application was designed as a personal project to promote
              tourism, and to start encoruaging New Zealanders to travel within
              New Zealand.
            </FooterText>
            <FooterText className="mb-3">
              The main video is created using Shotcut. Shotcut is a free, open
              source, cross-platform video editor. Images and videos used in
              this website are from Tourism New Zealand. Click below to learn
              more and support tourism in New Zealand.
            </FooterText>
            <Button
              href="https://www.newzealand.com/int/"
              target="_blank"
              size="lg"
              theme="light"
              onMouseEnter={() => setType('expand')}
              onMouseLeave={() => setType('default')}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
      <hr style={{ backgroundColor: 'lightgray' }} />
      <Container>
        <Row>
          <Col className="mb-3 text-center">
            <Copyright>© 2020 Promote NZ Tourism. Developed by SNYC</Copyright>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
