import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
  }
  

  body {
      font-size : 3rem;
      font-family: 'Jua';
      background-color:${({ theme }) => theme.colors.secondColor};
      user-select: none;
      -webkit-user-select: none;  /* Chrome all / Safari all */
      -moz-user-select: none;     /* Firefox all */
      -ms-user-select: none;      /* IE 10+ */
      -o-user-select: none;
      /* overflow-y:scroll; */
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style-type: none;
  }

  img{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flex-center-R {
    display:flex;
    align-items:center;
    justify-content: center;
  }

  .flex-center-C {
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
  }
`;

export default GlobalStyles;
