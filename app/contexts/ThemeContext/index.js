import React, { useState, createContext, useContext } from 'react';
import Constant from '../../assets/Constant';

export const ThemeContext = createContext();

ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [colors, setColors] = useState(isDark ? Constant.darkColors : Constant.lightColors);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, setColors, colors }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
