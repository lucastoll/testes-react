import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

a{
    text-decoration: none;
    &:visited{
        color: inherit;
    }
}
`;