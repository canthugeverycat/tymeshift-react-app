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
    white: '#FFF',
    darkText: 'rgba(0, 17, 34, 0.8)',
    lightText: 'rgba(0, 17, 34, 0.3)',
    grey: '#EEEEEE',
    lightGrey: 'rgba(246, 246, 246, 0.2)'
};
