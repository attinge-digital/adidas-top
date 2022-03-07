import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 41.4375rem;
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0.75rem;

  @media (min-width: 744px) {
    max-height: calc(100% - 0.75rem);
  }
`;

export const Section = styled.section`
  height: 100%;
  width: calc(50% - 0.375rem);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    object-fit: cover;
    width: 100%;
  }

  img.top-left {
    flex: 1;
    max-height: 65%;
  }

  img.bottom-left {
    margin-top: 0.75rem;
    flex: 1;
    max-height: 35%;
  }

  img.top-right {
    transform: translateY(-0.75rem);
    height: 55%;
  }

  @media (min-width: 744px) {
    width: calc(50% - 0.525rem);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  flex: 1;

  img {
    width: 45%;
  }

  h1,
  h2 {
    width: 100%;
    letter-spacing: 0.4em;
    color: ${({ theme }) => theme.primary};
  }

  .title {
    font-size: 1.75rem;
    font-family: "AdihausDINBold", sans-serif;
    margin-top: 1rem;
    margin-bottom: 0.24rem;
  }

  .subtitle {
    font-size: 1rem;
    font-family: "AdihausDINRegular", sans-serif;
    margin-bottom: 1rem;
  }

  @media (min-width: 744px) {
    .title {
      font-size: 2.375rem;
      margin: 0.5rem 0;
    }

    .subtitle {
      font-size: 1.75rem;
      margin-bottom: 2.25rem;
    }
  }
`;
