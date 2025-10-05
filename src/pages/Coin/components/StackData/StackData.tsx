import { Typography, Stack, Box, Chip } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import { format, formatDistance } from 'date-fns';
import { StackDataProps } from './interface';
import { DataRow, ModernDataCard, StyledDivider } from './styled';

export default function StackData(props: StackDataProps) {
  const { marketData } = props;

  return (
    <ModernDataCard>
      <Typography
        variant='h6'
        sx={{
          mb: 3,
          fontWeight: 700,
          background: (theme) => `linear-gradient(135deg, 
              ${theme.palette.text.primary}, 
              ${theme.palette.primary.main}aa
            )`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          zIndex: 1,
          position: 'relative',
        }}
      >
        Market Statistics
      </Typography>

      <Stack divider={<StyledDivider />} spacing={0}>
        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            Market Capitalization
          </Typography>
          <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
            {(marketData.market_cap?.usd || 0).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            24h Trading Volume
          </Typography>
          <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
            {(marketData.total_volume?.usd || 0).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            Volume / Market Cap
          </Typography>
          <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
            {(
              (marketData.total_volume?.usd || 0) /
              (marketData.market_cap?.usd || 1)
            ).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
            })}
          </Typography>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            24h Low / 24h High
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography fontWeight={500} sx={{ color: 'error.light' }}>
              {(marketData.low_24h?.usd || 0).toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 8,
                style: 'currency',
                currency: 'USD',
              })}
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              /
            </Typography>
            <Typography fontWeight={500} sx={{ color: 'success.light' }}>
              {(marketData.high_24h?.usd || 0).toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 8,
                style: 'currency',
                currency: 'USD',
              })}
            </Typography>
          </Box>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            Market Cap Rank
          </Typography>
          <Chip
            label={
              marketData.market_cap_rank
                ? `#${marketData.market_cap_rank}`
                : 'N/A'
            }
            size='small'
            sx={{
              background:
                'linear-gradient(135deg, rgba(64, 156, 255, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
              color: '#409CFF',
              fontWeight: 700,
              border: '1px solid rgba(64, 156, 255, 0.4)',
              fontSize: '0.85rem',
              letterSpacing: '0.5px',
            }}
          />
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            Circulating Supply
          </Typography>
          <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
            {(marketData.circulating_supply || 0).toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}
          </Typography>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            Total Supply
          </Typography>
          <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
            {(marketData.total_supply || 0).toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}
          </Typography>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            All-Time High
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
                {(marketData.ath?.usd || 0).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Typography>
              <Chip
                icon={
                  (marketData.ath_change_percentage?.usd || 0) < 0 ? (
                    <TrendingDownIcon />
                  ) : (
                    <TrendingUpIcon />
                  )
                }
                label={(
                  (marketData.ath_change_percentage?.usd || 0) / 100
                ).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  style: 'percent',
                })}
                size='small'
                sx={{
                  background:
                    (marketData.ath_change_percentage?.usd || 0) < 0
                      ? 'linear-gradient(135deg, rgba(244, 67, 54, 0.2) 0%, rgba(244, 67, 54, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%)',
                  color:
                    (marketData.ath_change_percentage?.usd || 0) < 0
                      ? 'error.main'
                      : 'success.main',
                  fontWeight: 600,
                  border:
                    (marketData.ath_change_percentage?.usd || 0) < 0
                      ? '1px solid rgba(244, 67, 54, 0.3)'
                      : '1px solid rgba(76, 175, 80, 0.3)',
                }}
              />
            </Box>
            <Typography
              variant='caption'
              sx={{ color: 'text.disabled', mt: 0.5, display: 'block' }}
            >
              {format(new Date(marketData.ath_date?.usd || 0), 'MMM d, y')} (
              {formatDistance(
                Date.now(),
                new Date(marketData.ath_date?.usd || 0)
              )}{' '}
              ago)
            </Typography>
          </Box>
        </DataRow>

        <DataRow>
          <Typography fontWeight={600} sx={{ color: 'text.primary' }}>
            All-Time Low
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Typography fontWeight={500} sx={{ color: 'text.secondary' }}>
                {(marketData.atl?.usd || 0).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Typography>
              <Chip
                icon={
                  (marketData.atl_change_percentage?.usd || 0) < 0 ? (
                    <TrendingDownIcon />
                  ) : (
                    <TrendingUpIcon />
                  )
                }
                label={(
                  (marketData.atl_change_percentage?.usd || 0) / 100
                ).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  style: 'percent',
                })}
                size='small'
                sx={{
                  background:
                    (marketData.atl_change_percentage?.usd || 0) < 0
                      ? 'linear-gradient(135deg, rgba(244, 67, 54, 0.2) 0%, rgba(244, 67, 54, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.1) 100%)',
                  color:
                    (marketData.atl_change_percentage?.usd || 0) < 0
                      ? 'error.main'
                      : 'success.main',
                  fontWeight: 600,
                  border:
                    (marketData.atl_change_percentage?.usd || 0) < 0
                      ? '1px solid rgba(244, 67, 54, 0.3)'
                      : '1px solid rgba(76, 175, 80, 0.3)',
                }}
              />
            </Box>
            <Typography
              variant='caption'
              sx={{ color: 'text.disabled', mt: 0.5, display: 'block' }}
            >
              {format(new Date(marketData.atl_date?.usd || 0), 'MMM d, y')} (
              {formatDistance(
                Date.now(),
                new Date(marketData.atl_date?.usd || 0)
              )}{' '}
              ago)
            </Typography>
          </Box>
        </DataRow>
      </Stack>
    </ModernDataCard>
  );
}
