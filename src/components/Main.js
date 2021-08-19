import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Backdrop, CircularProgress } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const DataTable = styled('div')(({ theme }) => ({
  '& .negative': {
    color: theme.palette.error.light,
  },
  '& .positive': {
    color: theme.palette.success.light,
  },
  display: 'flex',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '80%',
  },
  marginTop: 20,
  marginBottom: 20,
}));

const getCoins = async (setCoins) => {
  axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
    )
    .then((res) => {
      setCoins(res.data);
    })
    .catch((error) => console.log(error));
};

const Main = () => {
  const [coins, setCoins] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    getCoins(setCoins);
    const IntervalID = setInterval(() => {
      getCoins(setCoins);
    }, 20000);
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
          <Link
            color='inherit'
            underline='hover'
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
            component={RouterLink}
            to={`/coins/${params.row.id}`}
          >
            <img src={params.row.image} width='25vh' alt='img'></img>
            {params.value}
          </Link>
        ),
      },
      {
        field: 'symbol',
        headerName: 'Symbol',
        width: 150,
      },
      {
        type: 'number',
        field: 'current_price',
        headerName: 'Price',
        width: 150,
        valueFormatter: (params) => {
          return `${params.value}  USD`;
        },
      },
      {
        type: 'number',
        field: 'price_change_percentage_1h_in_currency',
        headerName: '1h',
        width: 120,
        valueFormatter: (params) => {
          return `${Number(params.value).toFixed(2)}%`;
        },
        cellClassName: (params) => {
          if (Number(params.value) < 0) {
            return 'negative';
          } else {
            return 'positive';
          }
        },
      },
      {
        type: 'number',
        field: 'price_change_percentage_24h_in_currency',
        headerName: '24h',
        width: 120,
        valueFormatter: (params) => {
          return `${Number(params.value).toFixed(2)}%`;
        },
        cellClassName: (params) => {
          if (Number(params.value) < 0) {
            return 'negative';
          } else {
            return 'positive';
          }
        },
      },
      {
        type: 'number',
        field: 'price_change_percentage_7d_in_currency',
        headerName: '7d',
        width: 120,
        valueFormatter: (params) => {
          return `${Number(params.value).toFixed(2)}%`;
        },
        cellClassName: (params) => {
          if (Number(params.value) < 0) {
            return 'negative';
          } else {
            return 'positive';
          }
        },
      },
      {
        type: 'number',
        field: 'total_volume',
        headerName: 'Volume',
        width: 170,
        valueFormatter: (params) => {
          return `${Number(params.value).toLocaleString()}  USD`;
        },
      },
      {
        type: 'number',
        field: 'market_cap',
        headerName: 'Market Cap',
        width: 170,
        valueFormatter: (params) => {
          return `${Number(params.value).toLocaleString()}  USD`;
        },
      },
      {
        field: 'sparkline_in_7d',
        headerName: 'Last 7 Days',
        width: 170,
        renderCell: (params) => (
          <Sparklines data={params.value.price}>
            <SparklinesLine
              color={
                params.row.price_change_percentage_7d_in_currency < 0
                  ? '#e57373'
                  : '#81c784'
              }
            />
          </Sparklines>
        ),
      },
    ]);
    return () => {
      setColumns([]);
    };
  }, []);

  return (
    <main>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={coins.length === 0}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      {coins.length > 0 && (
        <Grid container justifyContent='center'>
          <DataTable>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                autoHeight
                rows={coins}
                columns={columns}
                pageSize={25}
              />
            </div>
          </DataTable>
        </Grid>
      )}
    </main>
  );
};

export default Main;
