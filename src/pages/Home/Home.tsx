import { Container, Backdrop, CircularProgress, Dialog, Alert } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { Global, Table } from './components';
import { ICoins, IGlobalData } from '../../interfaces';

export default function Home() {
  const { data: globalData, error: globalDataError } = useFetch<IGlobalData>(
    'https://api.coingecko.com/api/v3/global'
  );
  const { data: coins, error: coinsError } = useFetch<ICoins[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
  );

  if (globalDataError || coinsError) return (
    <Dialog open={true}>
      <Alert severity="error">Something went wrong</Alert>
    </Dialog>
  );

  if (globalData && coins) {
    return (
      <main>
        <Container maxWidth='xl'>
          <Global globalData={globalData} />
          <Table coins={coins} />
        </Container>
      </main>
    );
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={coins ? false : true || globalData ? false : true}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};