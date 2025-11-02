import { IMarketData } from 'interfaces';
import { PriceChangeProps } from './interface';
import { formatPercentage } from 'utils/formatters';
import { CARD, COIN } from 'styles/styles';

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
    <div className={COIN.priceChange.wrapper}>
      <div
        className={`${COIN.priceChange.container} ${CARD.tertiary} ${colorClass}`}
      >
        <div className={`${COIN.priceChange.topBar} ${topBarClass}`} />

        <div className={COIN.priceChange.value}>
          {formatPercentage(priceChange)}
        </div>

        <div className={COIN.priceChange.label}>{days} Change</div>
      </div>
    </div>
  );
}
