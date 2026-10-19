import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(120px, 18vh, 200px) clamp(16px, 5vw, 64px) clamp(120px, 16vh, 180px);
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto clamp(56px, 8vh, 96px);
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 0 24px;
  font-family: var(--serif);
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 400;
  line-height: 1.05;
  user-select: none;

  em {
    font-style: italic;
  }
`;

export const Intro = styled.p`
  margin: 0 auto;
  max-width: 60ch;
  font-size: clamp(1.15rem, 1.8vw, 1.4rem);
  line-height: 1.55;
  color: var(--muted);
  text-wrap: pretty;
`;

export const EssentialList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(32px, 6vw, 96px);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Essential = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 0 40px;
  border-top: 1px solid var(--hairline);
`;

export const EssentialTitle = styled.h3`
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(1.6rem, 2.4vw, 2rem);
  font-weight: 400;
`;

export const EssentialText = styled.p`
  margin: 0;
  max-width: 52ch;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--muted);
`;
