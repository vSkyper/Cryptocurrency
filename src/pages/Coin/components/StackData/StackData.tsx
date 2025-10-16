import { StackDataProps } from './interface';
import { ExtremeValueRow, StatRow } from './components';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
  style: 'currency',
  currency: 'USD',
});

const formatCurrency = (value: number) => currencyFormatter.format(value);

const formatNumber = (value: number, maxDecimals = 0) =>
  value.toLocaleString('en-US', { maximumFractionDigits: maxDecimals });

const CONTAINER_CLASSES =
  'p-4 sm:p-6 rounded-lg sm:rounded-xl ' +
  'bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-tertiary)_85%,transparent)_0%,color-mix(in_srgb,var(--bg-tertiary)_55%,transparent)_100%)]';

const TITLE_CLASSES =
  'mb-4 font-bold text-lg sm:text-xl bg-clip-text text-transparent ' +
  'bg-[linear-gradient(135deg,rgba(255,255,255,0.95),color-mix(in_srgb,var(--brand-blue)_40%,transparent))] ' +
  'select-none';

const RANK_BADGE_CLASSES =
  'inline-flex items-center py-0.5 px-3 sm:py-1 text-xs sm:text-sm rounded-full font-bold ' +
  'text-[var(--brand-blue)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-blue)_20%,transparent)_0%,color-mix(in_srgb,var(--brand-blue-light)_20%,transparent)_100%)] ' +
  'border border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)]';

export default function StackData({ marketData }: StackDataProps) {
  const volumeToMarketCap =
    (marketData.total_volume?.usd || 0) / (marketData.market_cap?.usd || 1);

  return (
    <div className={CONTAINER_CLASSES}>
      <div className={TITLE_CLASSES}>Market Statistics</div>

      <div className='flex flex-col text-sm sm:text-base'>
        <StatRow
          label='Market Capitalization'
          value={formatCurrency(marketData.market_cap?.usd || 0)}
        />

        <StatRow
          label='24h Trading Volume'
          value={formatCurrency(marketData.total_volume?.usd || 0)}
        />

        <StatRow
          label='Volume / Market Cap'
          value={formatNumber(volumeToMarketCap, 8)}
        />

        <StatRow
          label='24h Low / 24h High'
          value={
            <div className='text-right'>
              <div className='font-semibold text-red-400'>
                {formatCurrency(marketData.low_24h?.usd || 0)}
              </div>
              <div className='text-white/60'>/</div>
              <div className='font-semibold text-green-400'>
                {formatCurrency(marketData.high_24h?.usd || 0)}
              </div>
            </div>
          }
        />

        <StatRow
          label='Market Cap Rank'
          value={
            <span className={RANK_BADGE_CLASSES}>
              {marketData.market_cap_rank
                ? `#${marketData.market_cap_rank}`
                : 'N/A'}
            </span>
          }
        />

        <StatRow
          label='Circulating Supply'
          value={formatNumber(marketData.circulating_supply || 0)}
        />

        <StatRow
          label='Total Supply'
          value={formatNumber(marketData.total_supply || 0)}
        />

        <ExtremeValueRow
          label='All-Time High'
          price={marketData.ath?.usd || 0}
          percentage={marketData.ath_change_percentage?.usd || 0}
          date={marketData.ath_date?.usd || 0}
        />

        <ExtremeValueRow
          label='All-Time Low'
          price={marketData.atl?.usd || 0}
          percentage={marketData.atl_change_percentage?.usd || 0}
          date={marketData.atl_date?.usd || 0}
        />
      </div>
    </div>
  );
}
