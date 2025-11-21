import { StatCard, CardConfig } from './components';
import { CardsProps } from './interface';
import {
  formatCompactCurrency,
  formatCompactNumber,
  formatPercentage,
  formatNumber,
} from 'utils/formatters';

export default function Cards({ toggle, globalData }: CardsProps) {
  const { data } = globalData;

  const cardConfigs: CardConfig[] = [
    {
      key: 'marketCap',
      value: formatCompactCurrency(data.total_market_cap.usd),
      mobileValue: formatCompactNumber(data.total_market_cap.usd),
      label: 'Market Cap',
      color: 'var(--brand-blue)',
      percentage: {
        value: formatPercentage(data.market_cap_change_percentage_24h_usd),
        change: data.market_cap_change_percentage_24h_usd,
      },
      timeout: 0,
    },
    {
      key: 'totalVolume',
      value: formatCompactCurrency(data.total_volume.usd),
      mobileValue: formatCompactNumber(data.total_volume.usd),
      label: '24h Volume',
      color: 'var(--brand-blue-light)',
      timeout: 100,
    },
    {
      key: 'btcDominance',
      value: formatPercentage(data.market_cap_percentage.btc),
      label: 'BTC Dominance',
      color: 'var(--brand-bitcoin)',
      timeout: 200,
    },
    {
      key: 'ethDominance',
      value: formatPercentage(data.market_cap_percentage.eth),
      label: 'ETH Dominance',
      color: 'var(--brand-ethereum)',
      timeout: 300,
    },
    {
      key: 'activeCryptos',
      value: formatNumber(data.active_cryptocurrencies),
      label: 'Cryptos',
      color: 'white',
      timeout: 400,
    },
    {
      key: 'markets',
      value: formatNumber(data.markets),
      label: 'Markets',
      color: 'white',
      timeout: 500,
    },
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6'>
      {cardConfigs.map((config) => (
        <StatCard key={config.key} config={config} toggle={toggle} />
      ))}
    </div>
  );
}
