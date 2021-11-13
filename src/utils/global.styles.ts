import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Lato', sans-serif;
    }

    #root {
        margin:0 auto;
    }
`;

export const fontSizes = {
    small: '14px',
    medium: '16px',
    large: '18px',
    extraLarge: '22px'
};

export const colors = {
    dark: 'rgba(0, 17, 34, 0.8)',
    grey: 'rgba(0, 17, 34, 0.3)',
    lightGrey: '#EEEEEE'
};

export const fontWeights = {
    light: 400,
    regular: 500,
    semibold: 600,
    bold: 700
};