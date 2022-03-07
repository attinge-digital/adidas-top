import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;
  /* padding-bottom: 4rem; */

  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 28.25rem;

  @media (min-width: 744px) {
    max-width: 41.4375rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.125rem;
    line-height: 1.1875rem;
    letter-spacing: 0.06em;

    @media (min-width: 744px) {
      line-height: unset;
      font-size: 1.75rem;
    }
  }

  .title {
    margin-bottom: 0.9375rem;
  }

  .loading-txt {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 23.5rem;

    span {
      font-size: 1rem;
      font-family: "AdihausDINRegular", sans-serif;
      color: ${({ theme }) => theme.primaryOpacity};
    }

    .typed-cursor {
      display: none;
    }

    @media (min-width: 744px) {
      span {
        font-size: 1.75rem;
      }

      max-height: 47.6425rem;
    }
  }

  button.primary {
    margin: 0 0 1.5rem 0;
  }

  h1.mail-call {
    margin: 0 0 0.5rem 0;
    font-size: 0.825rem;
    font-family: "AdihausDINRegular", sans-serif;

    @media (min-width: 744px) {
      font-size: 1.5rem;
      margin: 1rem 0 0.75rem 0;
    }
  }

  div.input-wrapper {
    margin: 0 0 5rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
      outline: none;

      width: calc(90% - 2.75rem);
      max-width: 12.625rem;
      height: 2rem;

      border-radius: 0;
      border: 1px solid ${({ theme }) => theme.primaryOpacity};
      padding-left: 0.5rem;

      font-size: 0.825rem;
      text-transform: lowercase;
      font-family: "AdihausDINBold";
      color: ${({ theme }) => theme.primaryOpacity};

      &::placeholder {
        color: ${({ theme }) => theme.primaryOpacity};
      }

      transition: border 0.4s;

      &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
      }

      @media (min-width: 744px) {
        max-width: 23.5rem;
        width: calc(90% - 5.125rem);
        height: 3.85rem;
        font-size: 1.5rem;
        padding-left: 1.625rem;
      }
    }

    button {
      margin: 0;
      padding: 0;
      box-shadow: none;

      height: 2rem;
      width: 2.75rem;

      @media (min-width: 744px) {
        width: 5.125rem;
        height: 3.85rem;
      }

      img {
        margin: 0;
      }
    }
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  margin: 0.25rem 0 1.75rem 0;

  > div + div {
    margin-left: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      font-size: 0.725rem;
      font-family: "AdihausDINRegular", sans-serif;
    }

    > span,
    .react-loading-skeleton {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .impact-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.secondary};
      border-radius: 3px;
      height: 1.5rem;
      width: 5.1875rem;
      margin-bottom: 0.5rem;

      h1 {
        font-size: 0.75rem;
        font-family: "AdihausDinBold", sans-serif;
        color: white;
        letter-spacing: 0.24em;
      }
    }

    .code-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border: 1px solid ${({ theme }) => theme.primary};
      border-radius: 3px;
      height: 1.5rem;
      width: 5.1875rem;

      h1 {
        font-size: 0.825rem;
        font-family: "AdihausDinBold", sans-serif;
        color: ${({ theme }) => theme.primary};
        letter-spacing: 0.06em;
      }
    }
  }

  div.tamanhos {
    margin-top: 0.625rem;
    flex-direction: row;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.25rem;
      width: 3.25rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secondary};

      h1 {
        font-family: "AdihausDINBold", sans-serif;
        font-size: 1.5rem;
        color: white;
        text-transform: uppercase;
      }

      & + div {
        margin-left: 0.5rem;
      }
    }
  }

  @media (min-width: 744px) {
    transform: scale(1.625);
    margin: -1rem 0 4rem 0;
  }
`;
