import { Box, Fade } from '@mui/material';
import { Global, Table } from './components';
import useFetch from 'hooks/useFetch';
import { ICoins, IGlobalData } from 'interfaces';
import { ErrorModal, LoadingModal } from 'components';
import { ContentContainer, GradientBackground } from './styled';

export default function Home() {
  const { data: globalData, error: globalDataError } = useFetch<IGlobalData>(
    'https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee'
  );
  const { data: coins, error: coinsError } = useFetch<ICoins[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
  );

  if (globalDataError || coinsError) return <ErrorModal />;

  if (!globalData || !coins) return <LoadingModal />;

  return (
    <main>
      <ContentContainer maxWidth='xl'>
        <GradientBackground />
        <Fade in timeout={800}>
          <Box>
            <Global globalData={globalData} />
          </Box>
        </Fade>
        <Fade in timeout={1200}>
          <Box>
            <Table coins={coins} />
          </Box>
        </Fade>
      </ContentContainer>
    </main>
  );
}
