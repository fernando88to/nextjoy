import {Roboto} from '@next/font/google';
import {extendTheme} from '@mui/joy/styles';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});



export const themCustomizado = extendTheme({
    fontFamily: {
        display: "'Fira Sans', var(--joy-fontFamily-fallback)",
        body: "'Fira Sans', var(--joy-fontFamily-fallback)",
    },
});


// Create a theme instance.
/*
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;*/
