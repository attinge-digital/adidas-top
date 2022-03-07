import styled from "styled-components";

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 1.5rem 0 2.5rem 0; */
  max-height: 17.375rem;

  h1 {
    font-family: "AdihausDINBold", sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.24em;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    margin: 0.5rem 0;

    @media (min-width: 744px) {
      font-size: 1.25rem;
      margin: 1rem 0;
    }
  }

  img {
    width: 80%;
    object-fit: contain;
    max-width: 11.875rem;

    @media (min-width: 744px) {
      max-width: 22.5rem;
    }
  }

  > span {
    display: flex;
    width: 95%;
  }

  span.react-loading-skeleton.product {
    max-width: 11.875rem;

    @media (min-width: 744px) {
      max-width: 22.5rem;
      height: 22.5rem !important;
      max-height: 22.5rem !important;
    }
  }
`;

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .color {
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;

    &.active {
      border: 2px solid ${({ theme }) => theme.secondary};
    }

    & + .color {
      margin-left: 0.35rem;
    }

    @media (min-width: 744px) {
      height: 1.75rem;
      width: 1.75rem;
    }
  }
`;
