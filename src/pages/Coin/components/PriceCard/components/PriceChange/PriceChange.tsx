import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';

const StyledPriceCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  borderRadius: 12,
  background: 'rgba(20, 30, 48, 0.4)',
  position: 'relative',
  overflow: 'hidden',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'currentColor',
    opacity: 0.8,
  },
}));

export default function PriceChange(props: PriceChangeProps) {
  const { marketData, days } = props;

  let priceChange: unknown =
    marketData[`price_change_percentage_${days}` as keyof IMarketData];

  if (!priceChange) priceChange = 0;

  const isPositive = (priceChange as number) >= 0;

  return (
    <Grid size={{ xs: 6, sm: 4, lg: 6 }}>
      <StyledPriceCard
        sx={{
          color: isPositive ? '#51cf66' : '#ff6b6b',
          borderColor: isPositive
            ? 'rgba(81, 207, 102, 0.3)'
            : 'rgba(255, 107, 107, 0.3)',
          '&::before': {
            background: isPositive ? '#51cf66' : '#ff6b6b',
          },
        }}
      >
        <Typography
          variant='h6'
          align='center'
          sx={{
            fontWeight: 700,
            fontSize: '1.1rem',
            mb: 0.5,
          }}
        >
          {((priceChange as number) / 100).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'percent',
          })}
        </Typography>
        <Typography
          variant='caption'
          align='center'
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {days} Change
        </Typography>
      </StyledPriceCard>
    </Grid>
  );
}
