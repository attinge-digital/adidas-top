import styled from "styled-components";

export const EmblaContainer = styled.div`
  width: 100%;

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
  }

  .embla__slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      display: flex;
      width: 95%;
    }

    span.react-loading-skeleton {
      height: 15rem;
    }

    img {
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
