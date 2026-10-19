import styled from "styled-components";

/*https://sudo.isl.co/translate-vertical-horizontal/*/

export const HorizontalSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: ${({ $isDesktop }) => ($isDesktop ? "none" : "flex")};

  @media (min-width: 768px) {
    display: ${({ $isDesktop }) => ($isDesktop ? "flex" : "none")};
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 2% 0 7%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  padding: 24px 0 48px;

  .image-container {
    width: 100%;
    height: 420px;
    margin: 16px 0;
  }

  .vertical-cards-container {
    flex-direction: column;
    padding: 0 16px;
  }
`;
