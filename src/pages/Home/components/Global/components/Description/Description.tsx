import { DescriptionProps } from './interface';
import { Highlight } from './components';
import {
  formatCompactCurrency,
  formatPercentage,
  formatNumber,
} from 'utils/formatters';

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
      cryptocurrencies: formatNumber(data.active_cryptocurrencies),
      isNegative: marketCapChange < 0,
    };
  };

  const changeColorClass = stats().isNegative
    ? 'text-(--brand-negative) bg-(--brand-negative)/10 border-(--brand-negative)/20'
    : 'text-(--brand-positive) bg-(--brand-positive)/10 border-(--brand-positive)/20';

  return (
    <p className='text-sm sm:text-base text-white/70 leading-relaxed max-w-4xl font-medium tracking-wide'>
      The global cryptocurrency market cap today is{' '}
      <Highlight className='text-white'>{stats().marketCap}</Highlight>, a{' '}
      <Highlight className={changeColorClass}>
        {stats().marketCapChange}
      </Highlight>{' '}
      change in the last 24 hours. Total cryptocurrency trading volume in the
      last day is at{' '}
      <Highlight className='text-white'>{stats().totalVolume}</Highlight>.
      Bitcoin dominance is at{' '}
      <Highlight className='text-(--brand-bitcoin) bg-(--brand-bitcoin)/10 border-(--brand-bitcoin)/20'>
        {stats().btcDominance}
      </Highlight>{' '}
      and Ethereum dominance is at{' '}
      <Highlight className='text-(--brand-ethereum) bg-(--brand-ethereum)/10 border-(--brand-ethereum)/20'>
        {stats().ethDominance}
      </Highlight>
      . CoinGecko API is now tracking{' '}
      <Highlight className='text-white'>{stats().cryptocurrencies}</Highlight>{' '}
      cryptocurrencies.
    </p>
  );
}
