import { Grid, Typography } from '@mui/material';
import { IMarketData } from 'interfaces';
import { Card } from 'styled';

interface Props {
  marketData: IMarketData;
  days: string;
}

export default function PriceChange({ marketData, days }: Props) {
  const priceChange: number | undefined | null = (marketData as any)[
    `price_change_percentage_${days}`
  ];

  return (
    <Grid item xs={6} sm={4} lg={6}>
      <Card
        sx={
          (priceChange || 0) < 0
            ? { color: 'error.light' }
            : { color: 'success.light' }
        }
      >
        <Typography variant='h5'>
          {((priceChange || 0) / 100).toLocaleString('en-US', {
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
