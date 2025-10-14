import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { PriceProps } from './interface';

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
    <div className='flex items-center justify-center'>
      <h3 className='text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent inline-block bg-[linear-gradient(180deg,#e0e0e0,rgba(224,224,224,0.5))]'>
        {formatCurrency(currentPrice)}
      </h3>

      <span
        className={`ml-3 inline-flex items-center font-semibold text-sm px-3 py-1 rounded-full bg-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_10%,transparent)] ${
          isPositive
            ? 'text-[var(--brand-positive)]'
            : 'text-[var(--brand-negative)]'
        }`}
      >
        {formatPercentage(priceChange)}
        {isPositive ? (
          <TrendingUpIcon sx={{ fontSize: '1rem', ml: '6px' }} />
        ) : (
          <TrendingDownIcon sx={{ fontSize: '1rem', ml: '6px' }} />
        )}
      </span>
    </div>
  );
}
