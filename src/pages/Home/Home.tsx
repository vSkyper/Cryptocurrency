import { Container, Box, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Global, Table } from './components';
import useFetch from 'hooks/useFetch';
import { ICoins, IGlobalData } from 'interfaces';
import { ErrorModal, LoadingModal } from 'components';

const GradientBackground = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(600px circle at 20% 30%, rgba(120, 119, 198, 0.3), transparent 40%),
    radial-gradient(800px circle at 80% 70%, rgba(255, 119, 198, 0.2), transparent 40%),
    radial-gradient(1000px circle at 40% 80%, rgba(120, 200, 255, 0.15), transparent 40%)
  `,
  zIndex: -2,
  animation: 'float 20s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0px, 0px) scale(1)',
    },
    '33%': {
      transform: 'translate(10px, -10px) scale(1.05)',
    },
    '66%': {
      transform: 'translate(-5px, 5px) scale(0.95)',
    },
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}));

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
