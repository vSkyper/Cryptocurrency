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
import { Coin, Home } from './pages';
import { Footer, Navbar } from './components';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  let theme: Theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  theme = responsiveFontSizes(theme);

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem('localTheme');
    setDarkMode(storedTheme ? JSON.parse(storedTheme) : true);
  }, []);

  useEffect(() => {
    localStorage.setItem('localTheme', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeContext.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }}>
          <Navbar />
        </ThemeContext.Provider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins/:id' element={<Coin />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
