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
  }

  img {
    width: 80%;
    object-fit: contain;
    max-width: 11.875rem;
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
  }
`;
