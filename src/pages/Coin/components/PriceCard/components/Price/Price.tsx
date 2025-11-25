import {
  MdTrendingUp as TrendingUpIcon,
  MdTrendingDown as TrendingDownIcon,
} from 'react-icons/md';
import { PriceProps } from './interface';
import { formatCurrency, formatPercentage } from 'utils/formatters';

export default function Price({ marketData }: PriceProps) {
  const currentPrice = marketData.current_price?.usd || 0;
  const priceChange = marketData.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;

  const badgeColorClass = isPositive
    ? 'border-(--brand-positive)/30 bg-(--brand-positive)/10 text-(--brand-positive) shadow-[0_0_10px_rgba(0,255,157,0.1)]'
    : 'border-(--brand-negative)/30 bg-(--brand-negative)/10 text-(--brand-negative) shadow-[0_0_10px_rgba(255,0,85,0.1)]';
  const TrendIcon = isPositive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <div className='flex items-center justify-start'>
      <h3 className='text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
        {formatCurrency(currentPrice)}
      </h3>

      <span
        className={`ml-3 sm:ml-4 inline-flex items-center font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border backdrop-blur-md transition-all duration-300 tracking-wide ${badgeColorClass}`}
      >
        {formatPercentage(priceChange)}
        <TrendIcon size='1rem' className='ml-1' />
      </span>
    </div>
  );
}
