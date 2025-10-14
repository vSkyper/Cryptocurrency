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

      isNegative: globalData.data.market_cap_change_percentage_24h_usd < 0,
    }),
    [globalData]
  );

  return (
    <p className='text-sm sm:text-base text-white/70 leading-relaxed max-w-5xl'>
      The global cryptocurrency market cap today is{' '}
      <span className='font-semibold text-white'>
        {formattedValues.marketCapText}
      </span>
      , a{' '}
      <span
        className={`font-semibold ${
          formattedValues.isNegative
            ? 'text-[var(--brand-negative)]'
            : 'text-[var(--brand-positive)]'
        }`}
      >
        {formattedValues.marketCapPercentage}
      </span>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <span className='font-semibold text-white'>
        {formattedValues.totalVolumeText}
      </span>
      . Bitcoin dominance is at{' '}
      <span className='font-semibold text-[var(--brand-bitcoin)]'>
        {formattedValues.marketCapPercentageBTC}
      </span>{' '}
      and Ethereum dominance is at{' '}
      <span className='font-semibold text-[var(--brand-ethereum)]'>
        {formattedValues.marketCapPercentageETH}
      </span>
      . CoinGecko API is now tracking{' '}
      <span className='font-semibold text-white'>
        {formattedValues.cryptocurrencies}
      </span>{' '}
      cryptocurrencies.
    </p>
  );
}

export default memo(Description);
