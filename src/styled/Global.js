import { createGlobalStyle } from 'styled-components';

const isDarkTheme = true

export const GlobalStyle = createGlobalStyle`

:root{
    --main-bg-color:${isDarkTheme ? '#333' : '#f9f9f9'};
    --main-text-color:${isDarkTheme ? '#f9f9f9' : '#333'};
    --accent-color: #e16365;
}
* {
    box-sizing: border-box;
    margin: 0;
    color: var(--main-text-color);
    font-family: sans-serif;
    font-weight: 300;
}
h1, h2 {
    margin-bottom: 2rem;
}
`;