import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #root {
      height: 100%;
  }
  a {
    color: #009cff;
    text-decoration: none;
  }
  a:hover {
    color: #fe4a49;
    text-decoration: underline;
  }
`

export default GlobalStyle
