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
      font-family: 'Noto Sans bold';
      background-color:rgba(247,248,254);
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style-type: none;
  }
`;

export default GlobalStyles;
