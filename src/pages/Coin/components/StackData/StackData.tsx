import { format, formatDistance } from 'date-fns';
import { StackDataProps } from './interface';

const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
    style: 'currency',
    currency: 'USD',
  });

const formatNumber = (value: number, maxDecimals = 0) =>
  value.toLocaleString('en-US', { maximumFractionDigits: maxDecimals });

const formatPercentage = (value: number) =>
  (value / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

const formatDateWithDistance = (date: string | number | Date) => {
  const dateObj = new Date(date);
  return `${format(dateObj, 'MMM d, y')} (${formatDistance(
    Date.now(),
    dateObj
  )} ago)`;
};

export default function StackData({ marketData }: StackDataProps) {
  return (
    <div className='bg-[var(--bg-tertiary)] p-4 sm:p-6 rounded-lg sm:rounded-xl transform-gpu will-change-auto contain-layout'>
      <div className='mb-4 font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,rgba(255,255,255,0.95),color-mix(in_srgb,var(--brand-blue)_40%,transparent))] select-none'>
        Market Statistics
      </div>

      <div className='flex flex-col'>
        {/* Row helper */}
        {/** Market Capitalization */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in_srgb,var(--brand-blue)_8%, transparent)]'>
          <div className='font-semibold text-white'>Market Capitalization</div>
          <div className='font-semibold text-white/80'>
            {formatCurrency(marketData.market_cap?.usd || 0)}
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** 24h Trading Volume */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>24h Trading Volume</div>
          <div className='font-semibold text-white/80'>
            {formatCurrency(marketData.total_volume?.usd || 0)}
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** Volume / Market Cap */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>Volume / Market Cap</div>
          <div className='font-semibold text-white/80'>
            {formatNumber(
              (marketData.total_volume?.usd || 0) /
                (marketData.market_cap?.usd || 1),
              8
            )}
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** 24h Low / 24h High */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>24h Low / 24h High</div>
          <div className='text-right'>
            <div className='font-semibold text-red-400'>
              {formatCurrency(marketData.low_24h?.usd || 0)}
            </div>
            <div className='text-white/60'>/</div>
            <div className='font-semibold text-green-400'>
              {formatCurrency(marketData.high_24h?.usd || 0)}
            </div>
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** Market Cap Rank */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>Market Cap Rank</div>
          <div>
            <span className='inline-flex items-center px-3 py-1 rounded-full text-[0.85rem] font-bold text-[var(--brand-blue)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-blue-light)_20%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]'>
              {marketData.market_cap_rank
                ? `#${marketData.market_cap_rank}`
                : 'N/A'}
            </span>
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** Circulating Supply */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>Circulating Supply</div>
          <div className='font-semibold text-white/80'>
            {formatNumber(marketData.circulating_supply || 0)}
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** Total Supply */}
        <div className='flex justify-between items-center p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>Total Supply</div>
          <div className='font-semibold text-white/80'>
            {formatNumber(marketData.total_supply || 0)}
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** All-Time High */}
        <div className='flex justify-between items-start p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>All-Time High</div>
          <div className='text-right'>
            <div className='flex items-center gap-2 justify-end'>
              <div className='font-semibold text-white/80'>
                {formatCurrency(marketData.ath?.usd || 0)}
              </div>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-semibold ${
                  (marketData.ath_change_percentage?.usd || 0) < 0
                    ? 'text-[var(--brand-negative)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_10%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)]'
                    : 'text-[var(--brand-positive)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_10%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)]'
                }`}
              >
                {formatPercentage(marketData.ath_change_percentage?.usd || 0)}
              </span>
            </div>
            <div className='text-sm text-white/60 mt-1'>
              {formatDateWithDistance(marketData.ath_date?.usd || 0)}
            </div>
          </div>
        </div>

        <div className='my-2 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_srgb,var(--brand-blue)_30%,transparent)_50%,transparent_100%)]' />

        {/** All-Time Low */}
        <div className='flex justify-between items-start p-4 rounded-xl transition-colors duration-150 hover:bg-[rgba(64,156,255,0.06)] md:hover:bg-[color-mix(in srgb,var(--brand-blue) 8%, transparent)]'>
          <div className='font-semibold text-white'>All-Time Low</div>
          <div className='text-right'>
            <div className='flex items-center gap-2 justify-end'>
              <div className='font-semibold text-white/80'>
                {formatCurrency(marketData.atl?.usd || 0)}
              </div>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-semibold ${
                  (marketData.atl_change_percentage?.usd || 0) < 0
                    ? 'text-[var(--brand-negative)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-negative)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-negative)_10%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-negative)_30%,transparent)]'
                    : 'text-[var(--brand-positive)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-positive)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-positive)_10%,transparent)_100%)] border border-[color-mix(in_srgb,var(--brand-positive)_30%,transparent)]'
                }`}
              >
                {formatPercentage(marketData.atl_change_percentage?.usd || 0)}
              </span>
            </div>
            <div className='text-sm text-white/60 mt-1'>
              {formatDateWithDistance(marketData.atl_date?.usd || 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
