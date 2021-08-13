import React, { useState, useEffect, Fragment } from 'react';
import { Typography, Grid, Paper, Button, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, ResponsiveContainer, Area } from 'recharts';
import { format } from 'date-fns';
import { ArrowUpward as ArrowUpwardIcon, ArrowDownward as ArrowDownwardIcon } from '@material-ui/icons';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

const Name = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  paddingTop: 20,
  marginBottom: 20,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 0),
}));

const ArrowDown = styled(Typography)(({ theme }) => ({
  marginLeft: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#e15241',
}));

const ArrowUp = styled(Typography)(({ theme }) => ({
  marginLeft: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#4eaf0a',
}));

const Buttons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  gap: 10,
  padding: theme.spacing(1, 0),
}));

const Chart = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  height: 495,
  padding: theme.spacing(2, 1, 1, 1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4, 3, 2, 2),
  },
  color: 'black',
}));

const Card = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 0),
}));

function getCoin(setCoin, id, setLoading) {
  axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
    .then(res => {
      let coin = res.data;
      setCoin({
        id: coin.id,
        name: coin.name,
        img: coin.image.large,
        price: coin.market_data.current_price.usd,
        market_cap: (coin.market_data.market_cap.usd === null) ? '' : coin.market_data.market_cap.usd.toLocaleString(),
        volume: (coin.market_data.total_volume.usd === null) ? '' : coin.market_data.total_volume.usd.toLocaleString(),
        price_change_24h: (coin.market_data.price_change_percentage_24h === null) ? '' : coin.market_data.price_change_percentage_24h.toFixed(2),
        price_change_7d: (coin.market_data.price_change_percentage_7d === null) ? '' : coin.market_data.price_change_percentage_7d.toFixed(2),
        price_change_14d: (coin.market_data.price_change_percentage_14d === null) ? '' : coin.market_data.price_change_percentage_14d.toFixed(2),
        price_change_30d: (coin.market_data.price_change_percentage_30d === null) ? '' : coin.market_data.price_change_percentage_30d.toFixed(2),
        price_change_60d: (coin.market_data.price_change_percentage_60d === null) ? '' : coin.market_data.price_change_percentage_60d.toFixed(2),
        price_change_1y: (coin.market_data.price_change_percentage_1y === null) ? '' : coin.market_data.price_change_percentage_1y.toFixed(2)
      });
      setLoading(false);
    })
    .catch(error => console.log(error));
}

