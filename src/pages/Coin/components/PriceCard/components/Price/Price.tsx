import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { PriceProps } from './interface';
import { formatCurrency, formatPercentage } from 'utils/formatters';
import { COIN } from 'styles/styles';

export default function Price({ marketData }: PriceProps) {
  const currentPrice = marketData.current_price?.usd || 0;
  const priceChange = marketData.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;

  const colorClass = isPositive
    ? 'text-[var(--brand-positive)]'
    : 'text-[var(--brand-negative)]';

  const TrendIcon = isPositive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <div className={COIN.price.container}>
      <h3 className={COIN.price.value}>{formatCurrency(currentPrice)}</h3>

      <span className={`${COIN.price.badge} ${colorClass}`}>
        {formatPercentage(priceChange)}
        <TrendIcon sx={COIN.price.iconStyles} />
      </span>
    </div>
  );
}
