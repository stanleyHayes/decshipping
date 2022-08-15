import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularB, GoogleSans, TTSquares'
    },
    palette: {
        primary: {
            main: '#f9ab00'
        },
        secondary: {
            main: '#000000'
        },
        text: {
            primary: '#202124',
            secondary: '#5f6368',
            active: '#f8f9fa',
            inactive: '#d2d3d7'
        },
        mode: 'light',
        background: {
            paper: '#ffffff',
            default: '#e8eaed',
            light: 'rgba(232,234,237,0.3)',
            appBar: 'rgba(91,91,91,0.85)',
            transparent: 'rgba(232,234,237,0.3)'
        },
        light: {
            secondary: 'rgba(26,115,232,0.3)',
            primary: 'rgba(52,168,83,0.3)',
            red: 'rgba(217,48,37,0.3)',
            yellow: 'rgba(249,171,0,0.3)',
            green: 'rgba(52,168,83,0.3)',
            blue: 'rgba(26,115,232,0.3)',
            white: 'rgba(255, 255, 255, 0.3)',
            active: 'rgba(255, 255, 255, 0.3)'
        },
        colors: {
            yellow: '#f9ab00',
            red: '#d93025',
            blue: '#1a73e8',
            green: '#34a853'
        }
    },
    shape: {
        borderRadius: 0
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'TTSquares, EuclidCircularB, GoogleSans, TTSquares'
    },
    palette: {
        primary: {
            main: '#f9ab00'
        },
        secondary: {
            main: '#000000'
        },
        text: {
            primary: '#f8f9fa',
            secondary: '#d2d3d7',
            active: '#f8f9fa',
            inactive: '#d2d3d7'
        },
        mode: 'dark',
        background: {
            paper: '#303136',
            default: '#202124',
            light: 'rgba(32,33,36,0.3)',
            appBar: 'rgba(32,33,36,0.85)',
            transparent: 'rgba(248,249,250,0.15)'
        },
        light: {
            secondary: 'rgba(26,115,232,0.3)',
            primary: 'rgba(52,168,83,0.3)',
            red: 'rgba(217,48,37,0.3)',
            yellow: 'rgba(249,171,0,0.3)',
            green: 'rgba(52,168,83,0.3)',
            blue: 'rgba(26,115,232,0.3)',
            white: 'rgba(255, 255, 255, 0.3)',
            active: 'rgba(255, 255, 255, 0.3)'
        },
        colors: {
            yellow: '#f9ab00',
            red: '#d93025',
            blue: '#1a73e8',
            green: '#34a853',
            white: '#ffffff'
        }
    },
    shape: {
        borderRadius: 0
    }
});

export const THEMES = {lightTheme, darkTheme};
