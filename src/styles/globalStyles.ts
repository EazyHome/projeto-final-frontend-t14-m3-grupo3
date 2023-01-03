import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }

    :root {
        --color-primary: #FF6600;
        --color-secondary: #B33F00;
        --color-tertiary: #662400;
        --color-opposite-1:#006663;
        --color-opposite-2:#00B3AD;
        --color-grey100: #333333;
        --color-grey50: #828282;
        --color-grey20: #E0E0E0;
        --color-grey0: #F5F5F5;
        --color-white: #FFFFFF;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #27AE60;
        --color-information: #155BCB;
        --color-overlay-black: rgba(0,0,0,.5);

        --font-size-32: 2rem;
        --font-size-30: 1.875rem;
        --font-size-28: 1.75rem;
        --font-size-24: 1.5rem;
        --font-size-20: 1.25rem;
        --font-size-18: 1.125rem;
        --font-size-16: 1rem;
        --font-size-14: 0.875rem;
        --font-size-12: 0.75rem;

        --radius-1: 0.5rem;
        --radius-2: 0.25rem;
        --radius-50:50%;

    }
`;
