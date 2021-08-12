import React, { useState, useEffect } from 'react';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

const useStyles = makeStyles((theme) => ({
  dataTable: {
    '& .negative': {
      color: '#e15241',
    },
    '& .positive': {
      color: '#4eaf0a',
    },
    display: 'flex',
    height: '88vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    marginTop: 20,
  },
}));

function getCoins(setCoins, setLoading) {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(res => {
      const rows = [];
      res.data.forEach(coin => {
        rows.push({
          id: coin.id,
          img: coin.image,
          name: coin.name,
          symbol: coin.symbol,
          price: coin.current_price,
          priceChange1h: (coin.price_change_percentage_1h_in_currency === null) ? '' : coin.price_change_percentage_1h_in_currency.toFixed(2),
          priceChange24h: (coin.price_change_percentage_24h_in_currency === null) ? '' : coin.price_change_percentage_24h_in_currency.toFixed(2),
          priceChange7d: (coin.price_change_percentage_7d_in_currency === null) ? '' : coin.price_change_percentage_7d_in_currency.toFixed(2),
          volume: coin.total_volume,
          marketcap: coin.market_cap,
          sparkline: coin.sparkline_in_7d.price
        })
      })
      setCoins(rows);
      setLoading(false);
    })
    .catch(error => console.log(error));
}

function MainRoute() {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    getCoins(setCoins, setLoading);
    const IntervalID = setInterval(() => {
      getCoins(setCoins, setLoading);
    }, 20000
    );
    return () => {
      setCoins([]);
      clearInterval(IntervalID);
    };
  }, []);

  useEffect(() => {
    setColumns([
      {
        field: 'name',
        headerName: 'Name',
        width: 150,
        renderCell: (params) => (
          <Link color='inherit' onClick={() => history.push(`/coins/${params.row.id}`)}><img src={params.row.img} width='25vh' style={{ marginRight: 10, verticalAlign: 'middle' }} alt='img'></img> {params.value}</Link>
        ),
      },
      {
        field: 'symbol',
        headerName: 'Symbol',
        width: 150,
      },
      {
        type: 'number',
        field: 'price',
        headerName: 'Price',
        width: 150,
        valueFormatter: (params) => {
          return `${params.value}  USD`;
        },
      },
      {
        type: 'number',
        field: 'priceChange1h',
        headerName: '1h',
        width: 120,
        valueFormatter: (params) => {
          if (params.value !== '') {
            return `${params.value}%`;
          } else {
            return `${params.value}`;
          }
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
        type: 'number',
        field: 'priceChange24h',
        headerName: '24h',
        width: 120,
        valueFormatter: (params) => {
          if (params.value !== '') {
            return `${params.value}%`;
          } else {
            return `${params.value}`;
          }
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
        type: 'number',
        field: 'priceChange7d',
        headerName: '7d',
        width: 120,
        valueFormatter: (params) => {
          if (params.value !== '') {
            return `${params.value}%`;
          } else {
            return `${params.value}`;
          }
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
        type: 'number',
        field: 'volume',
        headerName: 'Volume',
        width: 170,
        valueFormatter: (params) => {
          return `${params.value.toLocaleString()}  USD`;
        },
      },
      {
        type: 'number',
        field: 'marketcap',
        headerName: 'Market Cap',
        width: 170,
        valueFormatter: (params) => {
          return `${params.value.toLocaleString()}  USD`;
        },
      },
      {
        field: 'sparkline',
        headerName: 'Last 7 Days',
        width: 170,
        renderCell: (params) => (
          <Sparklines data={params.value}>
            <SparklinesLine color={params.getValue(params.id, 'priceChange7d') < 0 ? '#e15241' : '#4eaf0a'} />
          </Sparklines>
        ),
      },
    ])
    return () => {
      setColumns([]);
    };
  }, [history]);

  return (
    <main>
      <Grid container justifyContent='center'>
        <CircleLoader loading={loading} color={'#648dae'} size={150} css={{ marginTop: 20 }} />
        {!loading &&
          <div className={classes.dataTable}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                rows={coins}
                columns={columns}
                pageSize={25}
              />
            </div>
          </div>
        }
      </Grid>
    </main>
  );
}

export default MainRoute;
