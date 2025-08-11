import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Name = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  marginBottom: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2.5, 1.5),
})) as typeof Paper;

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(135deg, 
    rgba(16, 18, 27, 0.85) 0%, 
    rgba(13, 14, 14, 0.9) 50%,
    rgba(16, 18, 27, 0.85) 100%
  )`,
  backdropFilter: 'blur(24px) saturate(180%)',
  border: `1px solid rgba(208, 188, 255, 0.12)`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.5, 1.5),
  marginBottom: theme.spacing(2),
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.3),
    0 2px 16px rgba(208, 188, 255, 0.05),
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
  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5, 2.5),
    marginBottom: theme.spacing(2.5),
    borderRadius: theme.spacing(2.5),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 3),
    marginBottom: theme.spacing(2.5),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.08) 0%, 
      rgba(204, 194, 220, 0.05) 30%,
      transparent 70%
    )`,
    zIndex: -1,
    opacity: 0.8,
  },
})) as typeof Box;

export const GradientBackground = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `
    radial-gradient(600px circle at 20% 30%, rgba(120, 119, 198, 0.3), transparent 40%),
    radial-gradient(800px circle at 80% 70%, rgba(255, 119, 198, 0.2), transparent 40%),
    radial-gradient(1000px circle at 40% 80%, rgba(120, 200, 255, 0.15), transparent 40%)
  `,
  zIndex: -2,
  pointerEvents: 'none',
  animation: 'float 20s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0px, 0px) scale(1)',
    },
    '33%': {
      transform: 'translate(10px, -10px) scale(1.05)',
    },
    '66%': {
      transform: 'translate(-5px, 5px) scale(0.95)',
    },
  },
})) as typeof Box;
