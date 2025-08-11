import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Foot = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3, 2),
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  borderRadius: 0,
  width: '100%',
  maxWidth: '100%',
  minWidth: '100vw',
  boxSizing: 'border-box',
  position: 'relative',
  left: 0,
  right: 0,
})) as typeof Paper;
