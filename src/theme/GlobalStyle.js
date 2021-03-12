import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin:0;
    padding:0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width:56.25em) {
        font-size: 50%;
    }
    @media only screen and (max-width: 37.5em) {
        font-size: 43.75%;
    }
    scroll-behaviour: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #101E5A;
    line-height: 1.6;
    background-color: #FAF9FE;
    min-height: 100vh;
    width: 100%;
}

`;

export default GlobalStyle;
