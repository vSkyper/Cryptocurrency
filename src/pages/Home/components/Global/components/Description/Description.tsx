import { Typography } from '@mui/material';
import { DescriptionProps } from './interface';

export default function Description(props: DescriptionProps) {
  const { globalData } = props;

  const marketCapText: string = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  }).format(globalData.data.total_market_cap.usd);

  const marketCapPercentage: string = (
    globalData.data.market_cap_change_percentage_24h_usd / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  const totalVolumeText: string = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  }).format(globalData.data.total_volume.usd);

  const marketCapPercentageBTC: string = (
    globalData.data.market_cap_percentage.btc / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  const marketCapPercentageETH: string = (
    globalData.data.market_cap_percentage.eth / 100
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

  const cryptocurrencies: string =
    globalData.data.active_cryptocurrencies.toLocaleString('en-US');

  return (
    <Typography
      variant='body1'
      sx={{
        fontWeight: 400,
        lineHeight: 1.6,
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: { xs: '0.95rem', sm: '1rem' },
      }}
    >
      The global cryptocurrency market cap today is{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        {marketCapText}
      </Typography>
      , a{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color:
            globalData.data.market_cap_change_percentage_24h_usd < 0
              ? '#ff6b6b'
              : '#51cf66',
        }}
      >
        {marketCapPercentage}
      </Typography>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        {totalVolumeText}
      </Typography>
      . Bitcoin dominance is at{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#f7931a',
        }}
      >
        {marketCapPercentageBTC}
      </Typography>{' '}
      and Ethereum dominance is at{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#627eea',
        }}
      >
        {marketCapPercentageETH}
      </Typography>
      . CoinGecko API is now tracking{' '}
      <Typography
        component='span'
        sx={{
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        {cryptocurrencies}
      </Typography>{' '}
      cryptocurrencies.
    </Typography>
  );
}
