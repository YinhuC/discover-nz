import styled from "styled-components";

export const RegionsContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(72px, 12vh, 120px) clamp(16px, 5vw, 64px);
  display: flex;
  flex-direction: column;
  gap: clamp(80px, 12vh, 140px);
`;

export const Island = styled.section``;

export const IslandHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 20px;
  margin-bottom: clamp(32px, 5vh, 48px);
  border-bottom: 1px solid var(--ink);
`;

export const IslandTitle = styled.h3`
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
`;

export const IslandCount = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--muted);
`;

export const RegionGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(48px, 7vh, 72px) clamp(24px, 3vw, 40px);

  @media (max-width: 1099px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`;

export const Region = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  margin: 0;
  overflow: hidden;
  border-radius: 16px;
  background-color: #e8e4dc;
`;

export const RegionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 1.2s var(--ease-out);

  ${Region}:hover & {
    transform: scale(1.04);
  }
`;

export const ImageCaption = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px 20px 16px;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--paper);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0));
`;

export const PhotoCredit = styled.p`
  margin: 10px 0 0;
  font-size: 0.8rem;
  color: var(--muted);

  a {
    color: inherit;
  }

  a:hover {
    color: var(--ink);
  }
`;

export const RegionTitle = styled.h4`
  margin: 20px 0 10px;
  font-family: var(--serif);
  font-size: clamp(1.6rem, 2.2vw, 2rem);
  font-weight: 400;
  line-height: 1.15;
`;

export const RegionText = styled.p`
  margin: 0 0 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--muted);
  flex-grow: 1;
`;

export const ToggleButton = styled.button`
  display: block;
  margin: clamp(48px, 7vh, 64px) auto 0;
  padding: 16px 32px;
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink);
  background: transparent;
  border: 1px solid var(--ink);
  border-radius: 999px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--ink);
    color: var(--paper);
  }
`;
