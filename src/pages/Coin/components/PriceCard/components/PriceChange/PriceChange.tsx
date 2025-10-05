import { Grid } from '@mui/material';
import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';
import { LabelText, PercentageText, StyledPriceCard } from './styled';

const formatPercentage = (value: number): string => {
  return (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });
};

export default function PriceChange(props: PriceChangeProps) {
  const { marketData, days } = props;

  let priceChange: unknown =
    marketData[`price_change_percentage_${days}` as keyof IMarketData];

  if (!priceChange) priceChange = 0;

  const isPositive = (priceChange as number) >= 0;

  return (
    <Grid size={{ xs: 6, sm: 4, lg: 6 }}>
      <StyledPriceCard isPositive={isPositive}>
        <PercentageText variant='h6' align='center'>
          {formatPercentage(priceChange as number)}
        </PercentageText>
        <LabelText variant='caption' align='center'>
          {days} Change
        </LabelText>
      </StyledPriceCard>
    </Grid>
  );
}
