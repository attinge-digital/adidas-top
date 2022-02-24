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

  padding: 3.25rem 0 1.4375rem 0;
  align-self: center;

  h1,
  h2,
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    width: 90%;
  }

  h1 {
    font-family: "AdihausDINBold", sans-serif;
    font-size: 1.125rem;
    line-height: 1.1875rem;
    letter-spacing: 0.06em;
  }

  h2 {
    font-family: "AdihausDINBold", sans-serif;
    font-size: 0.6875rem;
    line-height: 0.8125rem;
    letter-spacing: 0.24em;
    margin: 1rem 0 0.625rem 0;
  }

  h3 {
    font-family: "AdihausDINBold", sans-serif;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.75rem;
    line-height: 0.5rem;
    letter-spacing: 0.06em;
    margin: 0.75rem 0 0.875rem 0;
  }

  .title {
    margin-bottom: 0.9375rem;
  }

  .subtitle {
    margin-bottom: 0.625rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 1.25rem 0 1.25rem 0;

  * {
    width: 32%;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 90%;
  margin-bottom: 1rem;

  .item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    padding: 0 0 0.75rem 0;

    width: 30%;

    span,
    .react-loading-skeleton {
      width: 100%;
    }

    h1 {
      font-family: "AdihausDINBold", sans-serif;
      font-size: 0.625rem;
      letter-spacing: 0.06em;
      display: flex;
      color: ${({ theme }) => theme.textSecondary};
    }

    img {
      width: 2rem;
      height: 2rem;
      object-fit: contain;
      margin-right: 0.5rem;
    }
  }
`;