import { createContext, useContext } from 'react';

export type ThemeContent = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const ThemeContext: React.Context<ThemeContent> =
  createContext<ThemeContent>({
    darkMode: true,
    setDarkMode: () => {},
  });

export const useThemeContext = () => useContext(ThemeContext);
