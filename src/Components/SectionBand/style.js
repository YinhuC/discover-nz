import styled from "styled-components";

export const Band = styled.div`
  text-align: center;
  padding: clamp(88px, 14vh, 128px) 16px;
  background-color: var(--sky);
  user-select: none;
`;

export const BandTitle = styled.h2`
  margin: 0 auto;
  max-width: 18ch;
  font-family: var(--serif);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--ink);
  text-wrap: balance;

  em {
    font-style: italic;
  }
`;
