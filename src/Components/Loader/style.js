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
`;

export const LoaderTitle = styled.p`
  margin: 0;
  color: var(--paper);
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.15;
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
