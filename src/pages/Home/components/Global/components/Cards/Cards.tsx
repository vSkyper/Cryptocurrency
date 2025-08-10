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
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grow in={toggle} timeout={600}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card>
            <Typography
              variant='h6'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 600,
                color: '#ffffff',
                mb: 1,
                fontSize: { xs: '1rem', sm: '1.15rem' },
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
              variant='body2'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.75)',
                textAlign: 'center',
                fontSize: { xs: '0.75rem', sm: '0.825rem' },
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
              variant='h6'
              sx={{
                fontWeight: 600,
                color: '#ffffff',
                mb: 1,
                fontSize: { xs: '1rem', sm: '1.15rem' },
              }}
            >
              {totalVolume}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.75)',
                textAlign: 'center',
                fontSize: { xs: '0.75rem', sm: '0.825rem' },
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
              variant='h6'
              sx={{
                fontWeight: 600,
                color: '#f7931a',
                mb: 1,
                fontSize: { xs: '1rem', sm: '1.15rem' },
              }}
            >
              {marketCapPercentageBTC}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.75)',
                textAlign: 'center',
                fontSize: { xs: '0.75rem', sm: '0.825rem' },
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
              variant='h6'
              sx={{
                fontWeight: 600,
                color: '#ffffff',
                mb: 1,
                fontSize: { xs: '1rem', sm: '1.15rem' },
              }}
            >
              {cryptocurrencies}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.75)',
                textAlign: 'center',
                fontSize: { xs: '0.75rem', sm: '0.825rem' },
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
