import React, { useState, useEffect, Fragment } from 'react';
import {
  Container,
  Typography,
  Stack,
  Divider,
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
              justifyContent='center'
              direction={{ xs: 'column-reverse', lg: 'row' }}
              spacing={3}
            >
              <SparklineContext.Provider
                value={{ id, sparkline, setSparkline }}
              >
                <Sparkline />
              </SparklineContext.Provider>
              <PriceContext.Provider value={{ coin }}>
                <Price />
              </PriceContext.Provider>
            </Grid>
            <Grid container justifyContent='center' direction={{ xs: 'column-reverse', lg: 'row' }} sx={{ mt: 4, mb: 3 }}>
              <Grid item lg={7}>
                <Stack
                  divider={<Divider orientation='horizontal' flexItem />}
                  spacing={2}
                >
                  <Grid container justifyContent='space-between'>
                    <Typography>Market Capitalization</Typography>
                    <Typography>
                      {Number(coin.market_data.market_cap.usd).toLocaleString(
                        'en-US',
                        {
                          maximumFractionDigits: 0,
                          style: 'currency',
                          currency: 'USD',
                        }
                      )}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='space-between'>
                    <Typography>24h Trading Volume</Typography>
                    <Typography>
                      {Number(coin.market_data.total_volume.usd).toLocaleString(
                        'en-US',
                        {
                          maximumFractionDigits: 0,
                          style: 'currency',
                          currency: 'USD',
                        }
                      )}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='space-between'>
                    <Typography>Circulating Supply</Typography>
                    <Typography>
                      {Number(
                        coin.market_data.circulating_supply
                      ).toLocaleString('en-US', {
                        maximumFractionDigits: 0,
                      })}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='space-between'>
                    <Typography>Total Supply</Typography>
                    <Typography>
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
                  </Grid>
                </Stack>
              </Grid>
              <Grid item lg={5}>
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
