import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 30.5rem;
  padding: 0.9375rem 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  align-self: center;

  img {
    width: 15%;
    object-fit: center;
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
`;
