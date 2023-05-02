import { Typography, Grid, Box } from '@mui/material';
import { ICoin } from '../../../../interfaces';
import { Card } from '../../../../styled';
import { StyledLinearProgress } from './styled';
import { Price, PriceChange } from './components';
import { priceChange } from '../../../../constants';

interface Props {
  data: ICoin
}

export default function PriceCard({ data }: Props) {

  let progressBarCurrent =
    Number(data.market_data.current_price.usd) -
    Number(data.market_data.low_24h.usd);
  let progressBarHigh =
    Number(data.market_data.high_24h.usd) -
    Number(data.market_data.low_24h.usd);
  let progressBar = 100 * (progressBarCurrent / progressBarHigh);

  if (progressBar > 100) {
    progressBar = 100;
  } else if (progressBar < 0) {
    progressBar = 0;
  }

  return (
    <Grid container direction='column'>
      <Grid item xs={12}>
        <Card>
          <Price marketData={data.market_data} />
          <Typography fontWeight='fontWeightLight'>Price</Typography>
          <Box sx={{ width: '90%' }}>
            <StyledLinearProgress variant='determinate' value={progressBar} />
            <Grid container justifyContent='space-between'>
              <Grid item>
                {Number(data.market_data.low_24h.usd).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Grid>
              <Grid item fontWeight='fontWeightLight'>
                24h Range
              </Grid>
              <Grid item>
                {Number(data.market_data.high_24h.usd).toLocaleString('en-US', {
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
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={2}>
          {priceChange.map((days) => (
            <PriceChange key={days} marketData={data.market_data} days={days} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};