import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }
  body {
    margin:0;
    padding:0;
    font-family: "나눔세리프" , "Noto Serif KR";
  }
  a, a:active, a:hover, a:visited {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  button, input {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
  select {
    outline:none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  select::-ms-expand { display:none; } 
`;

export default GlobalStyles;