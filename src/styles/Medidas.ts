import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 28.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  justify-content: center;
  max-height: 28.5rem;
  align-self: center;

  > span,
  .react-loading-skeleton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;

    * {
      width: 90%;
    }
  }

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.125rem;
    line-height: 1.1875rem;
    letter-spacing: 0.06em;
  }

  > h1 {
    margin-bottom: 1.125rem;
  }

  .title {
    margin-bottom: 0.9375rem;
  }

  .subtitle {
    margin-bottom: 0.625rem;
  }

  button.primary {
    margin-top: 1.5rem;
  }
`;

export const MedidasContainer = styled.div`
  width: 85%;
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 1.125rem 0 1rem 0;

  > div {
    width: calc(100% - 7rem);
  }

  .medidas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 4.75rem;
    position: relative;

    padding: 0.625rem 0;

    background-color: ${({ theme }) => theme.backgroundSecondaryOpc};

    div {
      width: 85%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 2.25rem;
      border: 1px solid ${({ theme }) => theme.primaryOpacity};
      background-color: white;

      & + div {
        margin-top: 0.75rem;
      }

      p {
        font-family: "AdihausDINBold";
        font-size: 0.875rem;
        line-height: 1.1875rem;
        text-align: center;
        letter-spacing: 0.24em;
        color: ${({ theme }) => theme.primary};
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: -0.125rem;
      left: 0;
      width: 0;
      height: 0;
      border-left: 2.375rem solid transparent;
      border-right: 2.375rem solid transparent;
      border-bottom: 0.125rem solid
        ${({ theme }) => theme.backgroundSecondaryOpc};
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -0.125rem;
      left: 0;
      width: 0;
      height: 0;
      border-left: 2.375rem solid transparent;
      border-right: 2.375rem solid transparent;
      border-top: 0.125rem solid ${({ theme }) => theme.backgroundSecondaryOpc};
    }
  }
`;
