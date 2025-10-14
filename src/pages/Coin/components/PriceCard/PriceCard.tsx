import { Price, PriceChange } from './components';
import { priceChange } from 'constants/coin';
import { PriceCardProps } from './interface';

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
    style: 'currency',
    currency: 'USD',
  });

const calculateProgressBar = (
  current: number,
  low: number,
  high: number
): number => {
  const progressBarCurrent = current - low;
  const progressBarHigh = high - low || 1;
  const progress = 100 * (progressBarCurrent / progressBarHigh);
  return Math.max(0, Math.min(100, progress));
};

export default function PriceCard({ data }: PriceCardProps) {
  const { market_data } = data;
  const progressBar = calculateProgressBar(
    market_data.current_price?.usd || 0,
    market_data.low_24h?.usd || 0,
    market_data.high_24h?.usd || 1
  );

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-[var(--bg-tertiary)] p-4 sm:p-6 rounded-xl'>
        <div className='text-center mb-6'>
          <Price marketData={market_data} />
        </div>

        <div className='mb-3'>
          <div className='text-center text-sm font-semibold text-white/70 mb-2'>
            24h Price Range
          </div>
          <div className='px-1'>
            <div className='w-full bg-[linear-gradient(90deg,color-mix(in_srgb,var(--brand-blue)_8%,transparent),color-mix(in_srgb,var(--brand-blue-light)_5%,transparent))] h-2.5 rounded-full overflow-hidden'>
              <div
                className='h-2.5 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] shadow-[0_2px_8px_color-mix(in_srgb,var(--brand-blue)_30%,transparent)] transition-all duration-300'
                style={{ width: `${progressBar}%` }}
              />
            </div>

            <div className='flex justify-between text-xs text-white/60 mt-2 px-1'>
              <div>{formatCurrency(market_data.low_24h?.usd || 0)}</div>
              <div>{formatCurrency(market_data.high_24h?.usd || 0)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3'>
        {priceChange.map((days) => (
          <PriceChange key={days} marketData={market_data} days={days} />
        ))}
      </div>
    </div>
  );
}
