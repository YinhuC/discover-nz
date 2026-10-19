import styled from "styled-components";
import { Link } from "react-router";

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: rotate(5deg) scale(1.15);
    opacity: 0.3;
  }
  transition: all 1s ease;
`;

export const ImageContainer = styled(Link)`
  width: 1300px;
  height: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 10px 10px 20px lightgrey;
  margin: 0 5% 0 0;
`;

export const Overlay = styled.div`
  width: 100%;
  position: absolute;
  color: black;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 30px 30px 0 0;
  user-select: none;
`;

export const Header = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 40px;

  display: flex;
  justify-content: flex-end;
  text-align: end;
`;

export const Subheader = styled.h4`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 20px;

  display: flex;
  justify-content: flex-end;
`;
