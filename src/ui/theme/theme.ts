import { createTheme } from '@material-ui/core/styles';

export const muiDefaultTheme = createTheme();

const PALETTE = {
    primary: {
        //main: '#bf360c', // laranja
        main: '#056AC0',
        light: '#067CE1',
        dark: '#04589F',
        contrastText: muiDefaultTheme.palette.secondary.contrastText, // #FFF
    },
    secondary: {
        main: muiDefaultTheme.palette.secondary.main,
        light: '#1590F9',
        dark: '#034984',
        contrastText: muiDefaultTheme.palette.secondary.contrastText, // #FFF
    },
};

const TYPOGRAPHY = {
    fontFamily: [
        'Roboto',
    ].join(','),
}

export const thorsonTheme = createTheme({
    palette: PALETTE,
    typography: TYPOGRAPHY
});