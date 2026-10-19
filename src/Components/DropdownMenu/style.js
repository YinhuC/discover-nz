import styled from "styled-components";
import { Link } from "react-router";

export const Overlay = styled.nav`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: var(--ink);
  color: var(--paper);
  clip-path: ${({ $isOpen }) =>
    $isOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)"};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: clip-path 0.8s var(--ease-out),
    visibility 0s linear ${({ $isOpen }) => ($isOpen ? "0s" : "0.8s")};

  li {
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "24px")});
    transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
    transition-delay: ${({ $isOpen }) =>
      $isOpen ? "calc(0.25s + var(--i, 0) * 0.06s)" : "0s"};
  }
`;

export const MenuInner = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
  padding: 120px clamp(16px, 6vw, 96px) 48px;
  overflow-y: auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

export const MenuLabel = styled.p`
  font-family: var(--sans);
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 16px;
`;

export const DestinationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DestinationLink = styled(Link)`
  display: inline-block;
  font-family: var(--serif);
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.15;
  color: var(--paper);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.5s var(--ease-out);

  &:hover,
  &:focus-visible {
    color: var(--wheat);
    font-style: italic;
    transform: translateX(12px);
  }
`;

export const SecondaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
`;

export const SecondaryLink = styled.a`
  font-family: var(--sans);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;

  &:hover {
    color: var(--paper);
    text-decoration: underline;
  }
`;

export const Preview = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  max-height: 70vh;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const PreviewImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transform: scale(${({ $isActive }) => ($isActive ? 1 : 1.06)});
  transition: opacity 0.6s ease, transform 1.2s var(--ease-out);
`;
