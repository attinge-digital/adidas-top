import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 100%;
  max-height: 28.5rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 2rem;
    line-height: 100%;
    letter-spacing: 0.06em;

    margin: 0 auto -0.5rem 1rem;
  }

  @media (min-width: 744px) {
    max-height: 50.9375rem;
    max-width: 41.4375rem;
  }
`;
