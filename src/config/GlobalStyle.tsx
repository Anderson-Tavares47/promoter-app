import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, html, body{
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
}

a:hover{
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary}
}
`;

export default GlobalStyle;
