import { Divider, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernDataCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: 'rgba(64, 156, 255, 0.06)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  contain: 'layout style paint',
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
    },
  },
  [theme.breakpoints.down('md')]: {
    transition: 'none',
  },
}));

export const DataRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  position: 'relative',
  zIndex: 1,
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(0.5)}`,
  },
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      background: 'rgba(64, 156, 255, 0.08)',
    },
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  background: `linear-gradient(90deg, 
    transparent 0%, 
    rgba(64, 156, 255, 0.3) 50%, 
    transparent 100%
  )`,
  height: '1px',
  border: 'none',
  margin: theme.spacing(0.5, 0),
}));
