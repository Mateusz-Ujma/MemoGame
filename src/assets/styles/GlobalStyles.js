import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;    
    padding: 0;
    
    background-color: #1F2533;
    display: flex;
    flex-direction:column;
    
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
