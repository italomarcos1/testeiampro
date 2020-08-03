import { createGlobalStyle } from 'styled-components';
import SFPro from '../assets/fonts/SanFrancisco.otf';
import SFProSemibold from '../assets/fonts/SanFranciscoSemibold.otf';
import SFProBold from '../assets/fonts/SanFranciscoBold.otf';
import SFProHeavy from '../assets/fonts/SanFraciscoHeavy.otf';
import SFProLight from '../assets/fonts/SanFranciscoLight.otf';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    box-sizing:border-box;
  }

  body,
  main,
  p,
  a,
  ul,
  li {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  button {
    cursor:pointer;
    user-select:none;
  }

  a, a:hover, a:focus {
    transition: all .3s;
  }

  li {
    list-style-type: none;
  }

  @font-face {
    font-family: "SFPro";
    src: local('SFPro'), url(${SFPro}) format('opentype');
  }

  @font-face {
    font-family: "SFProSemibold";
    src: local('SFProSemibold'), url(${SFProSemibold}) format('opentype');
  }

  @font-face {
    font-family: "SFProBold";
    src: local('SFProBold'), url(${SFProBold}) format('opentype');
  }

  @font-face {
    font-family: "SFProHeavy";
    src: local('SFProHeavy'), url(${SFProHeavy}) format('opentype');
  }
  
  @font-face {
    font-family: "SFProLight";
    src: local('SFProLight'), url(${SFProLight}) format('opentype');
  }

  body, input, button, #root {
    overflow-x: hidden;
    font-family: "SFPro";
  }
`;
