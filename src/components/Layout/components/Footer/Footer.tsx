const Footer = () => {
  return (
    <footer className='w-full bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-2 py-4 flex justify-center items-center'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full container px-2 sm:px-8'>
        {/* Left section - Powered by text */}
        <div className='flex flex-col items-center sm:items-start gap-1'>
          <span className='text-lg font-medium text-white/70'>
            Powered by{' '}
            <a
              href='https://www.coingecko.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[var(--brand-blue)] font-semibold hover:text-[var(--brand-blue-light)] transition-colors duration-200'
            >
              CoinGecko API
            </a>
          </span>
          <span className='text-xs font-normal text-white/40'>
            Real-time cryptocurrency data
          </span>
        </div>
        {/* Right section - CoinGecko badge */}
        <a
          href='https://www.coingecko.com/en/api'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center p-2 sm:p-3 rounded-2xl bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] hover:bg-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] transition-all duration-200 max-w-xs mx-auto sm:mx-0 sm:w-auto mt-4 sm:mt-0 justify-center'
        >
          <img
            alt='Data powered by CoinGecko'
            src='https://brand.coingecko.com/~gitbook/image?url=https%3A%2F%2F3936590801-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuBDUa2ODcAkHHV15nEGc%252Fuploads%252FehBmEZPreip7N8MiwFjo%252FData%2520powered%2520by.png%3Falt%3Dmedia%26token%3D4f26869b-de6c-4642-96cb-bfe1972f84d7&width=768&dpr=2&quality=100&sign=d01040b8&sv=2'
            className='h-8 sm:h-9 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
