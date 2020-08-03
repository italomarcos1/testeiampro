import styled from 'styled-components';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import bannermobile from '../../assets/headerbg.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;

  #phone {
    display: block;
    margin-top: 40px;
  }

  @media screen and (min-width: 900px) {
    #participe,
    #register,
    #phone {
      display: none;
    }
  }
`;

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.9);
  /* box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1); */
  padding: 10px 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

export const BannerContainer = styled.section`
  /** Grid Default Properties */

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-align: center;
  width: 100%;
  margin: 0 auto;

  /* End - Grid Default Properties */

  @media screen and (min-width: 100px) {
    background-image: url(${bannermobile});
    width: 100%;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    transition: 0.2s;
    height: 147px;
  }

  @media screen and (min-width: 900px) {
    height: 607px;
    background-image: url(${banner});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.2s;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  grid-column: 2/6;
  grid-row: 1;
  margin: 100px 0 0 170px;

  strong {
    text-align: left;
    font: 40px/48px 'SFProHeavy';
    letter-spacing: 0;
    width: 100%;
    color: #141530;
    text-transform: uppercase;
  }

  a {
    text-align: center;
    margin-top: 30px;
    align-self: flex-start;
    border-radius: 35px;
    background-color: #145ca7;
    padding: 16px 35px;
    font: 22px 'SFProSemibold';
    letter-spacing: 1px;
    color: #fff;
    user-select: none;

    &:hover {
      background: #3a99d7;
    }
  }

  @media screen and (min-width: 100px) {
    display: none;
  }

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const Title = styled.div`
  /* background-color: rgba(255, 255, 255, 0.6); */
  /* background: #ff0;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 66px;
  transition: 0.2s;
  grid-column: 1/9;
  grid-row: 1; */
`;

export const RegisterButton = styled(Link)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1;
  align-self: center;
  width: 100%;
  border: 2px solid #145ca7;
  background-color: #145ca7;
  height: 74px;
  font: 22px 'SFProBold';
  letter-spacing: 0px;
  color: #fff;

  &:hover {
    background: #3a99d7;
    border: 2px solid #3a99d7;
  }
`;

export const Info = styled.section`
  /** Grid Default Properties */

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  /* End - Grid Default Properties */

  @media screen and (min-width: 100px) {
    text-align: center;
    margin-top: 10px;
    padding: 0 20px;

    #phone {
      margin-top: 20px;
    }

    h2 {
      font: 18px 'SFProHeavy';
      color: #141530;
      text-transform: uppercase;
      grid-column: 1/9;
    }

    h4 {
      grid-column: 1/9;
      font: 18px 'SFProLight';
      letter-spacing: 0.5px;
      color: #636363;
      margin-top: 10px;
      line-height: 28px;
    }

    strong {
      font: 20px 'SFProBold';
      color: #dd1846;
      grid-column: 2/8;
    }
  }

  @media screen and (min-width: 900px) {
    text-align: center;
    margin-top: 10px;

    h2 {
      grid-column: 2/8;
      text-align: center;
      font: 40px/48px 'SFProHeavy';
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
    }

    h4 {
      grid-column: 2/8;
      margin-top: 23px;
      font: 24px/30px 'SFPro';
      letter-spacing: 0.5px;
      color: #636363;
      margin-bottom: 44px;
    }

    strong {
      display: none;
    }
  }
`;

export const Services = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 44px;

  @media screen and (min-width: 100px) {
    text-align: center;

    ul {
      grid-column: 2/8;
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      margin-top: 40px;
      position: relative;
      padding: 0 20px;
    }

    strong {
      font: 18px 'SFProBold';
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
      margin-top: 20px;
    }

    h2 {
      font: 16px 'SFPro';
      letter-spacing: 0.5px;
      line-height: 24px;
      color: #535353;
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 900px) {
    ul {
      grid-column: 2/8;
      display: flex;
      grid-gap: 20px;
      align-self: center;
      align-items: center;
      justify-content: center;
      /* justify-content: space-between; */
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      margin-top: 0px;
      position: relative;

      width: 381px;
      height: 371px;
      padding: 17px 7px;

      background: #fff;
      border: 1px solid #eee;
    }

    img {
      margin-bottom: 10px;
    }

    strong {
      font: 20px 'SFProBold';
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
      margin-top: 20px;
    }

    h2 {
      font: 18px 'SFPro';
      letter-spacing: 0.5px;
      color: #636363;
      line-height: 26px;
      margin-top: 0px;
    }
  }
`;

