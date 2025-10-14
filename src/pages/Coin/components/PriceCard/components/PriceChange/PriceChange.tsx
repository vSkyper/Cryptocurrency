import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';

const formatPercentage = (value: number): string => {
  return (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });
};

export default function PriceChange(props: PriceChangeProps) {
  const { marketData, days } = props;

  let priceChange: unknown =
    marketData[`price_change_percentage_${days}` as keyof IMarketData];

  if (!priceChange) priceChange = 0;

  const isPositive = (priceChange as number) >= 0;

  return (
    <div className='col-span-1 sm:col-span-1 lg:col-span-1'>
      <div
        className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-[var(--bg-tertiary)] relative overflow-hidden ${
          isPositive
            ? 'text-[var(--brand-positive)]'
            : 'text-[var(--brand-negative)]'
        }`}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-80 ${
            isPositive
              ? 'bg-[var(--brand-positive)]'
              : 'bg-[var(--brand-negative)]'
          }`}
        />
        <div className='font-semibold text-lg sm:text-xl mb-1'>
          {formatPercentage(priceChange as number)}
        </div>
        <div className='text-xs text-white/60 font-medium uppercase tracking-wide'>
          {days} Change
        </div>
      </div>
    </div>
  );
}
