import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientBackground = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
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
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}));
