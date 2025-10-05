import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Foot = styled(Box)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2, 2),
  background: 'rgba(20, 30, 48, 0.8)',
  borderRadius: 0,
  width: '100%',
  maxWidth: '100%',
  minWidth: '100vw',
  boxSizing: 'border-box',
  position: 'relative',
  left: 0,
  right: 0,
}));
