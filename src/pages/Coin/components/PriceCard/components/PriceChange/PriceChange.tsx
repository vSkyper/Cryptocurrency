import { Grid, Typography } from '@mui/material';
import { IMarketData } from 'interfaces';
import { Card } from 'styled';
import { PriceChangeProps } from './interface';

export default function PriceChange(props: PriceChangeProps) {
  const { marketData, days } = props;

  let priceChange: unknown =
    marketData[`price_change_percentage_${days}` as keyof IMarketData];

  if (!priceChange) priceChange = 0;

  return (
    <Grid item xs={6} sm={4} lg={6}>
      <Card
        sx={
          (priceChange as number) < 0
            ? { color: 'error.light' }
            : { color: 'success.light' }
        }
      >
        <Typography variant='h5'>
          {((priceChange as number) / 100).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'percent',
          })}
        </Typography>
        <Typography fontWeight='fontWeightLight'>
          Price Change {days}
        </Typography>
      </Card>
    </Grid>
  );
}
