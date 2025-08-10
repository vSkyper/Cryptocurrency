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
    <Grid container justifyContent='center' spacing={2} sx={{ mt: 0.1 }}>
      <Grow in={toggle}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card>
            <Typography
              variant='h5'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {marketCap}
              {globalData.data.market_cap_change_percentage_24h_usd < 0 ? (
                <Percentage sx={{ color: 'error.light' }}>
                  {marketCapPercentage}
                  <TrendingDownIcon />
                </Percentage>
              ) : (
                <Percentage sx={{ color: 'success.light' }}>
                  {marketCapPercentage}
                  <TrendingUpIcon />
                </Percentage>
              )}
            </Typography>
            <Typography fontWeight='fontWeightLight'>
              Market Capitalization
            </Typography>
          </Card>
        </Grid>
      </Grow>
      <Grow
        in={toggle}
        style={{ transformOrigin: '0 0 0' }}
        {...(toggle ? { timeout: 1000 } : {})}
      >
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card>
            <Typography variant='h5'>{totalVolume}</Typography>
            <Typography fontWeight='fontWeightLight'>
              24h Trading Volume
            </Typography>
          </Card>
        </Grid>
      </Grow>
      <Grow
        in={toggle}
        style={{ transformOrigin: '0 0 0' }}
        {...(toggle ? { timeout: 2000 } : {})}
      >
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card>
            <Typography variant='h5'>{marketCapPercentageBTC}</Typography>
            <Typography fontWeight='fontWeightLight'>
              Bitcoin Market Cap Dominance
            </Typography>
          </Card>
        </Grid>
      </Grow>
      <Grow
        in={toggle}
        style={{ transformOrigin: '0 0 0' }}
        {...(toggle ? { timeout: 2500 } : {})}
      >
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Card>
            <Typography variant='h5'>{cryptocurrencies}</Typography>
            <Typography fontWeight='fontWeightLight'># of Coins</Typography>
          </Card>
        </Grid>
      </Grow>
    </Grid>
  );
}
