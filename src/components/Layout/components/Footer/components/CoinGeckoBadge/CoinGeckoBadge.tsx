import { UTILITY } from 'styles/styles';

const COINGECKO_API_URL = 'https://www.coingecko.com/en/api';
const COINGECKO_BADGE_URL =
  'https://brand.coingecko.com/~gitbook/image?url=https%3A%2F%2F3936590801-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuBDUa2ODcAkHHV15nEGc%252Fuploads%252FehBmEZPreip7N8MiwFjo%252FData%2520powered%2520by.png%3Falt%3Dmedia%26token%3D4f26869b-de6c-4642-96cb-bfe1972f84d7&width=768&dpr=2&quality=100&sign=d01040b8&sv=2';

const BADGE_CONTAINER_CLASSES =
  `${UTILITY.flexCenter} p-2 sm:p-3 rounded-2xl ` +
  'bg-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] ' +
  `hover:bg-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] ${UTILITY.transitionAll} ` +
  'duration-200 max-w-xs mx-auto sm:mx-0 sm:w-auto mt-4 sm:mt-0 justify-center';

const BADGE_IMAGE_CLASSES = `h-8 sm:h-9 w-auto opacity-90 hover:opacity-100 ${UTILITY.transitionAll} duration-200`;

export default function CoinGeckoBadge() {
  return (
    <a
      href={COINGECKO_API_URL}
      target='_blank'
      rel='noopener noreferrer'
      className={BADGE_CONTAINER_CLASSES}
    >
      <img
        alt='Data powered by CoinGecko'
        src={COINGECKO_BADGE_URL}
        className={BADGE_IMAGE_CLASSES}
      />
    </a>
  );
}
