import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Jua";
  }

  html {
      font-size: 62.5%;
  }
  

  body {
      font-size : 3rem;
      height: 100vh;
      background-color:${({ theme }) => theme.colors.secondColor};
      user-select: none;
      -webkit-user-select: none; 
      -moz-user-select: none;   
      -ms-user-select: none;     
      -o-user-select: none;
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

  button{
    &:focus{
      outline:none;
    }
  }

  input {
    outline:none;
    &:focus::placeholder{
      color:transparent;
    }
  }

  .flex {
    display:flex;
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
