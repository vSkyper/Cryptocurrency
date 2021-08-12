import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import MainRoute from './components/MainRoute';
import Coin from './components/Coin';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [themeMode, setThemeMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: themeMode ? 'light' : 'dark',
    }
  });

  useEffect(() => {
    const parsedTheme = Boolean(JSON.parse(localStorage.getItem('localTheme')));
    setThemeMode(parsedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('localTheme', themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        <Navbar />
      </ThemeContext.Provider>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path='/' exact component={(props) => <MainRoute />} />
        <Route path='/coins/:id' exact component={(props) => <Coin />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
