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
    ${theme.palette.background.paper}dd 0%, 
    ${theme.palette.background.default}bb 100%
  )`,
  border: `1px solid ${theme.palette.divider}60`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4, 3),
  marginBottom: theme.spacing(4),
  boxShadow: `
    0 4px 16px rgba(0,0,0,0.2),
    inset 0 1px 0 rgba(255,255,255,0.05)
  `,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}08, 
      ${theme.palette.secondary.main}05, 
      transparent 70%
    )`,
    zIndex: -1,
  },
})) as typeof Box;

export const GradientBackground = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  maxWidth: '100vw',
  height: '100%',
  overflow: 'hidden',
  background: `
    radial-gradient(600px circle at 20% 30%, rgba(120, 119, 198, 0.3), transparent 40%),
    radial-gradient(800px circle at 80% 70%, rgba(255, 119, 198, 0.2), transparent 40%),
    radial-gradient(1000px circle at 40% 80%, rgba(120, 200, 255, 0.15), transparent 40%)
  `,
  zIndex: -2,
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
