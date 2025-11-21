const COINGECKO_URL = 'https://www.coingecko.com';

export default function PoweredBySection() {
  return (
    <div className='flex flex-col items-center sm:items-start gap-1.5'>
      <span className='text-sm font-medium text-white/50 tracking-wide'>
        Powered by{' '}
        <a
          href={COINGECKO_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/90 font-bold hover:text-(--brand-blue) transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]'
        >
          CoinGecko API
        </a>
      </span>
      <span className='text-[0.7rem] text-white/30 uppercase tracking-widest font-bold'>
        Real-time cryptocurrency data
      </span>
    </div>
  );
}
