import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
}
  body {
    color: ${(props) => props.theme.colors.textColor};
    font-family:  ${(props) => props.theme.font.text};
    background: ${(props) => props.theme.colors.radialGradient};
  }

  #root{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default GlobalStyle;