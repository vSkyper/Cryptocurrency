import { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Coin from './components/Coin';
import Footer from './components/Footer';
import { Context } from './Context';

const App = () => {
  const [themeMode, setThemeMode] = useState(true);
  let theme = createTheme({
    palette: {
      mode: themeMode ? 'dark' : 'light',
    },
  });

  theme = responsiveFontSizes(theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('localTheme');
    setThemeMode(storedTheme ? JSON.parse(storedTheme) : true);
  }, []);

  useEffect(() => {
    localStorage.setItem('localTheme', JSON.stringify(themeMode));
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Context.Provider value={{ themeMode, setThemeMode }}>
          <Navbar />
        </Context.Provider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/coins/:id' element={<Coin />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
