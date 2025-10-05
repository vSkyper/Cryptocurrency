import {
  Foot,
  FooterContent,
  LeftSection,
  PoweredByText,
  ApiLink,
  SubtitleText,
  BadgeContainer,
  BadgeImage,
} from './styled';

const Footer = () => {
  return (
    <Foot>
      <FooterContent>
        {/* Left section - Powered by text */}
        <LeftSection>
          <PoweredByText variant='body2'>
            Powered by{' '}
            <ApiLink
              underline='none'
              href='https://www.coingecko.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              CoinGecko API
            </ApiLink>
          </PoweredByText>

          <SubtitleText variant='caption'>
            Real-time cryptocurrency data
          </SubtitleText>
        </LeftSection>

        {/* Right section - CoinGecko badge */}
        <BadgeContainer
          href='https://www.coingecko.com/en/api'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BadgeImage
            alt='Data powered by CoinGecko'
            src='https://brand.coingecko.com/~gitbook/image?url=https%3A%2F%2F3936590801-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuBDUa2ODcAkHHV15nEGc%252Fuploads%252FehBmEZPreip7N8MiwFjo%252FData%2520powered%2520by.png%3Falt%3Dmedia%26token%3D4f26869b-de6c-4642-96cb-bfe1972f84d7&width=768&dpr=2&quality=100&sign=d01040b8&sv=2'
          />
        </BadgeContainer>
      </FooterContent>
    </Foot>
  );
};

export default Footer;
