import styled, { css } from "styled-components";
import { Link } from "react-router";

const arrowLink = css`
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-family: var(--sans);
  font-weight: 500;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  width: fit-content;

  svg {
    flex-shrink: 0;
    transition: transform 0.4s var(--ease-out);
  }

  &:hover {
    color: inherit;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const ExternalAnchor = styled.a`
  ${arrowLink}

  &:hover svg {
    transform: translate(3px, -3px);
  }
`;

export const InternalAnchor = styled(Link)`
  ${arrowLink}
`;
