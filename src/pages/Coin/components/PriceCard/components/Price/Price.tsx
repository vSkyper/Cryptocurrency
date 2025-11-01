import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { PriceProps } from './interface';
import { formatCurrency, formatPercentage } from 'utils/formatters';

const PRICE_GRADIENT_CLASSES =
  'text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent ' +
  'inline-block bg-[linear-gradient(180deg,#e0e0e0,rgba(224,224,224,0.5))]';

const BADGE_BASE_CLASSES =
  'ml-3 inline-flex items-center font-semibold text-sm px-3 py-1 rounded-full ' +
  'bg-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] ' +
  'shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_10%,transparent)]';

const ICON_STYLES = { fontSize: '1rem', ml: '6px' };

export default function Price({ marketData }: PriceProps) {
  const currentPrice = marketData.current_price?.usd || 0;
  const priceChange = marketData.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;

  const colorClass = isPositive
    ? 'text-[var(--brand-positive)]'
    : 'text-[var(--brand-negative)]';

  const TrendIcon = isPositive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <div className='flex items-center justify-center'>
      <h3 className={PRICE_GRADIENT_CLASSES}>{formatCurrency(currentPrice)}</h3>

      <span className={`${BADGE_BASE_CLASSES} ${colorClass}`}>
        {formatPercentage(priceChange)}
        <TrendIcon sx={ICON_STYLES} />
      </span>
    </div>
  );
}
