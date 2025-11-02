import { StackDataProps } from './interface';
import { ExtremeValueRow, StatRow } from './components';
import { formatCurrency } from 'utils/formatters';
import { CARD, TYPOGRAPHY, BADGE, COIN } from 'styles/styles';

const formatNumber = (value: number, maxDecimals = 0) =>
  value.toLocaleString('en-US', { maximumFractionDigits: maxDecimals });

export default function StackData({ marketData }: StackDataProps) {
  const volumeToMarketCap =
    (marketData.total_volume?.usd || 0) / (marketData.market_cap?.usd || 1);

  return (
    <div className={CARD.tertiary}>
      <div className={`${TYPOGRAPHY.title} ${COIN.stackData.title}`}>
        Market Statistics
      </div>

      <div className={COIN.stackData.container}>
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
            <div className={COIN.stackData.lowHighContainer}>
              <div className={COIN.stackData.lowValue}>
                {formatCurrency(marketData.low_24h?.usd || 0)}
              </div>
              <div className={COIN.stackData.separator}>/</div>
              <div className={COIN.stackData.highValue}>
                {formatCurrency(marketData.high_24h?.usd || 0)}
              </div>
            </div>
          }
        />

        <StatRow
          label='Market Cap Rank'
          value={
            <span className={BADGE.symbol}>
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
