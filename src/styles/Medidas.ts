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
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.3475rem 0;
  align-self: center;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.125rem;
    line-height: 1.875rem;
    letter-spacing: 0.06em;
  }

  > h1 {
    margin-bottom: 2rem;
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

  margin: 2.5rem 0 1rem 0;

  > div {
    width: calc(100% - 7.5rem);
  }

  .medidas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 6rem;
    position: relative;

    padding: 0.625rem;

    background-color: ${({ theme }) => theme.backgroundSecondaryOpc};

    div {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 0.625rem 0;
      border: 1px solid ${({ theme }) => theme.primaryOpacity};
      background-color: white;

      & + div {
        margin-top: 0.625rem;
      }

      p {
        font-family: "AdihausDINBold";
        font-size: 0.925rem;
        line-height: 1.375rem;
        text-align: center;
        letter-spacing: 0.24em;
        color: ${({ theme }) => theme.primary};
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: -0.275rem;
      left: 0;
      width: 0;
      height: 0;
      border-left: 3rem solid transparent;
      border-right: 3rem solid transparent;
      border-bottom: 0.275rem solid
        ${({ theme }) => theme.backgroundSecondaryOpc};
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -0.275rem;
      left: 0;
      width: 0;
      height: 0;
      border-left: 3rem solid transparent;
      border-right: 3rem solid transparent;
      border-top: 0.275rem solid ${({ theme }) => theme.backgroundSecondaryOpc};
    }
  }
`;
