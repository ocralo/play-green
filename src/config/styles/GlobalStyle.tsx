import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    font-family: 'DM Sans', sans-serif;
    font-family: 'Epilogue', sans-serif;
  }
`

export default GlobalStyle
