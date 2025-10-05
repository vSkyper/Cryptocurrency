import { Stack } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import { format, formatDistance } from 'date-fns';
import { StackDataProps } from './interface';
import {
  DataRow,
  ModernDataCard,
  StyledDivider,
  SectionTitle,
  LabelText,
  ValueText,
  PriceRangeContainer,
  LowPriceText,
  PriceSeparator,
  HighPriceText,
  RankChip,
  PriceChangeContainer,
  PriceInfoRow,
  ChangeChip,
  DateText,
} from './styled';

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
    style: 'currency',
    currency: 'USD',
  });

const formatNumber = (value: number, maxDecimals = 0) =>
  value.toLocaleString('en-US', { maximumFractionDigits: maxDecimals });

const formatPercentage = (value: number) =>
  (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

const formatDateWithDistance = (date: string | number | Date) => {
  const dateObj = new Date(date);
  return `${format(dateObj, 'MMM d, y')} (${formatDistance(
    Date.now(),
    dateObj
  )} ago)`;
};

export default function StackData({ marketData }: StackDataProps) {
  return (
    <ModernDataCard>
      <SectionTitle variant='h6'>Market Statistics</SectionTitle>

      <Stack divider={<StyledDivider />} spacing={0}>
        <DataRow>
          <LabelText>Market Capitalization</LabelText>
          <ValueText>
            {formatCurrency(marketData.market_cap?.usd || 0)}
          </ValueText>
        </DataRow>

        <DataRow>
          <LabelText>24h Trading Volume</LabelText>
          <ValueText>
            {formatCurrency(marketData.total_volume?.usd || 0)}
          </ValueText>
        </DataRow>

        <DataRow>
          <LabelText>Volume / Market Cap</LabelText>
          <ValueText>
            {formatNumber(
              (marketData.total_volume?.usd || 0) /
                (marketData.market_cap?.usd || 1),
              8
            )}
          </ValueText>
        </DataRow>

        <DataRow>
          <LabelText>24h Low / 24h High</LabelText>
          <PriceRangeContainer>
            <LowPriceText>
              {formatCurrency(marketData.low_24h?.usd || 0)}
            </LowPriceText>
            <PriceSeparator variant='body2'>/</PriceSeparator>
            <HighPriceText>
              {formatCurrency(marketData.high_24h?.usd || 0)}
            </HighPriceText>
          </PriceRangeContainer>
        </DataRow>

        <DataRow>
          <LabelText>Market Cap Rank</LabelText>
          <RankChip
            label={
              marketData.market_cap_rank
                ? `#${marketData.market_cap_rank}`
                : 'N/A'
            }
            size='small'
          />
        </DataRow>

        <DataRow>
          <LabelText>Circulating Supply</LabelText>
          <ValueText>
            {formatNumber(marketData.circulating_supply || 0)}
          </ValueText>
        </DataRow>

        <DataRow>
          <LabelText>Total Supply</LabelText>
          <ValueText>{formatNumber(marketData.total_supply || 0)}</ValueText>
        </DataRow>

        <DataRow>
          <LabelText>All-Time High</LabelText>
          <PriceChangeContainer>
            <PriceInfoRow>
              <ValueText>{formatCurrency(marketData.ath?.usd || 0)}</ValueText>
              <ChangeChip
                icon={
                  (marketData.ath_change_percentage?.usd || 0) < 0 ? (
                    <TrendingDownIcon />
                  ) : (
                    <TrendingUpIcon />
                  )
                }
                label={formatPercentage(
                  marketData.ath_change_percentage?.usd || 0
                )}
                size='small'
                isNegative={(marketData.ath_change_percentage?.usd || 0) < 0}
              />
            </PriceInfoRow>
            <DateText variant='caption'>
              {formatDateWithDistance(marketData.ath_date?.usd || 0)}
            </DateText>
          </PriceChangeContainer>
        </DataRow>

        <DataRow>
          <LabelText>All-Time Low</LabelText>
          <PriceChangeContainer>
            <PriceInfoRow>
              <ValueText>{formatCurrency(marketData.atl?.usd || 0)}</ValueText>
              <ChangeChip
                icon={
                  (marketData.atl_change_percentage?.usd || 0) < 0 ? (
                    <TrendingDownIcon />
                  ) : (
                    <TrendingUpIcon />
                  )
                }
                label={formatPercentage(
                  marketData.atl_change_percentage?.usd || 0
                )}
                size='small'
                isNegative={(marketData.atl_change_percentage?.usd || 0) < 0}
              />
            </PriceInfoRow>
            <DateText variant='caption'>
              {formatDateWithDistance(marketData.atl_date?.usd || 0)}
            </DateText>
          </PriceChangeContainer>
        </DataRow>
      </Stack>
    </ModernDataCard>
  );
}
