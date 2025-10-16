import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';

const percentageFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'percent',
});

const formatPercentage = (value: number): string =>
  percentageFormatter.format(value / 100);

const BASE_CARD_CLASSES =
  'flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl relative overflow-hidden ' +
  'bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_85%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_60%,transparent)_100%)]';

export default function PriceChange({ marketData, days }: PriceChangeProps) {
  const key = `price_change_percentage_${days}` as keyof IMarketData;
  const priceChange = (marketData[key] as number) || 0;
  const isPositive = priceChange >= 0;

  const colorClass = isPositive
    ? 'text-[var(--brand-positive)]'
    : 'text-[var(--brand-negative)]';

  const topBarClass = isPositive
    ? 'bg-[var(--brand-positive)]'
    : 'bg-[var(--brand-negative)]';

  return (
    <div className='col-span-1 sm:col-span-1 lg:col-span-1'>
      <div className={`${BASE_CARD_CLASSES} ${colorClass}`}>
        <div
          className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-80 ${topBarClass}`}
        />

        <div className='font-semibold text-lg sm:text-xl mb-1'>
          {formatPercentage(priceChange)}
        </div>

        <div className='text-xs text-white/60 font-medium uppercase tracking-wide'>
          {days} Change
        </div>
      </div>
    </div>
  );
}
