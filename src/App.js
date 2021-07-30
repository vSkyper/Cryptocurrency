import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Toolbar, Typography, InputBase, CssBaseline, IconButton, Grid } from '@material-ui/core';
import { alpha, makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Search as SearchIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import axios from 'axios';

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
  dataTable: {
    '& .negative': {
      color: '#e15241',
    },
    '& .positive': {
      color: '#4eaf0a',
    },
    display: 'flex',
    height: 1000,
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    marginTop: 20,
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
  const [search, setSearch] = useState('');

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  const rows = [];

  filteredCoins.forEach(coin => {
    rows.push({
      id: coin.id,
      img: coin.image,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      priceChange1h: (coin.price_change_percentage_1h_in_currency === null) ? "%null" : coin.price_change_percentage_1h_in_currency.toFixed(1),
      priceChange24h: (coin.price_change_percentage_24h_in_currency === null) ? "%null" : coin.price_change_percentage_24h_in_currency.toFixed(1),
      priceChange7d: (coin.price_change_percentage_7d_in_currency === null) ? "%null" : coin.price_change_percentage_7d_in_currency.toFixed(1),
      volume: coin.total_volume.toLocaleString(),
      marketcap: coin.market_cap.toLocaleString(),
      sparkline: coin.sparkline_in_7d.price
    })
  });

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => (
        <Fragment><img src={params.row.img} width="20%" style={{ marginRight: 10 }} alt="img"></img> {params.value}</Fragment>
      ),
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      valueFormatter: (params) => {
        return `${params.value}  USD`;
      },
    },
    {
      field: 'priceChange1h',
      headerName: '1h',
      width: 120,
      valueFormatter: (params) => {
        return `${params.value}%`;
      },
      cellClassName: (params) => {
        if (params.value < 0) {
          return 'negative';
        } else {
          return 'positive';
        }
      },
    },
    {
      field: 'priceChange24h',
      headerName: '24h',
      width: 120,
      valueFormatter: (params) => {
        return `${params.value}%`;
      },
      cellClassName: (params) => {
        if (params.value < 0) {
          return 'negative';
        } else {
          return 'positive';
        }
      },
    },
    {
      field: 'priceChange7d',
      headerName: '7d',
      width: 120,
      valueFormatter: (params) => {
        return `${params.value}%`;
      },
      cellClassName: (params) => {
        if (params.value < 0) {
          return 'negative';
        } else {
          return 'positive';
        }
      },
    },
    {
      field: 'volume',
      headerName: 'Volume',
      width: 170,
      valueFormatter: (params) => {
        return `${params.value}  USD`;
      },
    },
    {
      field: 'marketcap',
      headerName: 'Market Cap',
      width: 170,
      valueFormatter: (params) => {
        return `${params.value}  USD`;
      },
    },
    {
      field: 'sparkline',
      headerName: 'Last 7 Days',
      width: 170,
      renderCell: (params) => (
        <Sparklines data={params.value}>
          <SparklinesLine color="#4eaf0a" />
        </Sparklines>
      ),
    },
  ];

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error))
  }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Cryptocurrency
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
        <Grid container direction="column" alignItems="center">
          <div className={classes.dataTable}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid rows={rows} columns={columns} pageSize={25} />
            </div>
          </div>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