export const Highlights = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  text-align: center;
  margin-bottom: 200px;

  @media screen and (min-width: 100px) {
    #registerWebHighlight {
      display: none;
    }

    text-align: center;
    height: 501px;
    background: #f3f6f6;
    margin-bottom: 200px;
    padding: 0 20px;

    strong {
      font: 22px 'SFProBold';
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
      grid-column: 1/9;
      grid-row: 1;
      margin-top: 51px;
    }

    h2 {
      grid-column: 1/9;
      font: 18px 'SFPro';
      letter-spacing: 0.5px;
      color: #636363;
      line-height: 26px;
      grid-row: 2;
      margin-top: 22px;
    }

    div {
      align-self: center;
      grid-column: 1/9;
    }
    img {
      width: 85%;
    }
  }

  @media screen and (min-width: 900px) {
    height: 373px;
    margin-top: 113px;
    background: #f3f6f6;
    text-align: center;
    margin-top: 40px;

    #registerWebHighlight {
      display: flex;
    }

    strong {
      grid-row: 1;
      margin-top: 51px;

      grid-column: 3/6;
      height: 48px;

      text-align: left;
      font: 40px/48px 'SFProHeavy';
      letter-spacing: 0;
      width: 100%;
      color: #1e1e1e;
      text-transform: uppercase;
    }

    h2 {
      margin-top: 132px;
      grid-column: 3/5;
      grid-row: 1;
      text-align: left;
      align-self: flex-start;
      font: 21px 'SFProLight';
      letter-spacing: 0.5px;
      color: #636363;
      width: 120%;
      height: 99px;
    }

    div {
      align-self: center;
      grid-column: 6/9;
    }
    img {
      width: 90%;
      margin-top: -80px;
    }

    a {
      grid-column: 3/5;
      grid-row: 1;
      margin-top: 250px;
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      background: #145ca7;
      border: 2px solid #145ca7;
      border-radius: 35px;
      width: 95%;
      font: 22px 'SFProSemibold';
      letter-spacing: 1px;
      color: #fff;
      padding: 16px 35px;
      margin-left: 0px;
      user-select: none;

      &:hover {
        background: #3a99d7;
        border: 2px solid #3a99d7;
      }
    }
  }
`;

export const EasyToHire = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;

  @media screen and (min-width: 100px) {
    display: none;
  }
  @media screen and (min-width: 900px) {
    display: grid;
  }

  width: 100%;
  margin: 0 auto;

  grid-column: 3/8;

  #phonebottom {
    align-self: flex-end;
    /* background-color: #3af9d7; */

    grid-column: 3/5;
    grid-row: 1;
  }

  img {
    width: 120%;
  }
`;

export const EasyToHireInfo = styled.div`
  grid-column: 4/7;
  width: 100%;
  margin: 20px auto;

  /* background-color: #0009f7; */

  grid-column: 1/9;
  width: 80%;
  margin: 20px auto;

  @media screen and (min-width: 900px) {
    grid-column: 5/8;
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    strong {
      grid-column: 2/8;
      text-align: left;
      font: 40px/48px 'SFProHeavy';
      letter-spacing: 0px;
      color: #1e1e1e;
      text-transform: uppercase;
    }

    h3 {
      grid-column: 2/8;
      margin-top: 23px;
      font: 20px 'SFPro';
      letter-spacing: 0.5px;
      color: #636363;
      text-align: left;
      margin-bottom: 44px;
    }

    ul {
      display: flex;

      flex-direction: column;

      li {
        width: 70%;
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 20px;
          h2 {
            font: 20px 'SFProBold';
            letter-spacing: 0px;
            color: #1e1e1e;
            text-transform: uppercase;
            margin-top: 20px;
            text-align: left;
          }

          h4 {
            font: 18px 'SFPro';
            letter-spacing: 0.5px;
            color: #636363;
            line-height: 28px;
            margin-top: 10px;
            text-align: left;
          }
        }
      }
    }
  }
`;

export const Bubbles = styled.section`
  display: flex;

  width: 80%;
  margin: 0 auto;

  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 313px;
    height: 313px;
  }
`;
