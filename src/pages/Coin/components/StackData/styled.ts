import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModernDataCard = styled(Box)(({ theme }) => ({
  background: 'rgba(20, 30, 48, 0.4)',
  padding: theme.spacing(3),
  borderRadius: 16,
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
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
