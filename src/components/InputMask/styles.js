import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: 60px;

  div {
    display: flex;
    justify-content: center;
    width: 340px;

    input {
      &.areaCode {
        text-align: center;
        width: 62px;
        color: #666;
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        border-right-width: 0px;
      }

      width: 278px;
      height: 50px;
      margin-top: 7px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 15px 20px;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;

      color: #666;

      &::placeholder {
        color: #111;
      }
    }
  }
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #666;
`;
