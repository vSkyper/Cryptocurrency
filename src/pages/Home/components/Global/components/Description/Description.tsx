import { Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { DescriptionProps } from './interface';

function Description(props: DescriptionProps) {
  const { globalData } = props;

  const formattedValues = useMemo(
    () => ({
      marketCapText: Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
      }).format(globalData.data.total_market_cap.usd),

      marketCapPercentage: (
        globalData.data.market_cap_change_percentage_24h_usd / 100
      ).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),

      totalVolumeText: Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
      }).format(globalData.data.total_volume.usd),

      marketCapPercentageBTC: (
        globalData.data.market_cap_percentage.btc / 100
      ).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),

      marketCapPercentageETH: (
        globalData.data.market_cap_percentage.eth / 100
      ).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'percent',
      }),

      cryptocurrencies:
        globalData.data.active_cryptocurrencies.toLocaleString('en-US'),

      changeColor:
        globalData.data.market_cap_change_percentage_24h_usd < 0
          ? '#ff6b6b'
          : '#51cf66',
    }),
    [globalData]
  );

  return (
    <Typography
      variant='body2'
      sx={{
        fontWeight: 400,
        lineHeight: 1.5,
        color: 'text.secondary',
        fontSize: { xs: '0.85rem', sm: '0.9rem' },
      }}
    >
      The global cryptocurrency market cap today is{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        {formattedValues.marketCapText}
      </Typography>
      , a{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: formattedValues.changeColor,
        }}
      >
        {formattedValues.marketCapPercentage}
      </Typography>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        {formattedValues.totalVolumeText}
      </Typography>
      . Bitcoin dominance is at{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#f7931a',
        }}
      >
        {formattedValues.marketCapPercentageBTC}
      </Typography>{' '}
      and Ethereum dominance is at{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#627eea',
        }}
      >
        {formattedValues.marketCapPercentageETH}
      </Typography>
      . CoinGecko API is now tracking{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        {formattedValues.cryptocurrencies}
      </Typography>{' '}
      cryptocurrencies.
    </Typography>
  );
}

export default memo(Description);
