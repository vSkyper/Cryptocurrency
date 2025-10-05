import { Typography, IconButton, Link, Tooltip, Box } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Title() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, sm: 1.5 },
      }}
    >
      <Tooltip title='Go to Homepage' arrow placement='bottom'>
        <IconButton
          color='inherit'
          size='medium'
          edge='start'
          sx={{
            background:
              'linear-gradient(135deg, rgba(64, 156, 255, 0.15) 0%, rgba(64, 156, 255, 0.08) 100%)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(64, 156, 255, 0.2)',
            borderRadius: { xs: '8px', sm: '12px' },
            color: '#409CFF',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            padding: { xs: 1, sm: 2 },
            ml: { xs: 1, sm: 0 },
            position: 'relative',
            overflow: 'hidden',
            '& .MuiSvgIcon-root': {
              fontSize: { xs: '1.1rem', sm: '1rem' },
              filter: 'drop-shadow(0 2px 4px rgba(64, 156, 255, 0.3))',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(90deg, transparent, rgba(64, 156, 255, 0.2), transparent)',
              transition: 'left 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(64, 156, 255, 0.25) 0%, rgba(64, 156, 255, 0.15) 100%)',
              transform: 'translateY(-2px) scale(1.05)',
              boxShadow:
                '0 8px 25px rgba(64, 156, 255, 0.25), 0 4px 12px rgba(0,0,0,0.15)',
              border: '1px solid rgba(64, 156, 255, 0.4)',
              '&::before': {
                left: '100%',
              },
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.02)',
            },
          }}
          component={RouterLink}
          to='/'
        >
          <TrendingUpIcon />
        </IconButton>
      </Tooltip>

      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{
          display: { xs: 'none', sm: 'block' },
          fontWeight: 700,
          fontSize: { sm: '1.1rem', md: '1.25rem' },
          letterSpacing: '0.5px',
        }}
      >
        <Link
          underline='none'
          component={RouterLink}
          to='/'
          sx={{
            background:
              'linear-gradient(135deg, #409CFF 0%, #3B82F6 50%, #409CFF 100%)',
            backgroundSize: '200% 100%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            textShadow: '0 2px 4px rgba(64, 156, 255, 0.3)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #409CFF, #3B82F6)',
              borderRadius: '1px',
              transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            '&:hover': {
              backgroundPosition: '100% 0',
              transform: 'translateY(-1px)',
              filter: 'drop-shadow(0 4px 8px rgba(64, 156, 255, 0.4))',
              '&::after': {
                width: '100%',
              },
            },
          }}
        >
          Cryptocurrency
        </Link>
      </Typography>

      {/* Mobile title */}
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{
          display: { xs: 'block', sm: 'none' },
          fontWeight: 700,
          fontSize: '0.95rem',
          letterSpacing: '0.5px',
        }}
      >
        <Link
          underline='none'
          component={RouterLink}
          to='/'
          sx={{
            background: 'linear-gradient(135deg, #409CFF 0%, #3B82F6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              filter: 'drop-shadow(0 2px 4px rgba(64, 156, 255, 0.4))',
            },
          }}
        >
          Crypto
        </Link>
      </Typography>
    </Box>
  );
}
