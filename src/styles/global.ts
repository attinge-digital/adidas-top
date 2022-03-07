import { createGlobalStyle } from "styled-components";

// prettier-ignore
export default createGlobalStyle`
  @font-face {
    font-family: "AdihausDINBold";
    src: url("/static/fonts/AdihausDINBold.ttf");
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "AdihausDINRegular";
    src: url("/static/fonts/AdihausDINRegular.ttf");
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.background}
  }

  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
  }

  button {
    color: white;
    border: 0;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;

    transition: filter 0.4s, background-color 0.4s, border 0.4s;

    &:active {
      filter: brightness(0.8);
    }

    img {
      max-width: 1.5rem;
      margin-left: 0.75rem;
    }

    &.back {
      color: ${({ theme }) => theme.primary};
      font-family: "AdihausDINBold", sans-serif;
      font-size: 0.875rem;
      font-weight: bold;
      letter-spacing: 0.24em;
      text-decoration: underline;
      border: 0;
      padding: 0;
      background-color: transparent;
      margin: 0.75rem 0;

      @media (min-width: 744px) {
        margin: 2.5rem 0;
        font-size: 1.5rem;
      }
    }

    &.primary {
      font-family: "AdihausDINBold", sans-serif;
      font-size: 0.875rem;
      line-height: 100%;
      font-weight: bold;
      letter-spacing: 0.24em;

      height: 2.75rem;
      padding: 0 0.8125rem;

      background: ${({ theme }) => theme.primary};
      box-shadow: ${({ theme }) => theme.background} 4px 4px 0px -1.75px, ${({ theme }) => theme.primary} 4px 4px;

      @media (min-width: 744px) {
        height: 6rem;
        width: 18.375rem;

        font-size: 1.625rem;
        
        img {
          max-width: 3.75rem;
        }
      }
    }
    
    &.secondary {
      font-family: "AdihausDINBold", sans-serif;
      color: ${({ theme }) => theme.secondaryOpacity};
      font-size: 0.625rem;
      line-height: 0.7rem;
      font-weight: bold;
      letter-spacing: 0.24em;

      height: 2.25rem;
      padding: 0 !important;
      border-radius: 3px;

      background: transparent;
      border: 1px solid ${({ theme }) => theme.secondaryOpacity};

      &.active {
        color: white;
        background: ${({ theme }) => theme.secondary};
        border: 1px solid ${({ theme }) => theme.secondary};
      }
    }
  }  
`;
