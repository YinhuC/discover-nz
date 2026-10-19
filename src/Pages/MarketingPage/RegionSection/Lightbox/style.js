import styled from "styled-components";

export const Dialog = styled.dialog`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  background: transparent;
  color: var(--paper);

  &::backdrop {
    background: transparent;
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(17, 17, 17, 0.94);
  backdrop-filter: blur(6px);
`;

export const Frame = styled.div`
  position: fixed;
  overflow: hidden;
  background-color: #1d1d1d;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45);
`;

export const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Chrome = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px clamp(16px, 5vw, 80px) 28px;
  pointer-events: none;

  & button {
    pointer-events: auto;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Counter = styled.p`
  margin: 0;
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums;
`;

export const IconButton = styled.button`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 1.35rem;
  color: var(--paper);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background-color: var(--paper);
    border-color: var(--paper);
    color: var(--ink);
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
`;

export const CaptionText = styled.div`
  min-width: 0;
`;

export const RegionName = styled.p`
  margin: 0;
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  line-height: 0.9;
  text-transform: uppercase;
`;

export const PhotoCaption = styled.p`
  margin: 8px 0 0;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.15rem;
  color: var(--wheat);
`;

export const PhotoCredit = styled.p`
  margin: 6px 0 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const Controls = styled.div`
  display: flex;
  gap: 12px;
`;
