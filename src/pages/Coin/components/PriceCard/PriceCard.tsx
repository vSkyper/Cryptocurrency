import { Typography, Grid, Box } from '@mui/material';
import { StyledLinearProgress, ModernCard } from './styled';
import { Price, PriceChange } from './components';
import { priceChange } from 'constants/coin';
import { PriceCardProps } from './interface';

export default function PriceCard(props: PriceCardProps) {
  const { data } = props;

  const progressBarCurrent: number =
    (data.market_data.current_price?.usd || 0) -
    (data.market_data.low_24h?.usd || 0);

  const progressBarHigh: number =
    (data.market_data.high_24h?.usd || 1) -
    (data.market_data.low_24h?.usd || 0);

  let progressBar: number = 100 * (progressBarCurrent / progressBarHigh);

  if (progressBar > 100) {
    progressBar = 100;
  } else if (progressBar < 0) {
    progressBar = 0;
  }

  return (
    <Grid container direction='column' spacing={3}>
      <Grid size={12}>
        <ModernCard>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Price marketData={data.market_data} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant='subtitle2'
              sx={{
                fontWeight: 600,
                color: 'text.secondary',
                mb: 1,
                textAlign: 'center',
              }}
            >
              24h Price Range
            </Typography>
            <Box sx={{ px: 1 }}>
              <StyledLinearProgress variant='determinate' value={progressBar} />
              <Grid container justifyContent='space-between' sx={{ mt: 0.5 }}>
                <Typography
                  variant='caption'
                  sx={{ color: 'text.secondary', fontWeight: 500 }}
                >
                  {(data.market_data.low_24h?.usd || 0).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Typography>
                <Typography
                  variant='caption'
                  sx={{ color: 'text.secondary', fontWeight: 500 }}
                >
                  {(data.market_data.high_24h?.usd || 0).toLocaleString(
                    'en-US',
                    {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 8,
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </Typography>
              </Grid>
            </Box>
          </Box>
        </ModernCard>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={2}>
          {priceChange.map((days) => (
            <PriceChange key={days} marketData={data.market_data} days={days} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
