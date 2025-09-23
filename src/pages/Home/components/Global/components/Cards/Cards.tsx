import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { StatCard, CardConfig } from './components';
import { CardsProps } from './interface';

// Helper functions for data formatting
const formatCurrency = (value: number): string =>
  value.toLocaleString('en-US', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'USD',
  });

const formatPercentage = (value: number): string =>
  (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

const formatNumber = (value: number): string => value.toLocaleString('en-US');

export default function Cards({ toggle, globalData }: CardsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Prepare card configurations
  const cardConfigs: CardConfig[] = [
    {
      key: 'marketCap',
      value: formatCurrency(globalData.data.total_market_cap.usd),
      label: 'Market Capitalization',
      color: '#D0BCFF',
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
      color: '#CCC2DC',
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
      key: 'activeCryptos',
      value: formatNumber(globalData.data.active_cryptocurrencies),
      label: 'Active Cryptocurrencies',
      color: '#ffffff',
      timeout: 1200,
    },
  ];

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
