import {
  Container,
  Typography,
  Grid,
  Backdrop,
  CircularProgress,
  Dialog,
  Alert,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Name } from './styled';
import useFetch from '../../hooks/useFetch';
import { ICoin } from '../../interfaces';
import { PriceCard, Sparkline } from './components';
// import Price from './Coin/Price';
// import StackData from './Coin/StackData';
// import Exchange from './Coin/Exchange';
// import Links from './Coin/Links';

export default function Coin() {
  const { id } = useParams();

  const { data, error } = useFetch<ICoin>(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  if (!id || error) return (
    <Dialog open={true}>
      <Alert severity="error">Something went wrong</Alert>
    </Dialog>
  );

  if (data) {
    return (
      <main>
        <Name>
          <img
            src={data.image.large}
            style={{ marginRight: 10 }}
            width='35vw'
            alt='logo'
          />
          <Typography variant='h5'>{data.name}</Typography>
        </Name>
        <Container maxWidth='xl'>
          <Grid
            container
            direction={{ xs: 'column-reverse', lg: 'row' }}
            spacing={2}
          >
            <Grid item xs={12} lg={7}>
              <Sparkline id={id} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <PriceCard data={data} />
            </Grid>
          </Grid>
          <Grid
            container
            direction={{ xs: 'column-reverse', lg: 'row' }}
            spacing={2}
            sx={{ mt: 1 }}
          >
            <Grid item xs={12} lg={7}>
              {/* <Context.Provider value={{ coin: coin.market_data }}>
                <StackData />
              </Context.Provider> */}
            </Grid>
            <Grid item xs={12} lg={5}>
              <Grid container direction='column'>
                <Grid item xs={12}>
                  {/* <Context.Provider value={{ id, symbol: coin.symbol }}>
                    <Exchange />
                  </Context.Provider> */}
                </Grid>
                <Grid item xs={12}>
                  {/* <Context.Provider value={{ coin: coin }}>
                    <Links />
                  </Context.Provider> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    );
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={data ? false : true}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};