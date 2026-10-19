import styled from 'styled-components';
import { Link } from 'react-router';

export const Center = styled.div`
  width: 100vw;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1000;
  background-color: transparent;
  position: fixed;
`;

export const TourismTextContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none !important;
`;

export const TourismText = styled.div`
  font-family: 'Inter', sans-serif;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;

  margin: 0 10px 0 0;
  user-select: none;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    width: 2rem;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
