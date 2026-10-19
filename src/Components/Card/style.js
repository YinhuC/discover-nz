import styled from "styled-components";
import { Link } from "react-router";

export const CardImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: scale 1.2s var(--ease-out);
`;

export const ImageContainer = styled(Link)`
  flex-shrink: 0;
  width: clamp(560px, 70vw, 1200px);
  height: 62vh;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.14);
  margin: 0 5% 0 0;
  color: var(--paper);
  text-decoration: none;

  &:hover {
    color: var(--paper);
  }

  &:hover ${CardImage}, &:focus-visible ${CardImage} {
    scale: 1.05;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(20px, 3vw, 40px);
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  user-select: none;
`;

export const Header = styled.h3`
  margin: 0;
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1;
`;

export const Credit = styled.p`
  margin: 10px 0 0;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
`;

export const Explore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--sans);
  font-weight: 500;
  font-size: 1rem;
  white-space: nowrap;
  padding-bottom: 2px;
  border-bottom: 1px solid currentColor;

  svg {
    transition: transform 0.5s var(--ease-out);
  }

  ${ImageContainer}:hover & svg {
    transform: translateX(4px);
  }
`;
