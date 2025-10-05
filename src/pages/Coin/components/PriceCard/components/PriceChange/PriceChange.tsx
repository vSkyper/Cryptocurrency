import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';

const StyledPriceCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: 'rgba(64, 156, 255, 0.12)',
  border: '1px solid rgba(64, 156, 255, 0.25)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  transition:
    'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), background 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  contain: 'layout style paint',
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'translate3d(0, -3px, 0) scale(1.02)',
      background: 'rgba(64, 156, 255, 0.18)',
      border: '1px solid rgba(64, 156, 255, 0.35)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
    },
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
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
          color: isPositive ? 'success.main' : 'error.main',
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
