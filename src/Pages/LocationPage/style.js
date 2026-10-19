import styled from "styled-components";
import { Link } from "react-router";

export const MainContainer = styled.section`
  height: 100vh;
  height: 100svh;
  min-height: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--ink);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageFrame = styled.div`
  position: relative;
  flex: 1 1 50%;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 160px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0));
  }
`;

export const TopContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  user-select: none;
`;

export const LocationText = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: clamp(4rem, 9vw, 9rem);
  font-family: var(--display);
  font-weight: 800;
  line-height: 0.85;
  text-align: center;
  color: var(--paper);
`;

export const HeroCredit = styled.p`
  margin: 0;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
`;

export const Details = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(96px, 14vh, 160px) clamp(16px, 5vw, 64px);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 64px clamp(48px, 8vw, 128px);
  align-items: start;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.p`
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(1.5rem, 2.6vw, 2.25rem);
  line-height: 1.35;
  text-wrap: pretty;
`;

export const HighlightsTitle = styled.h2`
  margin: 0 0 8px;
  font-family: var(--sans);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
`;

export const HighlightList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Highlight = styled.li`
  padding: 24px 0;
  border-bottom: 1px solid var(--hairline);
`;

export const HighlightTitle = styled.h3`
  margin: 0 0 8px;
  font-family: var(--serif);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const HighlightText = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--muted);
`;

export const NextImage = styled.div`
  position: absolute;
  inset: -12% 0;
  background-size: cover;
  background-position: center;
  opacity: 0.45;
  transition: opacity 0.6s ease, scale 1.2s var(--ease-out);
`;

export const NextLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  min-height: 56vh;
  padding: 64px clamp(16px, 5vw, 64px);
  overflow: hidden;
  color: var(--paper);
  text-decoration: none;

  & > *:not(${NextImage}) {
    position: relative;
  }

  &:hover {
    color: var(--paper);
  }

  &:hover ${NextImage}, &:focus-visible ${NextImage} {
    opacity: 0.65;
    scale: 1.04;
  }
`;

export const NextLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const NextName = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  font-family: var(--serif);
  font-size: clamp(3rem, 9vw, 7.5rem);
  line-height: 1;

  svg {
    font-size: 0.6em;
    transition: transform 0.5s var(--ease-out);
  }

  ${NextLink}:hover & svg {
    transform: translateX(12px);
  }
`;

export const PageLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 32px;
  padding: 40px clamp(16px, 5vw, 64px);
`;
