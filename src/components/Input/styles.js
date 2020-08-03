import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ full }) => (full ? '100%' : '340px')};
  height: ${({ full }) => (full ? '75px' : '60px')};

  input {
    width: 100%;
    height: 50px;
    margin-top: 7px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px 20px;
    font: 16px 'SFPro';

    color: #222;

    &::placeholder {
      color: #111;
    }
  }
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #666;
`;
