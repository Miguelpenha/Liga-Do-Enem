import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        flex-direction: column;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.background};
    }

    *::selection {
        background-color: ${props => props.theme.primary};
    }

    body {
        display: flex;
        background-color: ${props => props.theme.color};
    }
`