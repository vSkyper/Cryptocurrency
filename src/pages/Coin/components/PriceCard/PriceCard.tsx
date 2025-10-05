import { Grid } from '@mui/material';
import {
  StyledLinearProgress,
  ModernCard,
  PriceContainer,
  RangeSection,
  RangeTitle,
  ProgressContainer,
  RangeValue,
} from './styled';
import { Price, PriceChange } from './components';
import { priceChange } from 'constants/coin';
import { PriceCardProps } from './interface';

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
    style: 'currency',
    currency: 'USD',
  });

const calculateProgressBar = (
  current: number,
  low: number,
  high: number
): number => {
  const progressBarCurrent = current - low;
  const progressBarHigh = high - low || 1;
  const progress = 100 * (progressBarCurrent / progressBarHigh);
  return Math.max(0, Math.min(100, progress));
};

export default function PriceCard({ data }: PriceCardProps) {
  const { market_data } = data;
  const progressBar = calculateProgressBar(
    market_data.current_price?.usd || 0,
    market_data.low_24h?.usd || 0,
    market_data.high_24h?.usd || 1
  );

  return (
    <Grid container direction='column' spacing={3}>
      <Grid size={12}>
        <ModernCard>
          <PriceContainer>
            <Price marketData={market_data} />
          </PriceContainer>

          <RangeSection>
            <RangeTitle variant='subtitle2'>24h Price Range</RangeTitle>
            <ProgressContainer>
              <StyledLinearProgress variant='determinate' value={progressBar} />
              <Grid container justifyContent='space-between' sx={{ mt: 0.5 }}>
                <RangeValue variant='caption'>
                  {formatCurrency(market_data.low_24h?.usd || 0)}
                </RangeValue>
                <RangeValue variant='caption'>
                  {formatCurrency(market_data.high_24h?.usd || 0)}
                </RangeValue>
              </Grid>
            </ProgressContainer>
          </RangeSection>
        </ModernCard>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={2}>
          {priceChange.map((days) => (
            <PriceChange key={days} marketData={market_data} days={days} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
