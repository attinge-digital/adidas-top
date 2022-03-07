import styled from "styled-components";

export const EmblaContainer = styled.div`
  width: 100%;
  max-height: 20rem;

  @media (min-width: 744px) {
    max-height: 36.25rem;
  }

  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .embla {
    width: 90%;
    max-height: 90rem;
  }

  .embla__slide {
    max-height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      display: flex;
      width: 95%;
    }

    span.react-loading-skeleton.seio {
      height: 17.5rem;

      @media (min-width: 744px) {
        height: 27.5rem !important;
        max-height: 27.5rem !important;
      }
    }

    img {
      max-height: 20rem;
      width: 95%;
      object-fit: contain;
    }

    p {
      font-family: "AdihausDINRegular";
      font-size: 0.925rem;
      line-height: 1.375rem;
      text-align: center;
      letter-spacing: 0.12em;
      color: ${({ theme }) => theme.primary};
      opacity: 0.5;
      margin-top: 1rem;
    }

    @media (min-width: 744px) {
      height: 36.25rem;
      max-height: 36.25rem;

      img {
        max-height: 27.5rem;
      }
    }
  }

  .seta-loading-skeleton {
    width: 2rem;
    height: 1rem;

    @media (min-width: 744px) {
      min-width: 3rem !important;
      height: 1.375rem;
    }
  }

  button {
    background: transparent;

    &:disabled {
      opacity: 0.2;
    }

    img {
      width: 2.5rem;
      object-fit: contain;
      margin: 0;

      @media (min-width: 744px) {
        min-width: 3rem;
      }
    }
  }
`;
