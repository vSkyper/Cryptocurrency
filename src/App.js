import React, { useState } from 'react';
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

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="" render={(props) => <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />} />
          <Route path="/" exact render={(props) => <MainRoute />} />
          <Route path="/coins/:id" exact render={(props) => <Coin />} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
