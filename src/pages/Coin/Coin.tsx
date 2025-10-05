import { Container, Grid, Stack, Box, Slide } from '@mui/material';
import { useParams } from 'react-router-dom';
import { GradientBackground } from './styled';
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

export default function Coin() {
  const { id } = useParams();

  const { data, error } = useFetch<ICoin>(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee`
  );

  if (!id || error) return <ErrorModal />;

  if (!data) return <LoadingModal />;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <GradientBackground />
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 2 },
          transform: 'translateZ(0)',
          willChange: 'auto',
          contain: 'layout style',
          isolation: 'isolate',
        }}
      >
        <CoinHeader
          name={data.name}
          symbol={data.symbol}
          image={data.image?.large}
          marketCapRank={data.market_cap_rank}
        />

        <Grid
          container
          spacing={{ xs: 1, sm: 4 }}
          sx={{ transform: 'translateZ(0)' }}
        >
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={600}>
              <Box sx={{ transform: 'translateZ(0)' }}>
                <Sparkline id={id} />
              </Box>
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Slide direction='up' in timeout={700}>
              <Box sx={{ transform: 'translateZ(0)' }}>
                <PriceCard data={data} />
              </Box>
            </Slide>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 1, sm: 4 }}
          sx={{ mt: { xs: 1, sm: 2 }, transform: 'translateZ(0)' }}
        >
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={800}>
              <Box sx={{ transform: 'translateZ(0)' }}>
                <StackData marketData={data.market_data} />
              </Box>
            </Slide>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={{ xs: 1, sm: 2 }}>
              <Slide direction='up' in timeout={900}>
                <Box sx={{ transform: 'translateZ(0)' }}>
                  <Exchange id={id} symbol={data.symbol} />
                </Box>
              </Slide>

              <Slide direction='up' in timeout={1000}>
                <Box sx={{ transform: 'translateZ(0)' }}>
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
