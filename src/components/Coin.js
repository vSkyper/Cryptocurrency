import React, { useState, useEffect, Fragment } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  InputBase,
  FormControl,
  Select,
  MenuItem,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
  Area,
} from 'recharts';
import { format } from 'date-fns';
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  SwapHoriz as SwapHorizIcon,
} from '@material-ui/icons';
import axios from 'axios';

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
  color: theme.palette.error.light,
}));

const ArrowUp = styled(Typography)(({ theme }) => ({
  marginLeft: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.success.light,
}));

const Buttons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  gap: 10,
  padding: theme.spacing(1, 0),
}));

const Chart = styled(Paper)(({ theme }) => ({
  height: 350,
  padding: theme.spacing(2, 1, 1, 1),
  [theme.breakpoints.up('sm')]: {
    height: 495,
    padding: theme.spacing(3, 1.5, 1.5, 2),
  },
  color: 'black',
}));

const Card = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2, 0),
}));

const InputBaseExchange = styled(InputBase)(({ theme }) => ({
  ml: 1,
  flex: 1,
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
}));

const getCoin = async (setCoin, id) => {
  axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
    .then((res) => {
      setCoin(res.data);
    })
    .catch((error) => console.log(error));
};

const getCoinPrice = async (setExchangeRate, id, currencyOption) => {
  axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currencyOption}`
    )
    .then((res) => {
      setExchangeRate(res.data[id][currencyOption]);
    })
    .catch((error) => console.log(error));
};

const Coin = () => {
  const [coin, setCoin] = useState({});
  const [sparkline, setSparkline] = useState([]);
  const [days, setDays] = useState('7');
  const [currencies, setCurrencies] = useState([]);
  const [currencyOption, setCurrencyOption] = useState('usd');
  const [exchangeRate, setExchangeRate] = useState('');
  const [amount, setAmount] = useState('');
  const [fromCryptoToCurrency, setFromCryptoToCurrency] = useState(true);

  let { id } = useParams();

  let currency, crypto;
  if (fromCryptoToCurrency) {
    crypto = amount;
    currency = amount * exchangeRate;
    if (!isFinite(currency)) {
      currency = '';
    }
  } else {
    currency = amount;
    crypto = amount / exchangeRate;
    if (!isFinite(crypto)) {
      crypto = '';
    }
  }

  useEffect(() => {
    getCoin(setCoin, id);
    const IntervalID = setInterval(() => {
      getCoin(setCoin, id);
    }, 5000);
    return () => {
      setCoin([]);
      clearInterval(IntervalID);
    };
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((res) => {
        setSparkline(
          res.data.prices.map((data) => ({
            date: format(new Date(data[0]), 'MMM d y, hh:mm:ss'),
            value: data[1],
          }))
        );
      })
      .catch((error) => console.log(error));
    return () => {
      setSparkline([]);
    };
  }, [id, days]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      .then((res) => {
        setCurrencies(res.data);
      })
      .catch((error) => console.log(error));
    return () => {
      setCurrencies([]);
    };
  }, []);

  useEffect(() => {
    getCoinPrice(setExchangeRate, id, currencyOption);
    const IntervalID = setInterval(() => {
      getCoinPrice(setExchangeRate, id, currencyOption);
    }, 5000);
    return () => {
      setExchangeRate('');
      clearInterval(IntervalID);
    };
  }, [id, currencyOption]);

  return (
    <main>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Object.keys(coin).length === 0 || sparkline.length === 0}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      {Object.keys(coin).length > 0 && (
        <Fragment>
          <Name>
            <img
              src={coin.image.large}
              style={{ marginRight: 10 }}
              width='35vw'
              alt='img'
            ></img>
            <Typography variant='h5'>{coin.name}</Typography>
            {coin.price_change_24h < 0 && (
              <ArrowDown variant='subtitle1'>
                {coin.price_change_24h}%
                <ArrowDownwardIcon sx={{ fontSize: 20 }} />
              </ArrowDown>
            )}
            {coin.price_change_24h >= 0 && (
              <ArrowUp variant='subtitle1'>
                {coin.price_change_24h}%
                <ArrowUpwardIcon sx={{ fontSize: 20 }} />
              </ArrowUp>
            )}
          </Name>
          <Grid
            container
            justifyContent='center'
            direction={{ xs: 'column-reverse', sm: 'row' }}
            sx={{ gap: 4 }}
          >
            <Grid item xs={12} lg={7}>
              <Buttons>
                <Button
                  color={days === '1' ? 'primary' : 'inherit'}
                  onClick={() => setDays('1')}
                >
                  1D
                </Button>
                <Button
                  color={days === '7' ? 'primary' : 'inherit'}
                  onClick={() => setDays('7')}
                >
                  1W
                </Button>
                <Button
                  color={days === '30' ? 'primary' : 'inherit'}
                  onClick={() => setDays('30')}
                >
                  1M
                </Button>
                <Button
                  color={days === '90' ? 'primary' : 'inherit'}
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                  onClick={() => setDays('90')}
                >
                  3M
                </Button>
                <Button
                  color={days === '180' ? 'primary' : 'inherit'}
                  onClick={() => setDays('180')}
                >
                  6M
                </Button>
                <Button
                  color={days === '365' ? 'primary' : 'inherit'}
                  onClick={() => setDays('365')}
                >
                  1Y
                </Button>
                <Button
                  color={days === 'max' ? 'primary' : 'inherit'}
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                  onClick={() => setDays('max')}
                >
                  MAX
                </Button>
              </Buttons>
              <Chart>
                {sparkline.length > 0 && (
                  <ResponsiveContainer>
                    <AreaChart data={sparkline}>
                      <defs>
                        <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                          <stop
                            offset='5%'
                            stopColor='#648dae'
                            stopOpacity={0.4}
                          />
                          <stop
                            offset='75%'
                            stopColor='#648dae'
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey='value'
                        stroke='#648dae'
                        fill='url(#color)'
                      />
                      <XAxis
                        dataKey='date'
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => {
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
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip />
                      <CartesianGrid opacity={0.05} vertical={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </Chart>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid container direction='column'>
                <Grid item xs={12}>
                  <Card>
                    <Typography variant='h5'>
                      {coin.market_data.current_price.usd} USD
                    </Typography>
                    <Typography variant='subtitle1'>Price</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent='center'
                    sx={{ gap: 4, marginTop: 3 }}
                  >
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(
                            coin.market_data.price_change_percentage_24h
                          ).toFixed(2) < 0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_24h
                          ).toFixed(2)}
                          %
                        </Typography>
                        <Typography variant='subtitle1'>
                          Price Change 24h
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(
                            coin.market_data.price_change_percentage_7d
                          ).toFixed(2) < 0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_7d
                          ).toFixed(2)}
                          %
                        </Typography>
                        <Typography variant='subtitle1'>
                          Price Change 7d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(
                            coin.market_data.price_change_percentage_14d
                          ).toFixed(2) < 0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_14d
                          ).toFixed(2)}
                          %
                        </Typography>
                        <Typography variant='subtitle1'>
                          Price Change 14d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(
                            coin.market_data.price_change_percentage_30d
                          ).toFixed(2) < 0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_30d
                          ).toFixed(2)}
                          %
                        </Typography>
                        <Typography variant='subtitle1'>
                          Price Change 30d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(
                            coin.market_data.price_change_percentage_60d
                          ).toFixed(2) < 0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_60d
                          ).toFixed(2)}
                          %
                        </Typography>
                        <Typography variant='subtitle1'>
                          Price Change 60d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(
                            coin.market_data.price_change_percentage_1y
                          ).toFixed(2) < 0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_1y
                          ).toFixed(2)}
                          %
                        </Typography>
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
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{ mt: 4 }}
          >
            <Grid item>
              <Paper
                sx={{
                  p: [2, 2],
                  display: 'flex',
                  alignItems: 'center',
                  width: 300,
                }}
              >
                <Typography sx={{ p: 1 }}>
                  {coin.symbol.toUpperCase()}
                </Typography>
                <InputBaseExchange
                  type='number'
                  value={crypto}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setFromCryptoToCurrency(true);
                  }}
                />
              </Paper>
            </Grid>
            <SwapHorizIcon
              fontSize='large'
              sx={{ display: { xs: 'none', md: 'block' }, mr: 2, ml: 2 }}
            />
            <Grid item>
              <Paper
                sx={{
                  p: [2, 1.5],
                  display: 'flex',
                  alignItems: 'center',
                  width: 300,
                }}
              >
                <FormControl variant='standard'>
                  {currencies.length > 0 && (
                    <Select
                      sx={{ m: 1, pl: 1 }}
                      id='currencies-select'
                      value={currencyOption}
                      onChange={(e) => setCurrencyOption(e.target.value)}
                    >
                      {currencies.map((currency_opt) => (
                        <MenuItem key={currency_opt} value={currency_opt}>
                          {currency_opt.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </FormControl>
                <InputBaseExchange
                  type='number'
                  value={currency}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setFromCryptoToCurrency(false);
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid container justifyContent='center' sx={{ gap: 4, mt: 4, mb: 3 }}>
            <Grid item xs={12} md={5}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.market_cap.usd).toLocaleString()} USD
                </Typography>
                <Typography variant='subtitle1'>Market Cap</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.total_volume.usd).toLocaleString()}{' '}
                  USD
                </Typography>
                <Typography variant='subtitle1'>Volume</Typography>
              </Card>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </main>
  );
};

export default Coin;
