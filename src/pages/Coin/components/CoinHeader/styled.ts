import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'rgba(64, 156, 255, 0.06)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3, 4),
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  isolation: 'isolate',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 4),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 4),
    marginBottom: theme.spacing(3),
  },
})) as typeof Box;
