import styled from "styled-components";

export const EmblaContainer = styled.div`
  width: 100%;
  max-height: 20rem;

  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .seta-loading-skeleton {
    width: 2rem;
    height: 1rem;
  }

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

    span.react-loading-skeleton {
      height: 17.5rem;
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
    }
  }
`;
