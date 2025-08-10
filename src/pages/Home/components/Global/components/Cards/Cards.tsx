import { Grid, Typography, Grow } from '@mui/material';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { Card, Percentage } from 'styled';
import { CardsProps } from './interface';

export default function Cards(props: CardsProps) {
  const { toggle, globalData } = props;

  const marketCap: string = globalData.data.total_market_cap.usd.toLocaleString(
    'en-US',
    {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
    }
  );

  const marketCapPercentage: string = (
    globalData.data.market_cap_change_percentage_24h_usd / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  const totalVolume: string = globalData.data.total_volume.usd.toLocaleString(
    'en-US',
    {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
    }
  );

  const marketCapPercentageBTC: string = (
    globalData.data.market_cap_percentage.btc / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  const cryptocurrencies: string =
    globalData.data.active_cryptocurrencies.toLocaleString('en-US');

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grow in={toggle} timeout={600}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <Typography
              variant='h5'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              {marketCap}
              {globalData.data.market_cap_change_percentage_24h_usd < 0 ? (
                <Percentage sx={{ color: '#ff6b6b' }}>
                  {marketCapPercentage}
                  <TrendingDownIcon />
                </Percentage>
              ) : (
                <Percentage sx={{ color: '#51cf66' }}>
                  {marketCapPercentage}
                  <TrendingUpIcon />
                </Percentage>
              )}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Market Capitalization
            </Typography>
          </Card>
        </Grid>
      </Grow>
      <Grow in={toggle} timeout={800}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              {totalVolume}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              24h Trading Volume
            </Typography>
          </Card>
        </Grid>
      </Grow>
      <Grow in={toggle} timeout={1000}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 700,
                color: '#f7931a',
                mb: 1.5,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              {marketCapPercentageBTC}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Bitcoin Market Cap Dominance
            </Typography>
          </Card>
        </Grid>
      </Grow>
      <Grow in={toggle} timeout={1200}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 1.5,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              {cryptocurrencies}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Active Cryptocurrencies
            </Typography>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
}
