import { Price, PriceChange } from './components';
import { priceChange } from 'constants/coin';
import { PriceCardProps } from './interface';
import { formatCurrency } from 'utils/formatters';
import { CARD, COIN } from 'styles/styles';

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
    <div className={COIN.priceCard.container}>
      <div className={CARD.base}>
        {/* Current Price */}
        <div className={COIN.priceCard.currentPrice}>
          <Price marketData={market_data} />
        </div>

        {/* 24h Price Range */}
        <div className={COIN.priceCard.rangeContainer}>
          <div className={COIN.priceCard.rangeTitle}>24h Price Range</div>
          <div className={COIN.priceCard.rangeWrapper}>
            <div className={COIN.priceCard.progressTrack}>
              <div
                className={COIN.priceCard.progressBar}
                style={{ width: `${progressBar}%` }}
              />
            </div>

            <div className={COIN.priceCard.rangeValues}>
              <div>{formatCurrency(low24h)}</div>
              <div>{formatCurrency(high24h)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Change Grid */}
      <div className={COIN.priceCard.priceChangeGrid}>
        {priceChange.map((days) => (
          <PriceChange key={days} marketData={market_data} days={days} />
        ))}
      </div>
    </div>
  );
}
