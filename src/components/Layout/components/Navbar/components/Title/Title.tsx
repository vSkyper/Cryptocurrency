import { Typography, IconButton, Link, Tooltip } from '@mui/material';
import { EuroSymbol as EuroSymbolIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Title() {
  return (
    <>
      <Tooltip title='Homepage'>
        <IconButton
          color='inherit'
          size='large'
          edge='start'
          sx={{
            mr: 2,
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.9)',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
              transform: 'translateY(-2px) scale(1.05)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            },
          }}
          component={RouterLink}
          to='/'
        >
          <EuroSymbolIcon />
        </IconButton>
      </Tooltip>
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{
          flexGrow: 1,
          display: { xs: 'none', sm: 'block' },
          fontWeight: 700,
          letterSpacing: 0.5,
        }}
      >
        <Link
          underline='none'
          component={RouterLink}
          to='/'
          sx={{
            background: (theme) => `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.9), 
              ${theme.palette.primary.main}aa
            )`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              opacity: 0.8,
              transform: 'translateY(-1px)',
            },
          }}
        >
          Cryptocurrency
        </Link>
      </Typography>
    </>
  );
}
