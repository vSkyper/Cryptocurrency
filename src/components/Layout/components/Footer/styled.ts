import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Foot = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2, 2),
  background:
    'linear-gradient(135deg, rgba(8, 9, 12, 0.9) 0%, rgba(6, 7, 8, 0.95) 100%)',
  backdropFilter: 'blur(20px)',
  borderTop: '1px solid rgba(208, 188, 255, 0.2)',
  borderRadius: 0,
  width: '100%',
  maxWidth: '100%',
  minWidth: '100vw',
  boxSizing: 'border-box',
  position: 'relative',
  left: 0,
  right: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '1px',
    background:
      'linear-gradient(90deg, transparent 0%, rgba(208, 188, 255, 0.4) 50%, transparent 100%)',
  },
})) as typeof Paper;
