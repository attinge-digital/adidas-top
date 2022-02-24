import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 28.25rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0 3rem 0;
  align-self: center;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.125rem;
    line-height: 1.875rem;
    letter-spacing: 0.06em;
  }

  .title {
    margin-bottom: 0.9375rem;
  }

  .loading-txt {
    margin: auto;

    span {
      font-size: 1rem;
      font-family: "AdihausDINRegular", sans-serif;
      color: ${({ theme }) => theme.primaryOpacity};
    }

    .typed-cursor {
      display: none;
    }
  }

  button.primary {
    margin: 1.25rem 0 1.5rem 0;
  }

  h1.mail-call {
    margin: 0 0 0.5rem 0;
    font-size: 0.825rem;
    font-family: "AdihausDINRegular", sans-serif;
  }

  div.input-wrapper {
    margin: 0;
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
    }

    button {
      margin: 0;
      padding: 0;
      box-shadow: none;

      height: 2rem;
      width: 2.75rem;

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

  margin-bottom: 2rem;

  > div + div {
    margin-left: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 0.725rem;
      font-family: "AdihausDINRegular", sans-serif;
    }

    > span,
    .react-loading-skeleton {
      width: 100%;
      margin-top: -1px;
    }

    .impact-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.secondary};
      border-radius: 0.35rem;
      width: 6.5rem;
      margin-bottom: 0.755rem;

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

      border: 2px solid ${({ theme }) => theme.primary};
      border-radius: 0.35rem;
      width: 6.5rem;

      h1 {
        font-size: 0.825rem;
        font-family: "AdihausDinBold", sans-serif;
        color: ${({ theme }) => theme.primary};
        letter-spacing: 0.06em;
      }
    }
  }

  div.tamanhos {
    flex-direction: row;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secondary};

      h1 {
        font-family: "AdihausDINBold", sans-serif;
        font-size: 1.5725rem;
        color: white;
        text-transform: uppercase;
      }

      & + div {
        margin-left: 0.5rem;
      }
    }
  }
`;