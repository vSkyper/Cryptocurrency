import { createContext, useContext } from 'react';

export type ThemeContent = {
  themeMode: boolean;
  setThemeMode: (themeMode: boolean) => void;
};

export const ThemeContext: React.Context<ThemeContent> =
  createContext<ThemeContent>({
    themeMode: true,
    setThemeMode: () => {},
  });

export const useThemeContext = () => useContext(ThemeContext);
