import { StackDataProps } from './interface';
import { ExtremeValueRow, StatRow } from './components';
import { formatCurrency, formatNumber } from 'utils/formatters';

export default function StackData({ marketData }: StackDataProps) {
  const volumeToMarketCap =
    (marketData.total_volume?.usd || 0) / (marketData.market_cap?.usd || 1);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-10'>
      <div className='hidden font-bold text-base sm:text-lg md:text-xl bg-clip-text text-transparent bg-linear-to-r from-white via-(--brand-blue-light) to-(--brand-blue)'>
        Market Statistics
      </div>

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
          <div className='flex flex-col items-end justify-center h-full sm:block sm:text-right'>
            <div className='font-bold text-red-400 text-sm sm:text-lg md:text-xl leading-tight'>
              {formatCurrency(marketData.low_24h?.usd || 0)}
            </div>
            <div className='hidden sm:inline text-white/40 mx-2'>/</div>
            <div className='font-bold text-green-400 text-sm sm:text-lg md:text-xl leading-tight'>
              {formatCurrency(marketData.high_24h?.usd || 0)}
            </div>
          </div>
        }
      />

      <StatRow
        label='Market Cap Rank'
        value={
          <div className='w-fit px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-(--brand-blue)/10 border border-(--brand-blue)/20 text-(--brand-blue) font-bold text-[0.7rem] sm:text-base shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-xl backdrop-saturate-150'>
            {marketData.market_cap_rank
              ? `#${marketData.market_cap_rank}`
              : 'N/A'}
          </div>
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
  );
}
