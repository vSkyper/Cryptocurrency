import { CoinHeaderProps } from './interface';

export default function CoinHeader({
  name,
  symbol,
  image,
  marketCapRank,
}: CoinHeaderProps) {
  return (
    <div className='mb-6 sm:mb-12 relative z-10'>
      <div className='flex items-center gap-4 sm:gap-6'>
        {/* Coin Image */}
        <div className='relative w-12! h-12! sm:w-20! sm:h-20! rounded-2xl shadow-[0_0_40px_rgba(0,240,255,0.1)] transition-transform duration-500 hover:scale-105 border border-white/10 bg-white/5 p-1.5 sm:p-2 backdrop-blur-sm'>
          {image ? (
            <img
              src={image}
              alt={name}
              className='w-full h-full rounded-2xl object-cover'
            />
          ) : (
            <div className='w-full h-full rounded-2xl bg-white/5' />
          )}
        </div>

        {/* Coin Info */}
        <div className='flex flex-col gap-1 sm:gap-1.5'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter leading-none drop-shadow-lg'>
            {name}
          </h1>

          <div className='flex items-center gap-2'>
            <span className='text-[0.65rem] sm:text-xs font-bold text-white/60 uppercase tracking-widest bg-white/5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-white/10 hover:bg-white/10 transition-colors'>
              {symbol}
            </span>

            {marketCapRank && (
              <span className='text-[0.65rem] sm:text-xs font-bold rounded-full px-2.5 py-1 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 bg-(--brand-blue)/10 border border-(--brand-blue)/20 text-(--brand-blue) tracking-wide shadow-[0_0_10px_rgba(0,240,255,0.1)]'>
                #{marketCapRank}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
