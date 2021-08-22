import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import { Container, Link, Backdrop, CircularProgress } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { AreaChart, ResponsiveContainer, Area, YAxis } from 'recharts';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import GlobalData from './GlobalData';
import { GlobalDataContext } from '../contexts/GlobalDataContext';

const DataTable = styled('div')(({ theme }) => ({
  '& .negative': {
    color: theme.palette.error.light,
  },
  '& .positive': {
    color: theme.palette.success.light,
  },
  display: 'flex',
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
  const [globalData, setGlobalData] = useState({});
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then((res) => {
        setGlobalData(res.data.data);
      })
      .catch((error) => console.log(error));
    return () => {
      setGlobalData({});
    };
  }, []);

  useEffect(() => {
    getCoins(setCoins);
    const IntervalID = setInterval(() => {
      getCoins(setCoins);
    }, 10000);
    return () => {
      setCoins([]);
      clearInterval(IntervalID);
    };
  }, []);

  const columns = useRef([
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 170,
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
      flex: 0.9,
      minWidth: 135,
      valueFormatter: (params) => {
        return params.value.toUpperCase();
      },
    },
    {
      type: 'number',
      field: 'current_price',
      headerName: 'Price',
      flex: 1,
      minWidth: 150,
      valueFormatter: (params) => {
        return Number(params.value).toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 8,
          style: 'currency',
          currency: 'USD',
        });
      },
    },
    {
      type: 'number',
      field: 'price_change_percentage_1h_in_currency',
      headerName: '1h',
      flex: 0.7,
      minWidth: 120,
      valueFormatter: (params) => {
        return Number(params.value / 100).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'percent',
        });
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
      flex: 0.7,
      minWidth: 120,
      valueFormatter: (params) => {
        return Number(params.value / 100).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'percent',
        });
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
      flex: 0.7,
      minWidth: 120,
      valueFormatter: (params) => {
        return Number(params.value / 100).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'percent',
        });
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
      headerName: '24h Volume',
      flex: 1,
      minWidth: 180,
      valueFormatter: (params) => {
        return Number(params.value).toLocaleString('en-US', {
          maximumFractionDigits: 0,
          style: 'currency',
          currency: 'USD',
        });
      },
    },
    {
      type: 'number',
      field: 'market_cap',
      headerName: 'Market Cap',
      flex: 1,
      minWidth: 180,
      valueFormatter: (params) => {
        return Number(params.value).toLocaleString('en-US', {
          maximumFractionDigits: 0,
          style: 'currency',
          currency: 'USD',
        });
      },
    },
    {
      field: 'sparkline_in_7d',
      headerName: 'Last 7 Days',
      flex: 1,
      minWidth: 190,
      renderCell: (params) => {
        const color =
          params.row.price_change_percentage_7d_in_currency < 0
            ? '#e57373'
            : '#81c784';
        return (
          <ResponsiveContainer>
            <AreaChart data={params.value.price}>
              <defs>
                <linearGradient
                  id={`linearColor${params.row.id}`}
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
                  <stop offset='5%' stopColor={color} stopOpacity={0.4} />
                  <stop offset='75%' stopColor={color} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area
                dataKey={(value) => value}
                stroke={color}
                fill={`url(#linearColor${params.row.id})`}
              />
              <YAxis
                dataKey={(value) => value}
                domain={['auto', 'auto']}
                hide
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      },
    },
  ]);

  return (
    <main>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Object.keys(globalData).length === 0 || coins.length === 0}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      {Object.keys(globalData).length > 0 && coins.length > 0 && (
        <Container maxWidth='xl'>
          <GlobalDataContext.Provider value={{ globalData }}>
            <GlobalData />
          </GlobalDataContext.Provider>
          <DataTable>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                autoHeight
                rows={coins}
                columns={columns.current}
                pageSize={50}
              />
            </div>
          </DataTable>
        </Container>
      )}
    </main>
  );
};

export default Main;
