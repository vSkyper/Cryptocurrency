import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import MainRoute from './components/MainRoute';
import Coin from './components/Coin';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    }
  });

  useEffect(() => {
    const parsedTheme = Boolean(JSON.parse(window.localStorage.getItem('localTheme')) || false);
    setDarkMode(parsedTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('localTheme', darkMode)
  }, [darkMode]);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={(props) => <MainRoute />} />
          <Route path="/coins/:id" exact component={(props) => <Coin />} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
