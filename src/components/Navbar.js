import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Link } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Search as SearchIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@material-ui/icons';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
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

function Navbar(props) {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);

  let history = useHistory();

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
    return () => {
      setCoins([]);
    };
  }, []);

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });
  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, 10);
  };

  return (
    <AppBar position="relative" color={props.darkMode ? 'default' : 'primary'}>
      <Toolbar>
        <IconButton onClick={() => history.push("/")}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1024px-BTC_Logo.svg.png" width="30vh" alt="logo"></img>
        </IconButton>
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
        <IconButton color="inherit" onClick={() => props.setDarkMode(!props.darkMode)}>
          {props.darkMode ?
            (<Brightness7Icon />) :
            (<Brightness4Icon />)
          }
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
