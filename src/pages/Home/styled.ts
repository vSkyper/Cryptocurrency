import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientBackground = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  background: `
    radial-gradient(600px circle at 20% 30%, rgba(59, 130, 246, 0.25), transparent 40%),
    radial-gradient(800px circle at 80% 70%, rgba(96, 165, 250, 0.15), transparent 40%)
  `,
  zIndex: -2,
  pointerEvents: 'none',
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}));
