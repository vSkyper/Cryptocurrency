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
import { AllInclusiveRounded as AllInclusiveIcon } from '@material-ui/icons';
import axios from 'axios';
import Sparkline from './Sparkline';
import Price from './Price';
import Exchange from './Exchange';
import { SparklineContext } from '../contexts/SparklineContext';
import { PriceContext } from '../contexts/PriceContext';
import { ExchangeContext } from '../contexts/ExchangeContext';

const Name = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginBottom: 20,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 0),
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
          </Name>
          <Grid
            container
            justifyContent='center'
            direction={{ xs: 'column-reverse', lg: 'row' }}
            sx={{ gap: 4 }}
          >
            <SparklineContext.Provider value={{ id, sparkline, setSparkline }}>
              <Sparkline />
            </SparklineContext.Provider>
            <PriceContext.Provider value={{ coin, Card }}>
              <Price />
            </PriceContext.Provider>
          </Grid>
          <ExchangeContext.Provider value={{ id, symbol: coin.symbol }}>
            <Exchange />
          </ExchangeContext.Provider>
          <Grid container justifyContent='center' sx={{ mt: 3, mb: 3 }}>
            <Grid item xs={12} sm={6} lg={3}>
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
            <Grid item xs={12} sm={6} lg={3}>
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
            <Grid item xs={12} sm={6} lg={3}>
              <Card>
                <Typography variant='h5'>
                  {Number(coin.market_data.circulating_supply).toLocaleString(
                    'en-US',
                    {
                      maximumFractionDigits: 0,
                    }
                  )}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Circulating Supply
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card>
                <Typography variant='h5'>
                  {coin.market_data.total_supply === null ? (
                    <AllInclusiveIcon />
                  ) : (
                    Number(coin.market_data.total_supply).toLocaleString(
                      'en-US',
                      {
                        maximumFractionDigits: 0,
                      }
                    )
                  )}
                </Typography>
                <Typography variant='subtitle1' fontWeight='fontWeightLight'>
                  Total Supply
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
