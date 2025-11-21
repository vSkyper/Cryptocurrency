import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';
import { formatPercentage } from 'utils/formatters';

export default function PriceChange({ marketData, days }: PriceChangeProps) {
  const key = `price_change_percentage_${days}` as keyof IMarketData;
  const priceChange = (marketData[key] as number) || 0;
  const isPositive = priceChange >= 0;

  const colorClass = isPositive
    ? 'text-(--brand-positive)'
    : 'text-(--brand-negative)';

  const topBarClass = isPositive
    ? 'bg-(--brand-positive)'
    : 'bg-(--brand-negative)';

  return (
    <div className='col-span-1'>
      <div
        className={`flex flex-col items-center justify-center relative overflow-hidden bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] ${colorClass}`}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-100 ${topBarClass}`}
        />

        <div className='font-bold text-lg sm:text-xl mb-1 tracking-tight'>
          {formatPercentage(priceChange)}
        </div>

        <div className='text-[0.65rem] sm:text-xs text-white/40 font-bold uppercase tracking-wide whitespace-nowrap'>
          {days} Change
        </div>
      </div>
    </div>
  );
}
