import { Container, Grid, Stack, Box, Slide } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
  Exchange,
  Links,
  PriceCard,
  Sparkline,
  StackData,
  CoinHeader,
} from './components';
import { ErrorModal, LoadingModal } from 'components';
import { ICoin } from 'interfaces';
import useFetch from 'hooks/useFetch';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';
const SLIDE_TIMINGS = {
  chart: 600,
  priceCard: 700,
  stackData: 800,
  exchange: 900,
  links: 1000,
};

export default function Coin() {
  const { id } = useParams();

  const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=${API_KEY}`;
  const { data, error } = useFetch<ICoin>(apiUrl);

  if (!id || error) return <ErrorModal />;
  if (!data) return <LoadingModal />;

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
        <CoinHeader
          name={data.name}
          symbol={data.symbol}
          image={data.image?.large}
          marketCapRank={data.market_cap_rank}
        />

        <Grid container spacing={{ xs: 1, sm: 4 }}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={SLIDE_TIMINGS.chart}>
              <Box>
                <Sparkline id={id} />
              </Box>
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Slide direction='up' in timeout={SLIDE_TIMINGS.priceCard}>
              <Box>
                <PriceCard data={data} />
              </Box>
            </Slide>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 1, sm: 4 }}
          sx={{ mt: { xs: 1, sm: 2 } }}
        >
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={SLIDE_TIMINGS.stackData}>
              <Box>
                <StackData marketData={data.market_data} />
              </Box>
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={{ xs: 1, sm: 2 }}>
              <Slide direction='up' in timeout={SLIDE_TIMINGS.exchange}>
                <Box>
                  <Exchange id={id} symbol={data.symbol} />
                </Box>
              </Slide>

              <Slide direction='up' in timeout={SLIDE_TIMINGS.links}>
                <Box>
                  <Links data={data} />
                </Box>
              </Slide>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
