import { CoinHeaderProps } from './interface';

export default function CoinHeader({
  name,
  symbol,
  image,
  marketCapRank,
}: CoinHeaderProps) {
  return (
    <div className='mb-6'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)]'>
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

        <div className='flex-1'>
          <div className='flex items-center gap-3 flex-wrap'>
            <h1 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
              {name}
            </h1>

            <span className='text-md sm:text-lg font-semibold text-white/70 uppercase'>
              {symbol}
            </span>

            {marketCapRank && (
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-[var(--brand-blue)] bg-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] border border-[color-mix(in_srgb,var(--brand-blue)_30%,transparent)]'>
                #{marketCapRank}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
