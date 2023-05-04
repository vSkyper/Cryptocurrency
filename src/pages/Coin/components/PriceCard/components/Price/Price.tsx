import { Typography } from '@mui/material';
import { Percentage } from '../../../../../../styled';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { IMarketData } from '../../../../../../interfaces';

interface Props {
  marketData: IMarketData;
}

export default function Price({ marketData }: Props) {
  return (
    <Typography
      variant='h5'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {marketData.current_price.usd.toLocaleString(
        'en-US',
        {
          minimumFractionDigits: 0,
          maximumFractionDigits: 8,
          style: 'currency',
          currency: 'USD',
        }
      )}
      {marketData.price_change_percentage_24h < 0 ? (
        <Percentage sx={{ color: 'error.light' }}>
          {(
            marketData.price_change_percentage_24h / 100
          ).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'percent',
          })}
          <TrendingDownIcon />
        </Percentage>
      ) : (
        <Percentage sx={{ color: 'success.light' }}>
          {(
            marketData.price_change_percentage_24h / 100
          ).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            style: 'percent',
          })}
          <TrendingUpIcon />
        </Percentage>
      )}
    </Typography>
  );
}