import { Price, PriceChange } from './components';
import { priceChange } from 'constants/coin';
import { PriceCardProps } from './interface';
import { formatCurrency } from 'utils/formatters';
import { CARD } from 'styles/styles';

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

const PROGRESS_BAR_CLASSES =
  'h-2.5 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] ' +
  'shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_30%,transparent)] transition-all duration-300';

const PROGRESS_TRACK_CLASSES =
  'w-full bg-[linear-gradient(90deg,color-mix(in_srgb,var(--brand-blue)_8%,transparent),color-mix(in_srgb,var(--brand-blue-light)_5%,transparent))] ' +
  'h-2.5 rounded-full overflow-hidden';

export default function PriceCard({ data }: PriceCardProps) {
  const { market_data } = data;

  const currentPrice = market_data.current_price?.usd || 0;
  const low24h = market_data.low_24h?.usd || 0;
  const high24h = market_data.high_24h?.usd || 1;

  const progressBar = calculateProgressBar(currentPrice, low24h, high24h);

  return (
    <div className='flex flex-col gap-4'>
      <div className={CARD.base}>
        {/* Current Price */}
        <div className='text-center mb-6'>
          <Price marketData={market_data} />
        </div>

        {/* 24h Price Range */}
        <div className='mb-3'>
          <div className='text-center text-sm font-semibold text-white/70 mb-2'>
            24h Price Range
          </div>
          <div className='px-1'>
            <div className={PROGRESS_TRACK_CLASSES}>
              <div
                className={PROGRESS_BAR_CLASSES}
                style={{ width: `${progressBar}%` }}
              />
            </div>

            <div className='flex justify-between text-xs text-white/60 mt-2 px-1'>
              <div>{formatCurrency(low24h)}</div>
              <div>{formatCurrency(high24h)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Change Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3'>
        {priceChange.map((days) => (
          <PriceChange key={days} marketData={market_data} days={days} />
        ))}
      </div>
    </div>
  );
}
