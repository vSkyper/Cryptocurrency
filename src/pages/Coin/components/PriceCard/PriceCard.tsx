import { Price, PriceChange } from './components';
import { priceChange } from 'constants/coin';
import { PriceCardProps } from './interface';
import { formatCurrency } from 'utils/formatters';

const calculateProgressBar = (
  current: number,
  low: number,
  high: number
): number => {
  const range = high - low || 1;
  const position = current - low;
  const progress = 100 * (position / range);
  return Math.max(0, Math.min(100, progress));
};

export default function PriceCard({ data }: PriceCardProps) {
  const { market_data } = data;

  const currentPrice = market_data.current_price?.usd || 0;
  const low24h = market_data.low_24h?.usd || 0;
  const high24h = market_data.high_24h?.usd || 1;

  const progressBar = calculateProgressBar(currentPrice, low24h, high24h);

  return (
    <div className='relative z-10'>
      {/* Current Price */}
      <div className='text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-2'>
        <Price marketData={market_data} />
      </div>

      {/* 24h Price Range */}
      <div className='mt-4 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm'>
        <div className='text-[0.65rem] sm:text-xs font-bold text-white/40 uppercase tracking-wider mb-2 sm:mb-3'>
          24h Price Range
        </div>
        <div className='relative'>
          <div className='h-1.5 w-full bg-white/10 rounded-full overflow-hidden'>
            <div
              className='h-full bg-linear-to-r from-(--brand-blue) to-(--brand-positive) rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]'
              style={{ width: `${progressBar}%` }}
            />
          </div>

          <div className='flex justify-between mt-2 text-xs sm:text-sm font-mono text-white/60'>
            <div>{formatCurrency(low24h)}</div>
            <div>{formatCurrency(high24h)}</div>
          </div>
        </div>
      </div>

      {/* Price Change Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4'>
        {priceChange.map((days) => (
          <PriceChange key={days} marketData={market_data} days={days} />
        ))}
      </div>
    </div>
  );
}
