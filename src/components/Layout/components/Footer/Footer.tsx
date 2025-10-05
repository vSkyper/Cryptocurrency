import { Typography, Link, Box } from '@mui/material';
import { Foot } from './styled';

const Footer = () => {
  return (
    <Foot>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          textAlign: 'center',
          width: '100%',
          maxWidth: 1200,
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Left section - Powered by text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 1,
          }}
        >
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Powered by{' '}
            <Link
              underline='none'
              href='https://www.coingecko.com'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: '#409CFF',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 200ms ease',
                '&:hover': {
                  color: '#3B82F6',
                },
              }}
            >
              CoinGecko API
            </Link>
          </Typography>

          <Typography
            variant='caption'
            sx={{
              color: 'text.disabled',
              fontSize: '12px',
              fontWeight: 400,
            }}
          >
            Real-time cryptocurrency data
          </Typography>
        </Box>

        {/* Right section - CoinGecko badge */}
        <Box
          component='a'
          href='https://www.coingecko.com/en/api'
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: 1.5,
            borderRadius: 2,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(64, 156, 255, 0.1)'
                : 'rgba(64, 156, 255, 0.08)',
            border: (theme) =>
              `1px solid ${
                theme.palette.mode === 'dark'
                  ? 'rgba(64, 156, 255, 0.2)'
                  : 'rgba(64, 156, 255, 0.25)'
              }`,
            transition: 'all 200ms ease',
            textDecoration: 'none',
            '&:hover': {
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(64, 156, 255, 0.15)'
                  : 'rgba(64, 156, 255, 0.12)',
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === 'dark'
                    ? 'rgba(64, 156, 255, 0.3)'
                    : 'rgba(64, 156, 255, 0.35)'
                }`,
            },
          }}
        >
          <Box
            component='img'
            alt='Data powered by CoinGecko'
            src='https://brand.coingecko.com/~gitbook/image?url=https%3A%2F%2F3936590801-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FuBDUa2ODcAkHHV15nEGc%252Fuploads%252FehBmEZPreip7N8MiwFjo%252FData%2520powered%2520by.png%3Falt%3Dmedia%26token%3D4f26869b-de6c-4642-96cb-bfe1972f84d7&width=768&dpr=2&quality=100&sign=d01040b8&sv=2'
            sx={{
              height: { xs: 32, sm: 36 },
              width: 'auto',
              opacity: 0.9,
              transition: 'opacity 200ms ease',
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        </Box>
      </Box>
    </Foot>
  );
};

export default Footer;
