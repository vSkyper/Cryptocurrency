import {
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Name } from './styled';
import { Exchange, Links, PriceCard, Sparkline, StackData } from './components';
import { ErrorModal, LoadingModal } from 'components';
import { ICoin } from 'interfaces';
import useFetch from 'hooks/useFetch';

export default function Coin() {
  const { id } = useParams();

  const { data, error } = useFetch<ICoin>(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  if (!id || error) return <ErrorModal />;

  if (!data) return <LoadingModal />;

  return (
    <main>
      <Name sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar
          src={data.image?.large}
          alt={data.name}
          sx={{
            width: 48,
            height: 48,
            boxShadow: 1,
            border: (theme) => `1px solid ${theme.palette.grey[800]}`,
            bgcolor: 'transparent',
            filter: 'brightness(0.92) contrast(1.04)',
            mr: 2,
          }}
        />
        <Stack direction='column' spacing={0.4}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5,
              color: (theme) => theme.palette.grey[100],
            }}
          >
            {data.name}
          </Typography>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Chip
              size='medium'
              label={data.symbol?.toUpperCase()}
              sx={{
                fontWeight: 500,
                borderRadius: 999,
                border: (theme) => `1px dashed ${theme.palette.divider}`,
                letterSpacing: 0.5,
                fontSize: 14,
                height: 28,
              }}
            />
            {data.market_cap_rank && (
              <Chip
                size='medium'
                color='primary'
                variant='outlined'
                label={`#${data.market_cap_rank}`}
                sx={{
                  fontWeight: 600,
                  borderRadius: 999,
                  background: (theme) =>
                    `linear-gradient(90deg, ${theme.palette.primary.main}22, ${
                      theme.palette.secondary?.main || '#ab47bc'
                    }22)`,
                  borderColor: 'primary.main',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset',
                  fontSize: 14,
                  height: 28,
                  px: 1.2,
                }}
              />
            )}
          </Stack>
        </Stack>
      </Name>
      <Container maxWidth='xl'>
        <Grid
          container
          direction={{ xs: 'column-reverse', lg: 'row' }}
          spacing={2}
        >
          <Grid size={{ xs: 12, lg: 7 }}>
            <Sparkline id={id} />
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <PriceCard data={data} />
          </Grid>
        </Grid>
        <Grid
          container
          direction={{ xs: 'column-reverse', lg: 'row' }}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Grid size={{ xs: 12, lg: 7 }}>
            <StackData marketData={data.market_data} />
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Grid container direction='column' spacing={2}>
              <Grid size={12}>
                <Exchange id={id} symbol={data.symbol} />
              </Grid>
              <Grid size={12}>
                <Links data={data} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
