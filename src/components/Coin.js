import React, { useState, useEffect, Fragment } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@material-ui/icons';
import axios from 'axios';
import Sparkline from './Sparkline';
import Exchange from './Exchange';
import { SparklineContext } from '../contexts/SparklineContext';
import { ExchangeContext } from '../contexts/ExchangeContext';

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

const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: 10,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 300,
}));

const Card = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2, 0),
}));

const getCoin = async (setCoin, id, source) => {
  axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`, {
      cancelToken: source.token,
    })
    .then((res) => {
      setCoin(res.data);
    })
    .catch((error) => console.log(error));
};

const Coin = () => {
  const [coin, setCoin] = useState({});
  const [sparkline, setSparkline] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    let source = axios.CancelToken.source();
    getCoin(setCoin, id, source);
    const IntervalID = setInterval(() => {
      getCoin(setCoin, id, source);
    }, 5000);
    return () => {
      setCoin({});
      clearInterval(IntervalID);
      source.cancel();
    };
  }, [id]);

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
            {coin.market_data.price_change_percentage_24h < 0 ? (
              <Percentage sx={{ color: 'error.light' }}>
                {Number(
                  coin.market_data.price_change_percentage_24h / 100
                ).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  style: 'percent',
                })}
                <TrendingDownIcon />
              </Percentage>
            ) : (
              <Percentage sx={{ color: 'success.light' }}>
                {Number(
                  coin.market_data.price_change_percentage_24h / 100
                ).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  style: 'percent',
                })}
                <TrendingUpIcon />
              </Percentage>
            )}
          </Name>
          <Grid
            container
            justifyContent='center'
            direction={{ xs: 'column-reverse', sm: 'row' }}
            sx={{ gap: 4 }}
          >
            <SparklineContext.Provider value={{ id, sparkline, setSparkline }}>
              <Sparkline />
            </SparklineContext.Provider>
            <Grid item xs={12} lg={4}>
              <Grid container direction='column'>
                <Grid item xs={12}>
                  <Card>
                    <Typography variant='h5'>
                      {Number(
                        coin.market_data.current_price.usd
                      ).toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 8,
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      fontWeight='fontWeightLight'
                    >
                      Price
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent='center'
                    sx={{ gap: 4, mt: 3 }}
                  >
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(coin.market_data.price_change_percentage_24h) <
                          0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_24h / 100
                          ).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'percent',
                          })}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          fontWeight='fontWeightLight'
                        >
                          Price Change 24h
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(coin.market_data.price_change_percentage_7d) <
                          0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_7d / 100
                          ).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'percent',
                          })}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          fontWeight='fontWeightLight'
                        >
                          Price Change 7d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(coin.market_data.price_change_percentage_14d) <
                          0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_14d / 100
                          ).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'percent',
                          })}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          fontWeight='fontWeightLight'
                        >
                          Price Change 14d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(coin.market_data.price_change_percentage_30d) <
                          0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_30d / 100
                          ).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'percent',
                          })}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          fontWeight='fontWeightLight'
                        >
                          Price Change 30d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(coin.market_data.price_change_percentage_60d) <
                          0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_60d / 100
                          ).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'percent',
                          })}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          fontWeight='fontWeightLight'
                        >
                          Price Change 60d
                        </Typography>
                      </Card>
                    </Grid>
                    <Grid item xs={5} sm={3} lg={5}>
                      <Card
                        sx={
                          Number(coin.market_data.price_change_percentage_1y) <
                          0
                            ? { color: 'error.light' }
                            : { color: 'success.light' }
                        }
                      >
                        <Typography variant='h5'>
                          {Number(
                            coin.market_data.price_change_percentage_1y / 100
                          ).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                            style: 'percent',
                          })}
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          fontWeight='fontWeightLight'
                        >
                          Price Change 1y
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ExchangeContext.Provider value={{ id, symbol: coin.symbol }}>
            <Exchange />
          </ExchangeContext.Provider>
          <Grid container justifyContent='center' sx={{ gap: 4, mt: 4, mb: 3 }}>
            <Grid item xs={12} md={5}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.market_cap.usd).toLocaleString(
                    'en-US',
                    {
                      maximumFractionDigits: 0,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Market Capitalization
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.total_volume.usd).toLocaleString(
                    'en-US',
                    {
                      maximumFractionDigits: 0,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  24h Trading Volume
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </main>
  );
};

export default Coin;
