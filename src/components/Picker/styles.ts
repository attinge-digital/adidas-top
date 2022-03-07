import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  max-width: 10rem;
  display: flex;

  padding: 0;
  border: 1px solid ${({ theme }) => theme.primaryOpacity};
  background-color: white;

  margin-bottom: 1.125rem;

  * {
    font-family: "AdihausDINBold";
    font-size: 1.3125rem;
    text-align: center;
    letter-spacing: 24%;
    color: ${({ theme }) => theme.primary};
    border: 0;
  }

  .rmc-picker {
    height: 3.75rem;

    .rmc-picker-mask {
      background-size: 100% 25% !important;
    }

    .rmc-picker-item {
      /* height: 1.575rem;
      line-height: 1.575rem; */
    }

    .rmc-picker-content {
      top: 0.65rem;
    }
  }

  @media (min-width: 744px) {
    margin-top: 0.75rem;
    margin-bottom: 3.875rem;
    max-width: 17.5rem;

    * {
      font-size: 1.875rem;
      letter-spacing: 24%;
    }

    .rmc-picker {
      height: 5.375rem;

      .rmc-picker-mask {
        background-size: 100% 30% !important;
      }

      .rmc-picker-item {
        /* height: 1.575rem;
      line-height: 1.575rem; */
      }

      .rmc-picker-content {
        top: 1.3rem;
      }
    }
  }
`;
