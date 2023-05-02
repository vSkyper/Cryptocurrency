import { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import {
  Theme,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './store';
import { Home } from './pages';
import { Footer, Navbar } from './components';

export default function App() {
  const [themeMode, setThemeMode] = useState<boolean>(true);
  let theme: Theme = createTheme({
    palette: {
      mode: themeMode ? 'dark' : 'light',
    },
  });

  theme = responsiveFontSizes(theme);

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem('localTheme');
    setThemeMode(storedTheme ? JSON.parse(storedTheme) : true);
  }, []);

  useEffect(() => {
    localStorage.setItem('localTheme', JSON.stringify(themeMode));
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
          <Navbar />
        </ThemeContext.Provider>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/coins/:id' element={<Coin />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
