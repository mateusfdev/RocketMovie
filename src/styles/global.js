import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;

  }

  body,
  input,
  button,
  text {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;

  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover,
  button:hover  {
    filter: brightness(.9);
  }

  p{
    margin: 80px;
    margin-top: -240px;
    font-size: 18px;
  } 


`;