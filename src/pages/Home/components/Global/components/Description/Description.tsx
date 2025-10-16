import { useMemo } from 'react';
import { DescriptionProps } from './interface';
import { Highlight } from './components';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
});

const percentageFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
});

const numberFormatter = new Intl.NumberFormat('en-US');

export default function Description({ globalData }: DescriptionProps) {
  const { data } = globalData;

  const stats = useMemo(() => {
    const marketCapChange = data.market_cap_change_percentage_24h_usd;

    return {
      marketCap: currencyFormatter.format(data.total_market_cap.usd),
      marketCapChange: percentageFormatter.format(marketCapChange / 100),
      totalVolume: currencyFormatter.format(data.total_volume.usd),
      btcDominance: percentageFormatter.format(
        data.market_cap_percentage.btc / 100
      ),
      ethDominance: percentageFormatter.format(
        data.market_cap_percentage.eth / 100
      ),
      cryptocurrencies: numberFormatter.format(data.active_cryptocurrencies),
      isNegative: marketCapChange < 0,
    };
  }, [data]);

  const changeColorClass = stats.isNegative
    ? 'text-[var(--brand-negative)]'
    : 'text-[var(--brand-positive)]';

  return (
    <p className='text-sm sm:text-base text-white/70 leading-relaxed max-w-5xl'>
      The global cryptocurrency market cap today is{' '}
      <Highlight className='text-white'>{stats.marketCap}</Highlight>, a{' '}
      <Highlight className={changeColorClass}>
        {stats.marketCapChange}
      </Highlight>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <Highlight className='text-white'>{stats.totalVolume}</Highlight>. Bitcoin
      dominance is at{' '}
      <Highlight className='text-[var(--brand-bitcoin)]'>
        {stats.btcDominance}
      </Highlight>{' '}
      and Ethereum dominance is at{' '}
      <Highlight className='text-[var(--brand-ethereum)]'>
        {stats.ethDominance}
      </Highlight>
      . CoinGecko API is now tracking{' '}
      <Highlight className='text-white'>{stats.cryptocurrencies}</Highlight>{' '}
      cryptocurrencies.
    </p>
  );
}
