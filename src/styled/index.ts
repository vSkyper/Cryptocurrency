import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3.5, 3),
  borderRadius: 16,
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(20, 30, 48, 0.4)'
      : 'rgba(255, 255, 255, 0.5)',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(64, 156, 255, 0.1)'
      : 'rgba(64, 156, 255, 0.15)'
  }`,
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  minHeight: 120,
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2.5),
    minHeight: 90,
  },
}));

export const Percentage = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: theme.spacing(0.6, 1.2),
  borderRadius: theme.spacing(2),
  background: 'rgba(64, 156, 255, 0.12)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 2px 8px rgba(64, 156, 255, 0.1)',
  transition: 'transform 150ms ease',
  willChange: 'transform',
  '& .MuiSvgIcon-root': {
    marginLeft: theme.spacing(0.5),
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'translate3d(0, -1px, 0)',
    },
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    padding: theme.spacing(0.4, 0.8),
    marginLeft: theme.spacing(1),
    background: 'rgba(64, 156, 255, 0.15)',
    transition: 'none',
    '& .MuiSvgIcon-root': {
      fontSize: '0.9rem',
    },
  },
})) as typeof Typography;
