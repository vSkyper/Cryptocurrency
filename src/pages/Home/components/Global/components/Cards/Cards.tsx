import { useMemo } from 'react';
import { StatCard, CardConfig } from './components';
import { CardsProps } from './interface';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
});

const percentageFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
});

const numberFormatter = new Intl.NumberFormat('en-US');

const formatCurrency = (value: number): string =>
  currencyFormatter.format(value);
const formatPercentage = (value: number): string =>
  percentageFormatter.format(value / 100);
const formatNumber = (value: number): string => numberFormatter.format(value);

export default function Cards({ toggle, globalData }: CardsProps) {
  const { data } = globalData;

  const cardConfigs: CardConfig[] = useMemo(
    () => [
      {
        key: 'marketCap',
        value: formatCurrency(data.total_market_cap.usd),
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
        value: formatCurrency(data.total_volume.usd),
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
        label: 'Active Cryptos',
        color: '#ffffff',
        timeout: 400,
      },
    ],
    [data]
  );

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-6'>
      {cardConfigs.map((config) => (
        <StatCard key={config.key} config={config} toggle={toggle} />
      ))}
    </div>
  );
}
