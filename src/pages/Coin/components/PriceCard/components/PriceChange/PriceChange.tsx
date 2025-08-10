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
    <Grid size={{ xs: 6, sm: 4, lg: 6 }}>
      <Card
        sx={{
          ...((priceChange as number) < 0
            ? { color: 'error.light' }
            : { color: 'success.light' }),
          transition:
            'transform 180ms ease, box-shadow 180ms ease, background 180ms ease',
          bgcolor: 'background.paper',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
          },
        }}
      >
        <Typography variant='h6' align='center'>
          {((priceChange as number) / 100).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'percent',
          })}
        </Typography>
        <Typography fontWeight='fontWeightLight' align='center'>
          Price Change {days}
        </Typography>
      </Card>
    </Grid>
  );
}