function Coin() {
  const [coin, setCoin] = useState([]);
  const [sparkline, setSparkline] = useState([]);
  const [days, setDays] = useState('7');
  const [loading, setLoading] = useState(true);
  const [loadingSparkline, setLoadingSparkline] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getCoin(setCoin, id, setLoading);
    const IntervalID = setInterval(() => {
      getCoin(setCoin, id, setLoading);
    }, 5000
    );
    return () => {
      setCoin([]);
      clearInterval(IntervalID);
    };
  }, [id]);

  useEffect(() => {
    setLoadingSparkline(true);
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
      .then(res => {
        const temp_data = [];
        res.data.prices.forEach(data => {
          temp_data.push({
            date: format(new Date(data[0]), 'MMM d y, hh:mm:ss'),
            value: data[1],
          })
        })
        setSparkline(temp_data);
        setLoadingSparkline(false);
      })
      .catch(error => console.log(error));
    return () => {
      setSparkline([]);
    };
  }, [id, days]);

  return (
    <main>
      {loading &&
        <Grid container justifyContent='center'>
          <CircleLoader loading={loading} color={'#648dae'} size={150} css={{ marginTop: 20 }} />
        </Grid>
      }
      {!loading &&
        <Fragment>
          <Name>
            <img src={coin.img} style={{ marginRight: 10 }} width='35vw' alt='img'></img>
            <Typography variant='h5'>{coin.name}</Typography>
            {coin.price_change_24h < 0 &&
              <ArrowDown variant='subtitle1'>
                {coin.price_change_24h}%
                <ArrowDownwardIcon sx={{ fontSize: 20 }} />
              </ArrowDown>
            }
            {coin.price_change_24h >= 0 &&
              <ArrowUp variant='subtitle1'>
                {coin.price_change_24h}%
                <ArrowUpwardIcon sx={{ fontSize: 20 }} />
              </ArrowUp>
            }
          </Name>
          <Grid container justifyContent='center' wrap='wrap-reverse' sx={{ gap: 4 }}>
            <Grid item xs={12} lg={7}>
              <Buttons>
                <Button color={(days === '1') ? 'primary' : 'inherit'} onClick={() => setDays('1')}>
                  1D
                </Button>
                <Button color={(days === '7') ? 'primary' : 'inherit'} onClick={() => setDays('7')}>
                  1W
                </Button>
                <Button color={(days === '30') ? 'primary' : 'inherit'} onClick={() => setDays('30')}>
                  1M
                </Button>
                <Button color={(days === '90') ? 'primary' : 'inherit'} onClick={() => setDays('90')}>
                  3M
                </Button>
                <Button color={(days === '180') ? 'primary' : 'inherit'} onClick={() => setDays('180')}>
                  6M
                </Button>
                <Button color={(days === '365') ? 'primary' : 'inherit'} onClick={() => setDays('365')}>
                  1Y
                </Button>
                <Button color={(days === 'max') ? 'primary' : 'inherit'} onClick={() => setDays('max')}>
                  MAX
                </Button>
              </Buttons>
              <Chart>
                {loadingSparkline &&
                  <Grid container alignItems='center' justifyContent='center'>
                    <CircleLoader loading={loadingSparkline} color={'#648dae'} size={150} />
                  </Grid>
                }
                {!loadingSparkline &&
                  <ResponsiveContainer>
                    <AreaChart data={sparkline}>
                      <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                          <stop offset='5%' stopColor='#648dae' stopOpacity={0.4} />
                          <stop offset='75%' stopColor='#648dae' stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <Area dataKey='value' stroke='#648dae' fill='url(#color)' />
                      <XAxis
                        dataKey='date'
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={value => {
                          if (days === '1') {
                            return format(new Date(value), '| hh:mm |');
                          } else if (days === 'max') {
                            return format(new Date(value), '| y MMM |');
                          } else {
                            return format(new Date(value), '| MMM, d |');
                          }
                        }}
                      />
                      <YAxis
                        dataKey='value'
                        domain={['auto', 'auto']}
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        tickFormatter={value => `$${value}`}
                      />
                      <Tooltip />
                      <CartesianGrid opacity={0.05} vertical={false} />
                    </AreaChart>
                  </ResponsiveContainer>}
              </Chart>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid container direction='column'>
                <Grid item xs={12}>
                  <Card>
                    <Typography variant='h5'>{coin.price} USD</Typography>
                    <Typography variant='subtitle1'>
                      Price
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent='center' sx={{ gap: 4, marginTop: 3 }}>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card sx={(coin.price_change_24h < 0) ? { color: 'error.light' } : { color: 'success.light' }}>
                        <Typography variant='h5'>{coin.price_change_24h}%</Typography>
                        <Typography variant='subtitle1'>
                          Price Change 24h
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card sx={(coin.price_change_7d < 0) ? { color: 'error.light' } : { color: 'success.light' }}>
                        <Typography variant='h5'>{coin.price_change_7d}%</Typography>
                        <Typography variant='subtitle1'>
                          Price Change 7d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card sx={(coin.price_change_14d < 0) ? { color: 'error.light' } : { color: 'success.light' }}>
                        <Typography variant='h5'>{coin.price_change_14d}%</Typography>
                        <Typography variant='subtitle1'>
                          Price Change 14d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card sx={(coin.price_change_30d < 0) ? { color: 'error.light' } : { color: 'success.light' }}>
                        <Typography variant='h5'>{coin.price_change_30d}%</Typography>
                        <Typography variant='subtitle1'>
                          Price Change 30d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card sx={(coin.price_change_60d < 0) ? { color: 'error.light' } : { color: 'success.light' }}>
                        <Typography variant='h5'>{coin.price_change_60d}%</Typography>
                        <Typography variant='subtitle1'>
                          Price Change 60d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card sx={(coin.price_change_1y < 0) ? { color: 'error.light' } : { color: 'success.light' }}>
                        <Typography variant='h5'>{coin.price_change_1y}%</Typography>
                        <Typography variant='subtitle1'>
                          Price Change 1y
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent='center' sx={{ gap: 4, marginTop: 3 }}>
            <Grid item xs={12} md={5}>
              <Card>
                <Typography variant='h5'>{coin.market_cap} USD</Typography>
                <Typography variant='subtitle1'>
                  Market Cap
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <Typography variant='h5'>{coin.volume} USD</Typography>
                <Typography variant='subtitle1'>
                  Volume
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Fragment>
      }
    </main>
  );
}

export default Coin;
