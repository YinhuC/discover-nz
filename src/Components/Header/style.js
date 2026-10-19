import styled from "styled-components";
import { Link } from "react-router";

export const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background-color: ${({ $isSolid }) =>
    $isSolid ? "rgba(255, 255, 255, 0.94)" : "transparent"};
  box-shadow: ${({ $isSolid }) =>
    $isSolid ? "0 1px 0 var(--hairline)" : "none"};
  transform: translateY(${({ $isHidden }) => ($isHidden ? "-100%" : "0")});
  visibility: ${({ $isHidden }) => ($isHidden ? "hidden" : "visible")};
  transition: transform 0.5s var(--ease-out), background-color 0.3s ease,
    box-shadow 0.3s ease,
    visibility 0s linear ${({ $isHidden }) => ($isHidden ? "0.5s" : "0s")};
`;

export const BarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 0 clamp(16px, 5vw, 64px);
`;

export const TourismTextContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const TourismText = styled.span`
  font-family: var(--sans);
  font-size: clamp(0.95rem, 1.6vw, 1.15rem);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  user-select: none;
  transition: color 0.3s ease;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: -6px;
  padding: 0;
  background-color: transparent;
  border: 0;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    width: 2.25rem;
  }

  .menu span {
    display: block;
  }
`;
