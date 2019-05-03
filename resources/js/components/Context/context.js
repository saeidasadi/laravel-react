import React from 'react';

export const themes = {
    red: {
        background: '#ff4c60',
        foreground: '#ffffff',
    },
    green: {
        background: '#6bff53',
        foreground: '#ffffff',
    },
    blue: {
        background: '#819bff',
        foreground: '#ffffff',
    },
};

export const ThemeContext = React.createContext(
    themes.green
);