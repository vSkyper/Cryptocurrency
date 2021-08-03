import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, CssBaseline, IconButton, Link } from '@material-ui/core';
import { alpha, makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Search as SearchIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@material-ui/icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainRoute from './routes/MainRoute';

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
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
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
  const [search, setSearch] = useState('');

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" color={darkMode ? 'default' : 'primary'}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link href="/" color="inherit">Cryptocurrency</Link>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} onChange={(e) => { setSearch(e.target.value); }} />
            </div>
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ?
                (<Brightness7Icon />) :
                (<Brightness4Icon />)
              }
            </IconButton>
          </Toolbar>
        </AppBar>
        <Router>
          <Route path="/" exact render={(props) => <MainRoute searchData={search} />} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
