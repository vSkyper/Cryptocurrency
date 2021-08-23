import React, { useState, useEffect, Fragment } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sparkline from './Coin/Sparkline';
import Price from './Coin/Price';
import StackData from './Coin/StackData';
import Exchange from './Coin/Exchange';
import { SparklineContext } from '../contexts/SparklineContext';
import { PriceContext } from '../contexts/PriceContext';
import { StackDataContext } from '../contexts/StackDataContext';
import { ExchangeContext } from '../contexts/ExchangeContext';

const Name = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 0),
}));

const getCoin = async (setCoin, id, source) => {
  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      {
        cancelToken: source.token,
      }
    )
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
          <Container maxWidth='xl'>
            <Grid
              container
              direction={{ xs: 'column-reverse', lg: 'row' }}
              spacing={2}
            >
              <Grid item xs={12} lg={7}>
                <SparklineContext.Provider
                  value={{ id, sparkline, setSparkline }}
                >
                  <Sparkline />
                </SparklineContext.Provider>
              </Grid>
              <Grid item xs={12} lg={5}>
                <PriceContext.Provider value={{ coin }}>
                  <Price />
                </PriceContext.Provider>
              </Grid>
            </Grid>
            <Grid
              container
              direction={{ xs: 'column-reverse', lg: 'row' }}
              spacing={2}
              sx={{ mt: 1, mb: 3 }}
            >
              <Grid item xs={12} lg={7}>
                <StackDataContext.Provider value={{ coin }}>
                  <StackData />
                </StackDataContext.Provider>
              </Grid>
              <Grid item xs={12} lg={5}>
                <ExchangeContext.Provider value={{ id, symbol: coin.symbol }}>
                  <Exchange />
                </ExchangeContext.Provider>
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      )}
    </main>
  );
};

export default Coin;
