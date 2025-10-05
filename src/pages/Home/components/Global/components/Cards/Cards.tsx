import { useMediaQuery, useTheme } from '@mui/material';
import { memo, useMemo } from 'react';
import { StatCard, CardConfig } from './components';
import { CardsProps } from './interface';
import { CardsContainer } from './styled';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        timeout: 600,
      },
      {
        key: 'totalVolume',
        value: formatCurrency(globalData.data.total_volume.usd),
        label: '24h Volume',
        color: 'var(--brand-blue-light)',
        timeout: 800,
      },
      {
        key: 'btcDominance',
        value: formatPercentage(globalData.data.market_cap_percentage.btc),
        label: 'BTC Dominance',
        color: 'var(--brand-bitcoin)',
        timeout: 1000,
      },
      {
        key: 'ethDominance',
        value: formatPercentage(globalData.data.market_cap_percentage.eth),
        label: 'ETH Dominance',
        color: 'var(--brand-ethereum)',
        timeout: 1100,
      },
      {
        key: 'activeCryptos',
        value: formatNumber(globalData.data.active_cryptocurrencies),
        label: 'Active Cryptos',
        color: '#ffffff',
        timeout: 1200,
      },
    ],
    [globalData]
  );

  return (
    <CardsContainer container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
      {cardConfigs.map((config) => (
        <StatCard
          key={config.key}
          config={config}
          toggle={toggle}
          isMobile={isMobile}
        />
      ))}
    </CardsContainer>
  );
}

export default memo(Cards);
