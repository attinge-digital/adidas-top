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
`;
