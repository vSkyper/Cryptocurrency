import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientBackground = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  background: `linear-gradient(135deg, 
      rgb(15, 23, 42) 0%, 
      rgb(17, 24, 39) 50%, 
      rgb(15, 23, 42) 100%
    )`,
  zIndex: -1,
  pointerEvents: 'none',
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  minHeight: '100vh',
}));
