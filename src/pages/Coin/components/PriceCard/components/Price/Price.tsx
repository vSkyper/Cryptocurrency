import { Typography } from '@mui/material';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { Percentage } from 'styled';
import { PriceProps } from './interface';

export default function Price(props: PriceProps) {
  const { marketData } = props;

  return (
    <Typography
      variant='h4'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
        letterSpacing: 0.2,
        background: 'linear-gradient(180deg, #e0e0e0, rgba(224,224,224,0.5))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {(marketData.current_price?.usd || 0).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 8,
        style: 'currency',
        currency: 'USD',
      })}
      {(marketData.price_change_percentage_24h || 0) < 0 ? (
        <Percentage
          sx={{
            color: 'error.light',
            transition: 'transform 200ms ease',
            '&:hover svg': { transform: 'translateY(1px)' },
          }}
        >
          {((marketData.price_change_percentage_24h || 0) / 100).toLocaleString(
            'en-US',
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: 'percent',
            }
          )}
          <TrendingDownIcon />
        </Percentage>
      ) : (
        <Percentage
          sx={{
            color: 'success.light',
            transition: 'transform 200ms ease',
            '&:hover svg': { transform: 'translateY(-1px)' },
          }}
        >
          {((marketData.price_change_percentage_24h || 0) / 100).toLocaleString(
            'en-US',
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: 'percent',
            }
          )}
          <TrendingUpIcon />
        </Percentage>
      )}
    </Typography>
  );
}
