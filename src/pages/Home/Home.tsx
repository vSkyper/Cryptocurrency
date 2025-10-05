import { Box, Container } from '@mui/material';
import { Global, Table } from './components';
import useFetch from 'hooks/useFetch';
import { ICoins, IGlobalData } from 'interfaces';
import { ErrorModal, LoadingModal } from 'components';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';
const GLOBAL_API_URL = `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${API_KEY}`;
const COINS_API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

export default function Home() {
  const { data: globalData, error: globalDataError } =
    useFetch<IGlobalData>(GLOBAL_API_URL);
  const { data: coins, error: coinsError } = useFetch<ICoins[]>(COINS_API_URL);

  if (globalDataError || coinsError) return <ErrorModal />;
  if (!globalData || !coins) return <LoadingModal />;

  return (
    <Box
      component='main'
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 2 },
        }}
      >
        <Global globalData={globalData} />
        <Table coins={coins} />
      </Container>
    </Box>
  );
}
