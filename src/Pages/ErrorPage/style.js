import styled from "styled-components";

export const ErrorSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 160px 16px 96px;
  text-align: center;
  background-color: var(--ink);
  color: var(--paper);

  a {
    color: var(--wheat);
  }
`;

export const ErrorTitle = styled.h1`
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  line-height: 1;

  em {
    font-style: italic;
    color: var(--wheat);
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  max-width: 46ch;
  font-size: clamp(1.1rem, 1.6vw, 1.3rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;
