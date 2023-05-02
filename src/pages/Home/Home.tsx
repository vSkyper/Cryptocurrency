import { Container } from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { Global, Table } from './components';
import { ICoins, IGlobalData } from '../../interfaces';
import { ErrorModal, LoadingModal } from '../../components';

export default function Home() {
  const { data: globalData, error: globalDataError } = useFetch<IGlobalData>(
    'https://api.coingecko.com/api/v3/global'
  );
  const { data: coins, error: coinsError } = useFetch<ICoins[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
  );

  if (globalDataError || coinsError) return <ErrorModal />

  if (!globalData || !coins) return <LoadingModal />

  return (
    <main>
      <Container maxWidth='xl'>
        <Global globalData={globalData} />
        <Table coins={coins} />
      </Container>
    </main>
  );
};