import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { PriceProps } from './interface';
import { PercentageChip, PriceText } from './styled';

const formatCurrency = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
    style: 'currency',
    currency: 'USD',
  });
};

const formatPercentage = (value: number): string => {
  return (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });
};

export default function Price(props: PriceProps) {
  const { marketData } = props;

  const currentPrice = marketData.current_price?.usd || 0;
  const priceChange = marketData.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;

  return (
    <PriceText variant='h4'>
      {formatCurrency(currentPrice)}
      <PercentageChip isPositive={isPositive}>
        {formatPercentage(priceChange)}
        {isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
      </PercentageChip>
    </PriceText>
  );
}
