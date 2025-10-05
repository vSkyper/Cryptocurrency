import { Box, Backdrop } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const Chart = styled(Box)(({ theme }) => ({
  height: 320,
  padding: theme.spacing(2),
  borderRadius: 16,
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    height: 280,
    padding: theme.spacing(1.5),
    borderRadius: 12,
  },
  background: 'var(--bg-tertiary)',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  [theme.breakpoints.up('sm')]: {
    height: 480,
    padding: theme.spacing(3),
  },
}));

export const StyledBackdrop = styled(Backdrop)(() => ({
  color: 'inherit',
  position: 'absolute',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
}));
