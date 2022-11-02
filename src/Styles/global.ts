import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    :focus{
        outline: 0;
    }
    body{
        background:${props=>props.theme['white']};
        -webkit-font-smoothing:antialiased;
    }
    body, input, text-area, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400px;
        font-size: 1rem;
    }
    `
export const GlobalStyleDiv = styled.div`
    width: 90vw;
    background:${props=>props.theme["background"]};
    height: 100%;
    margin-left: 5rem;
`