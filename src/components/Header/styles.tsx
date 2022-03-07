import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 43.9375rem;
  padding: 0.9375rem 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  align-self: center;

  img {
    width: 1.875rem;
    object-fit: center;
  }

  @media (min-width: 744px) {
    padding: 2.25rem 1.25rem;

    img {
      width: 4.125rem;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1,
  h2 {
    font-size: 0.75rem;
    line-height: 0.8125rem;
    letter-spacing: 0.24em;
    color: ${({ theme }) => theme.primary};
  }

  h1 {
    font-family: "AdihausDINBold", sans-serif;
  }

  h2 {
    font-family: "AdihausDINRegular", sans-serif;
  }

  @media (min-width: 744px) {
    h1,
    h2 {
      font-size: 1.25rem;
      line-height: 1.375rem;
    }
  }
`;
