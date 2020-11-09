import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
    --main-bg-color:${props => props.theme.mainBGcolor};
    --main-text-color:${props => props.theme.mainTextColor};
    --accent-color: ${props => props.theme.accent};
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