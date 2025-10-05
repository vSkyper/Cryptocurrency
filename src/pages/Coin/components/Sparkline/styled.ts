import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Chart = styled(Box)(({ theme }) => ({
  height: 320,
  padding: theme.spacing(2),
  borderRadius: 16,
  background: 'rgba(20, 30, 48, 0.4)',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  [theme.breakpoints.up('sm')]: {
    height: 480,
    padding: theme.spacing(3),
  },
}));
