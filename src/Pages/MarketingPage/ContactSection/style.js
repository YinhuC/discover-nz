import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(24px, 4vw, 80px);
  min-height: 100vh;
  padding: 120px clamp(16px, 5vw, 64px);
  border-top: 1px solid var(--ink);

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ContactInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(20px, 3vw, 40px);
`;

export const ContactText = styled.h2`
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-align: center;
  text-wrap: balance;
`;

export const Dash = styled.span`
  display: block;
  flex: 0 1 20vw;
  height: 1px;
  background-color: var(--ink);

  @media (max-width: 575px) {
    flex-basis: auto;
    width: 30vw;
  }
`;

export const EmailInfo = styled.a`
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  color: var(--ink);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--hairline);
  text-underline-offset: 0.25em;
  transition: text-decoration-color 0.3s ease;

  &:hover {
    color: var(--ink);
    text-decoration-color: var(--ink);
  }
`;
