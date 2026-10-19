import styled from "styled-components";

export const Main = styled.a`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1.5px solid var(--paper);
  color: var(--paper);
  font-size: 1.75rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--paper);
    color: var(--ink);
  }

  svg {
    transition: transform 0.5s var(--ease-out);
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;
