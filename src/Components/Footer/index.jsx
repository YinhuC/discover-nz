/* Components */
import {
  FooterContainer,
  FooterGrid,
  FooterHeading,
  FooterList,
  FooterLink,
  FooterText,
  FooterBottom,
  Copyright,
} from "./style";
import ArrowLink from "../ArrowLink";

/* Functions */

const usefulLinks = [
  { href: "https://www.newzealand.com/", label: "100% Pure New Zealand" },
  { href: "https://www.tourismnewzealand.com/", label: "Tourism New Zealand" },
  { href: "https://visuals.newzealand.com/", label: "Tourism NZ Visual Library" },
  { href: "https://commons.wikimedia.org/", label: "Wikimedia Commons" },
  { href: "https://shotcut.org/", label: "Shotcut Video Editor" },
  { href: "https://icons8.com/", label: "Icons from Icons8" },
];

function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <nav aria-labelledby="footer-links-title">
          <FooterHeading id="footer-links-title">Useful links</FooterHeading>
          <FooterList>
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <FooterLink
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href="mailto:yinhucui@hotmail.com">Contact</FooterLink>
            </li>
          </FooterList>
        </nav>

        <div>
          <FooterHeading>About this site</FooterHeading>
          <FooterText>
            Discover New Zealand is a personal, non-commercial project designed to
            encourage New Zealanders, and everyone else, to travel within New
            Zealand.
          </FooterText>
          <FooterText>
            The hero video was edited with Shotcut, a free, open source video
            editor. The video and destination photos are from Tourism New
            Zealand. Region photos are from Wikimedia Commons contributors and
            are credited, with their licences, on each card.
          </FooterText>
          <ArrowLink href="https://www.newzealand.com/int/">
            Learn more at newzealand.com
          </ArrowLink>
        </div>
      </FooterGrid>
      <FooterBottom>
        <Copyright>© 2020 Discover New Zealand.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
