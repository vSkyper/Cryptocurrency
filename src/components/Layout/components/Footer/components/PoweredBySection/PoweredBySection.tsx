import { FOOTER } from 'styles/styles';

const COINGECKO_URL = 'https://www.coingecko.com';

export default function PoweredBySection() {
  return (
    <div className={FOOTER.poweredBy.container}>
      <span className={FOOTER.poweredBy.text}>
        Powered by{' '}
        <a
          href={COINGECKO_URL}
          target='_blank'
          rel='noopener noreferrer'
          className={FOOTER.poweredBy.link}
        >
          CoinGecko API
        </a>
      </span>
      <span className={FOOTER.poweredBy.subtext}>
        Real-time cryptocurrency data
      </span>
    </div>
  );
}
