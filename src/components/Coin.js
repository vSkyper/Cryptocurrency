import { Fragment } from 'react';
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
import useFetch from '../useFetch';
import Sparkline from './Coin/Sparkline';
import Price from './Coin/Price';
import StackData from './Coin/StackData';
import Exchange from './Coin/Exchange';
import { Context } from '../Context';

const Name = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginBottom: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 0),
}));

const Coin = () => {
  let { id } = useParams();

  const { data: coin, loading: coinLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  return (
    <main>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={coinLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      {!coinLoading && (
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
                <Context.Provider value={{ id }}>
                  <Sparkline />
                </Context.Provider>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Context.Provider value={{ coin }}>
                  <Price />
                </Context.Provider>
              </Grid>
            </Grid>
            <Grid
              container
              direction={{ xs: 'column-reverse', lg: 'row' }}
              spacing={2}
              sx={{ mt: 1, mb: 3 }}
            >
              <Grid item xs={12} lg={7}>
                <Context.Provider value={{ id, coin: coin.market_data }}>
                  <StackData />
                </Context.Provider>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Context.Provider value={{ id, symbol: coin.symbol }}>
                  <Exchange />
                </Context.Provider>
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      )}
    </main>
  );
};

export default Coin;
