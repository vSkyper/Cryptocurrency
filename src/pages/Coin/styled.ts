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
