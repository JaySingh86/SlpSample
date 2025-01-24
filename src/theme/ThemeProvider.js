import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
