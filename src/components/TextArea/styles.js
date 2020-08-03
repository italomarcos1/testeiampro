import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ full }) => (full ? '100%' : '340px')};

  height: 177px;

  textarea {
    width: ${({ full }) => (full ? '100%' : '340px')};
    height: 150px;
    resize: none;
    margin-top: 7px;
    color: #222;
    font: 14px 'SFPro';
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px 20px;
  }
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #666;
`;
