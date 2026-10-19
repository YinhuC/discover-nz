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
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 55%
  );
`;

export const Shade = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--ink);
  opacity: 0;
`;

export const HeroContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 clamp(16px, 4vw, 56px) clamp(32px, 6vh, 64px);
  color: var(--paper);
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-weight: 400;
  user-select: none;
`;

export const HeroLead = styled.span`
  display: block;
  margin-bottom: 0.1em;
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.75rem, 3.4vw, 3rem);
  line-height: 1;
  color: var(--wheat);
`;

export const HeroName = styled.span`
  display: block;
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(5.5rem, 18.6vw, 30rem);
  line-height: 0.82;
  letter-spacing: -0.01em;
  text-transform: uppercase;

  @media (max-width: 639px) {
    font-size: 28vw;
  }
`;

export const HeroFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: clamp(20px, 3vh, 32px);
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(1.15rem, 1.8vw, 1.6rem);
  color: var(--wheat);
  user-select: none;
`;
