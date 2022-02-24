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

  padding: 3.3475rem 0 4.2625rem 0;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.25rem;
    line-height: 100%;
    letter-spacing: 0.06em;

    margin: 0 auto -1.5rem 1rem;
  }

  button.primary {
    margin-top: 4.5rem;
  }
`;
