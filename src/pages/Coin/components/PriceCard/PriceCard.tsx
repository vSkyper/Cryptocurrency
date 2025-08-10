import { Typography, Grid, Box } from '@mui/material';
import { StyledLinearProgress } from './styled';
import { Price, PriceChange } from './components';
import { Card } from 'styled';
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
    <Grid container direction='column'>
      <Grid size={12}>
        <Card
          sx={{
            p: 2,
            width: '100%',
            bgcolor: 'background.paper',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Price marketData={data.market_data} />
          <Box sx={{ height: 8 }} />
          <Typography fontWeight='fontWeightLight'>Price</Typography>
          <Box sx={{ width: '90%', mt: 1 }}>
            <StyledLinearProgress variant='determinate' value={progressBar} />
            <Grid container justifyContent='space-between'>
              <Grid>
                {(data.market_data.low_24h?.usd || 0).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Grid>
              <Typography fontWeight='fontWeightLight'>24h Range</Typography>
              <Grid>
                {(data.market_data.high_24h?.usd || 0).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid size={12} sx={{ mt: 2 }}>
        <Grid container justifyContent='center' spacing={2}>
          {priceChange.map((days) => (
            <PriceChange key={days} marketData={data.market_data} days={days} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
