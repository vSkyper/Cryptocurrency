import { DescriptionProps } from './interface';
import { Highlight } from './components';
import { formatCompactCurrency, formatPercentage } from 'utils/formatters';

const numberFormatter = new Intl.NumberFormat('en-US');

export default function Description({ globalData }: DescriptionProps) {
  const { data } = globalData;

  const stats = () => {
    const marketCapChange = data.market_cap_change_percentage_24h_usd;

    return {
      marketCap: formatCompactCurrency(data.total_market_cap.usd),
      marketCapChange: formatPercentage(marketCapChange),
      totalVolume: formatCompactCurrency(data.total_volume.usd),
      btcDominance: formatPercentage(data.market_cap_percentage.btc),
      ethDominance: formatPercentage(data.market_cap_percentage.eth),
      cryptocurrencies: numberFormatter.format(data.active_cryptocurrencies),
      isNegative: marketCapChange < 0,
    };
  };

  const changeColorClass = stats().isNegative
    ? 'text-[var(--brand-negative)]'
    : 'text-[var(--brand-positive)]';

  return (
    <p className='text-sm sm:text-base text-white/70 leading-relaxed max-w-5xl'>
      The global cryptocurrency market cap today is{' '}
      <Highlight className='text-white'>{stats().marketCap}</Highlight>, a{' '}
      <Highlight className={changeColorClass}>
        {stats().marketCapChange}
      </Highlight>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <Highlight className='text-white'>{stats().totalVolume}</Highlight>.
      Bitcoin dominance is at{' '}
      <Highlight className='text-[var(--brand-bitcoin)]'>
        {stats().btcDominance}
      </Highlight>{' '}
      and Ethereum dominance is at{' '}
      <Highlight className='text-[var(--brand-ethereum)]'>
        {stats().ethDominance}
      </Highlight>
      . CoinGecko API is now tracking{' '}
      <Highlight className='text-white'>{stats().cryptocurrencies}</Highlight>{' '}
      cryptocurrencies.
    </p>
  );
}
