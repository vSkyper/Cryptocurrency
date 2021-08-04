import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, CssBaseline, IconButton, Link } from '@material-ui/core';
import { alpha, makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Search as SearchIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@material-ui/icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import axios from 'axios';
import MainRoute from './routes/MainRoute';
import Coin from './routes/Coin';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
  const [coins, setCoins] = useState([]);
  const history = createBrowserHistory({ forceRefresh: true });

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });
  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, 10);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" color={darkMode ? 'default' : 'primary'}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link color="inherit" underline="none" onClick={() => history.push("/")}>Cryptocurrency</Link>
            </Typography>
            <Autocomplete
              id="coins-search"
              options={coins}
              filterOptions={filterOptions}
              getOptionLabel={(option) => option.name}
              className={classes.search}
              onChange={(event, value) => {
                history.push(`/coins/${value.id}`);
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} {...params.inputProps} />
                </div>
              )}
            />
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ?
                (<Brightness7Icon />) :
                (<Brightness4Icon />)
              }
            </IconButton>
          </Toolbar>
        </AppBar>
        <Router>
          <Route path="/" exact render={(props) => <MainRoute />} />
          <Route path="/coins/:id" exact render={(props) => <Coin />} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
