import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 0 24px;
  text-align: center;

  background-color: var(--ink);
  clip-path: inset(0% 0% ${({ $isLeaving }) => ($isLeaving ? "100%" : "0%")} 0%);
  transition: clip-path 1s cubic-bezier(0.87, 0, 0.13, 1);
`;

export const LoaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.84, 0), opacity 0.6s ease;
  ${({ $isLeaving }) => $isLeaving && "transform: translateY(-48px); opacity: 0;"}
`;

export const LoaderTitle = styled.p`
  margin: 0;
  color: var(--paper);
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.9;
  text-transform: uppercase;
  text-wrap: balance;
  animation: ${rise} 1s var(--ease-out) both;
`;

export const LoaderSubtitle = styled.p`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  color: var(--wheat);
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  animation: ${rise} 1s var(--ease-out) 0.25s both;
`;

export const Separator = styled.span`
  display: inline-block;
  width: 24px;
  height: 1px;
  background-color: currentColor;
`;
