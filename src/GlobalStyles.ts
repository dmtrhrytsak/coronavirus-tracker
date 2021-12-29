import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body,
  h3,
  p {
    margin: 0;
  }

  button,
  input {
    border: none;

    font-family: inherit;

  }

  button {
    cursor: pointer;
  }

  body {
    background-color: #EEEEEE;

    font-family: 'Libre Franklin', sans-serif;
  }
`;

export default GlobalStyles;
