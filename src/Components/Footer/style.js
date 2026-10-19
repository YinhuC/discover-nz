import styled from "styled-components";
import { eyebrow } from "../../Utils/styles";

export const FooterContainer = styled.footer`
  padding: clamp(96px, 14vh, 150px) clamp(16px, 5vw, 64px) 32px;
  background-color: var(--ink);
  color: rgba(255, 255, 255, 0.78);
`;

export const FooterGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto clamp(80px, 12vh, 140px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 64px clamp(40px, 8vw, 120px);

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterHeading = styled.h2`
  margin: 0 0 24px;
  font-family: var(--sans);
  ${eyebrow}
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
`;

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FooterLink = styled.a`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;

  &:hover {
    color: var(--paper);
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  margin: 0 0 20px;
  max-width: 62ch;
  font-family: var(--serif);
  font-size: clamp(1.15rem, 1.6vw, 1.4rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.85);

  & + a {
    margin-top: 12px;
    color: var(--wheat);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;
