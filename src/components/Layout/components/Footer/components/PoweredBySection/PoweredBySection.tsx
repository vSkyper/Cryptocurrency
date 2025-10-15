const COINGECKO_URL = 'https://www.coingecko.com';

const LINK_CLASSES =
  'text-[var(--brand-blue)] font-semibold hover:text-[var(--brand-blue-light)] ' +
  'transition-colors duration-200';

export default function PoweredBySection() {
  return (
    <div className='flex flex-col items-center sm:items-start gap-1'>
      <span className='text-lg font-medium text-white/70'>
        Powered by{' '}
        <a
          href={COINGECKO_URL}
          target='_blank'
          rel='noopener noreferrer'
          className={LINK_CLASSES}
        >
          CoinGecko API
        </a>
      </span>
      <span className='text-xs font-normal text-white/40'>
        Real-time cryptocurrency data
      </span>
    </div>
  );
}
