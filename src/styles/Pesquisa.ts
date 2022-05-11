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
    margin-bottom: 1.625rem;

    @media (min-width: 744px) {
      line-height: unset;
      font-size: 1.75rem;
    }
  }

  h2 {
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.125rem;
    line-height: 1.25rem;
    letter-spacing: 0.06em;
    margin-bottom: 0.625rem;

    width: 90%;
    text-align: center;

    @media (min-width: 744px) {
      line-height: unset;
      font-size: 1.5rem;
    }
  }

  h3 {
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 0.6875rem;
    line-height: 0.8125rem;
    letter-spacing: 0.24em;
    margin: 0 0 1rem 0;

    width: 90%;
    text-align: center;

    @media (min-width: 744px) {
      line-height: unset;
      font-size: 1.125rem;
    }
  }

  button.primary {
    width: 34.15%;

    @media (min-width: 744px) {
      div {
        transform: scale(1.33);
      }
    }
  }

  .textarea-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    textarea {
      outline: none;

      min-width: 90%;
      max-width: 90% !important;
      min-height: 7.1875rem;
      max-height: 15.1875rem;

      border-radius: 0;
      border: 1px solid ${({ theme }) => theme.primaryOpacity};
      padding: 0.8rem;
      margin: 0.75rem 0 1.875rem 0;

      font-size: 0.825rem;
      text-transform: lowercase;
      font-family: "AdihausDINBold";
      color: ${({ theme }) => theme.primaryOpacity};

      transition: border 0.4s;

      &::placeholder {
        color: ${({ theme }) => theme.primaryOpacity};
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
      }

      @media (min-width: 744px) {
        font-size: 1.5rem;

        min-height: 12.5rem;
        max-height: 17.5rem;
        margin: 2rem 0 4rem 0;
      }
    }

    p {
      opacity: 0;
      transition: opacity 0.4s;

      position: absolute;
      bottom: 0.625rem;
      left: 50%;
      transform: translateX(-50%);

      font-family: "AdihausDINBold", sans-serif;

      font-size: 0.625rem;
      line-height: 0.75rem;

      width: 100%;
      text-align: center;
      letter-spacing: 0.24em;

      color: #ed1010;
    }

    &.invalid {
      textarea {
        border: 1px solid #ed1010;

        &,
        &::placeholder {
          color: #ed1010;
        }
      }

      p {
        opacity: 1;

        @media (min-width: 744px) {
          font-size: 1rem;
          bottom: 1.625rem;
        }
      }
    }
  }
`;

export const LevelsContainer = styled.div`
  width: 90%;
  max-width: 900px;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 0.375rem;

  margin-bottom: 2.5rem;

  div {
    width: 100%;
    aspect-ratio: 1;

    border-radius: 3px;
    background-color: #cc2929;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.4s;

    &.invalid {
      border: 1px solid #ed1010;

      @media (min-width: 744px) {
        border-width: 2px;
      }
    }

    p {
      font-size: 1rem;
      color: white;
      font-family: "AdihausDINBold", sans-serif;

      @media (min-width: 744px) {
        line-height: unset;
        font-size: 1.25rem;
      }
    }

    &.not-selected {
      opacity: 0.4;
    }

    &.level-2 {
      background-color: #c03727;
    }

    &.level-3 {
      background-color: #b44626;
    }

    &.level-4 {
      background-color: #a85424;
    }

    &.level-5 {
      background-color: #9c6222;
    }

    &.level-6 {
      background-color: #917121;
    }

    &.level-7 {
      background-color: #857f1f;
    }

    &.level-8 {
      background-color: #798d1d;
    }

    &.level-9 {
      background-color: #6d9c1c;
    }

    &.level-10 {
      background-color: #61aa1a;
    }
  }
`;
