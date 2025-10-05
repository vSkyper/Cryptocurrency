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
    radial-gradient(600px circle at 20% 30%, rgba(59, 130, 246, 0.25), transparent 40%),
    radial-gradient(800px circle at 80% 70%, rgba(96, 165, 250, 0.15), transparent 40%)
  `,
  zIndex: -2,
  pointerEvents: 'none',
})) as typeof Box;
