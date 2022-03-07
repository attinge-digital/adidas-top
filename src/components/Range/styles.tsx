import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  align-self: center;

  h1,
  p {
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
  }

  h1 {
    font-size: 0.875rem !important;
    letter-spacing: 0.24em;
  }

  p {
    font-size: 0.625rem;
    letter-spacing: 0.06em;
  }

  .labels {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  *:focus-visible {
    outline: none !important;
  }

  @media (min-width: 744px) {
    .range-container {
      height: 3rem !important;

      .range-circle {
        height: 1.5rem !important;
        width: 1.5rem !important;
      }
    }

    h1 {
      font-size: 1.5rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }
`;
