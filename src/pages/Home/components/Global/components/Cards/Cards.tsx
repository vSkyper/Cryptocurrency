import { Grid, useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const cardConfigs: CardConfig[] = useMemo(
    () => [
      {
        key: 'marketCap',
        value: formatCurrency(globalData.data.total_market_cap.usd),
        label: 'Market Capitalization',
        color: '#409CFF',
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
        label: '24h Trading Volume',
        color: '#3B82F6',
        timeout: 800,
      },
      {
        key: 'btcDominance',
        value: formatPercentage(globalData.data.market_cap_percentage.btc),
        label: 'Bitcoin Market Cap Dominance',
        color: '#f7931a',
        timeout: 1000,
      },
      {
        key: 'ethDominance',
        value: formatPercentage(globalData.data.market_cap_percentage.eth),
        label: 'Ethereum Market Cap Dominance',
        color: '#627eea',
        timeout: 1100,
      },
      {
        key: 'activeCryptos',
        value: formatNumber(globalData.data.active_cryptocurrencies),
        label: 'Active Cryptocurrencies',
        color: '#ffffff',
        timeout: 1200,
      },
    ],
    [globalData]
  );

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {cardConfigs.map((config) => (
        <StatCard
          key={config.key}
          config={config}
          toggle={toggle}
          isMobile={isMobile}
        />
      ))}
    </Grid>
  );
}

export default memo(Cards);
