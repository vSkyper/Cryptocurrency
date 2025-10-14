import { memo, useMemo } from 'react';
import { StatCard, CardConfig } from './components';
import { CardsProps } from './interface';

const formatCurrency = (value: number): string =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value);

const formatPercentage = (value: number): string =>
  (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

const formatNumber = (value: number): string => value.toLocaleString('en-US');

function Cards({ toggle, globalData }: CardsProps) {
  const cardConfigs: CardConfig[] = useMemo(
    () => [
      {
        key: 'marketCap',
        value: formatCurrency(globalData.data.total_market_cap.usd),
        label: 'Market Cap',
        color: 'var(--brand-blue)',
        percentage: {
          value: formatPercentage(
            globalData.data.market_cap_change_percentage_24h_usd
          ),
          change: globalData.data.market_cap_change_percentage_24h_usd,
        },
        timeout: 0,
      },
      {
        key: 'totalVolume',
        value: formatCurrency(globalData.data.total_volume.usd),
        label: '24h Volume',
        color: 'var(--brand-blue-light)',
        timeout: 100,
      },
      {
        key: 'btcDominance',
        value: formatPercentage(globalData.data.market_cap_percentage.btc),
        label: 'BTC Dominance',
        color: 'var(--brand-bitcoin)',
        timeout: 200,
      },
      {
        key: 'ethDominance',
        value: formatPercentage(globalData.data.market_cap_percentage.eth),
        label: 'ETH Dominance',
        color: 'var(--brand-ethereum)',
        timeout: 300,
      },
      {
        key: 'activeCryptos',
        value: formatNumber(globalData.data.active_cryptocurrencies),
        label: 'Active Cryptos',
        color: '#ffffff',
        timeout: 400,
      },
    ],
    [globalData]
  );

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-6'>
      {cardConfigs.map((config) => (
        <StatCard key={config.key} config={config} toggle={toggle} />
      ))}
    </div>
  );
}

export default memo(Cards);
