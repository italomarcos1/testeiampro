import styled from 'styled-components';
import { Form as TForm } from '@unform/web';

import banner from '../../assets/banner.jpg';
import header from '../../assets/headerbg.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 50px) {
    #participe {
      background-color: #145ca7;
      height: 74px;
      width: 100%;
      font: 22px 'SFProBold';
      letter-spacing: 0px;
      color: #fff;
    }

    #phone {
      display: none;
      margin-top: 40px;
    }
  }

  @media screen and (min-width: 900px) {
    #participe,
    #register,
    #phone {
      margin-top: 0px;
      display: block;
    }
  }
`;

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 66px;
  transition: 0.2s;
  grid-column: 1/9;
  grid-row: 1;
`;

export const Logo = styled.div`
  margin-top: 10px;
  grid-column: 1/9;
  grid-row: 1;
  text-align: center;

  img {
    grid-column: 3/7;
    text-align: center;
  }
`;

export const Header = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 100px) {
    background-image: url(${header});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    padding-top: 10px;
    height: 187px;
    transition: 0.2s;
  }

  @media screen and (min-width: 900px) {
    background-image: none;
    height: 66px;
    padding-top: 10px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Info = styled.section`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;

  h2 {
    font: 22px 'SFProHeavy';
    color: #141530;
    text-transform: uppercase;
    grid-column: 2/8;
  }

  h4 {
    font: 20px 'SFPro';
    color: #535353;
    grid-column: 2/8;
  }

  @media screen and (min-width: 100px) {
    margin-top: 50px;
    padding: 0;

    h2 {
      font: 18px/21px 'SFProHeavy';
      letter-spacing: 0px;
      color: #141530;
      text-transform: uppercase;
      grid-column: 1/9;
    }

    h4 {
      text-align: center;
      font: 16px/30px 'SFPro';
      color: #535353;
      letter-spacing: 0px;
      grid-column: 1/9;
    }
  }

  @media screen and (min-width: 900px) {
    h2 {
      text-align: center;
      font: 40px/48px 'SFProHeavy';
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
    }

    h4 {
      margin-top: 33px;
      text-align: center;
      font: 24px/30px 'SFPro';
      letter-spacing: 0px;
      color: #535353;
      margin-bottom: 44px;
    }
  }
`;

export const FormContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;

  grid-column: 2/8;

  div {
    align-self: center;
    grid-column: 3/4;
    grid-row: 1;
  }

  img {
    width: 150%;
  }
  @media screen and (min-width: 100px) {
    grid-column: 1/9;
    width: 100%;
  }
`;

export const Form = styled(TForm)`
  grid-column: 4/7;
  width: 100%;
  margin: 20px auto;

  @media screen and (min-width: 100px) {
    grid-column: 1/9;
    width: 100%;
    margin: 20px auto;
    #registerWeb {
      display: none;
    }
  }

  @media screen and (min-width: 900px) {
    grid-column: 4/7;
    width: 100%;
    margin: 20px auto;
    margin-left: 60px;
    #registerWeb {
      display: block;
    }
    button {
      width: 408px;
      height: 70px;
      margin-top: 30px;
      padding: 20px 37px;
      background: #0fcc96;
      border: 2px solid #0fcc96;
      border-radius: 35px;
      font: 22px 'SFProSemibold';
      letter-spacing: 1px;
      color: #fff;
      user-select: none;

      &:hover {
        background-color: #0cb587;
        border-color: #0cb587;
      }
    }
  }
`;

export const InputContainer = styled.div`
  grid-column: 4/9;
  width: 100%;
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (min-width: 100px) {
    flex-direction: column;
    grid-column: 1/9;
    align-items: center;
    width: 100%;
    input {
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    grid-column: 4/9;
    width: 100%;
    display: flex;
    flex-direction: row;

    height: 75px;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const FinishButton = styled.button`
  width: 100%;
  grid-column: 1/9;
  height: 70px;
  margin-top: 50px;
  border-radius: 0px;
  background: #0fcc96;
  border: 2px solid #0fcc96;
  font: 20px 'SFProBold';
  letter-spacing: 0px;
  color: #fff;
  text-align: center;

  &:hover {
    background-color: #0cb587;
    border-color: #0cb587;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const Footer = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;

  background-image: url(${banner});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-top: 10px;
  height: 187px;
  transition: 0.2s;

  @media screen and (min-width: 100px) {
    display: none;
  }

  @media screen and (min-width: 900px) {
    display: block;
    background-image: url(${banner});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    padding-top: 10px;
    height: 607px;
    transition: 0.2s;
    width: 100%;
    margin: 0 auto;
  }
`;
