import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Box)(({ theme }) => ({
  height: 320,
  padding: theme.spacing(2),
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
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  [theme.breakpoints.up('sm')]: {
    height: 480,
    padding: theme.spacing(3),
  },
}));
