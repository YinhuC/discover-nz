import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  height: 100vh;
  height: 100svh;
  min-height: 520px;
  overflow: hidden;
  background-color: var(--ink);
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Scrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0) 45%
  );
`;

export const HeroContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  padding: 0 clamp(16px, 5vw, 64px) clamp(48px, 9vh, 96px);
  color: var(--paper);

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  text-wrap: balance;
  user-select: none;

  em {
    font-style: italic;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 12px 0 0;
  font-family: var(--serif);
  font-size: clamp(1.25rem, 2.2vw, 2rem);
  color: var(--wheat);
  user-select: none;
`;
