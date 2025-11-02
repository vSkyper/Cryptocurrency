import { CoinHeaderProps } from './interface';
import { BADGE, COIN } from 'styles/styles';

export default function CoinHeader({
  name,
  symbol,
  image,
  marketCapRank,
}: CoinHeaderProps) {
  return (
    <div className={COIN.header.container}>
      <div className={COIN.header.contentWrapper}>
        {/* Coin Image */}
        <div className={COIN.header.imageWrapper}>
          {image ? (
            <img
              src={image}
              alt={name}
              className='w-full h-full rounded-full object-cover'
            />
          ) : (
            <div className='w-full h-full rounded-full bg-white/5' />
          )}
        </div>

        {/* Coin Info */}
        <div className={COIN.header.infoWrapper}>
          <div className={COIN.header.titleWrapper}>
            <h1 className={COIN.header.title}>{name}</h1>

            <span className={COIN.header.symbol}>{symbol}</span>

            {marketCapRank && (
              <span className={`${BADGE.base} ${BADGE.symbol}`}>
                #{marketCapRank}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
