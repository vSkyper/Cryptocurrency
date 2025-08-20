import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.08) 0%, 
    rgba(204, 194, 220, 0.04) 100%
  )`,
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(208, 188, 255, 0.2)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3, 4),
  marginBottom: theme.spacing(3),
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.3),
    0 4px 16px rgba(208, 188, 255, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.08)
  `,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  transform: 'translateZ(0)',
  willChange: 'auto',
  contain: 'layout style',
  isolation: 'isolate',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 4),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 4),
    marginBottom: theme.spacing(3),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.05), 
      rgba(204, 194, 220, 0.03), 
      transparent 50%
    )`,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
})) as typeof Box;
