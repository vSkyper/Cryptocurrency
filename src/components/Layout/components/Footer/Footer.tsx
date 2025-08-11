import { Typography, Link, Box } from '@mui/material';
import { Foot } from './styled';

const Footer = () => {
  return (
    <Foot square>
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
              color: 'rgba(255, 255, 255, 0.8)',
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
                color: '#D0BCFF',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 300ms ease-in-out',
                position: 'relative',
                '&:hover': {
                  color: '#E6D7FF',
                  textShadow: '0 0 8px rgba(208, 188, 255, 0.5)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #D0BCFF, #CCC2DC)',
                  borderRadius: '1px',
                  transition: 'width 300ms ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              CoinGecko API
            </Link>
          </Typography>

          <Typography
            variant='caption'
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
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
            background:
              'linear-gradient(135deg, rgba(208, 188, 255, 0.1) 0%, rgba(204, 194, 220, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(208, 188, 255, 0.2)',
            transition: 'all 300ms ease-in-out',
            textDecoration: 'none',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(208, 188, 255, 0.2) 0%, rgba(204, 194, 220, 0.1) 100%)',
              border: '1px solid rgba(208, 188, 255, 0.4)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(208, 188, 255, 0.15)',
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
              transition: 'all 300ms ease-in-out',
              filter: 'brightness(1.1) contrast(1.1)',
              '&:hover': {
                opacity: 1,
                filter: 'brightness(1.2) contrast(1.2)',
              },
            }}
          />
        </Box>
      </Box>
    </Foot>
  );
};

export default Footer;
